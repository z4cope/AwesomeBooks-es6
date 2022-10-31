class BooksAtLocalStorage {
  static getBooksFromLs() {
    let lsBooksArr;
    if (localStorage.getItem('books-list') === null) {
      lsBooksArr = [];
    } else {
      lsBooksArr = JSON.parse(localStorage.getItem('books-list'));
    }
    return lsBooksArr;
  }

  static addBooksToLs(book) {
    const booksList = BooksAtLocalStorage.getBooksFromLs();
    booksList.push(book);
    localStorage.setItem('books-list', JSON.stringify(booksList));
  }

  static removeBookFromLs(bookId) {
    const booksList = BooksAtLocalStorage.getBooksFromLs();
    booksList.forEach((book, index) => {
      if (book.id === Number(bookId)) {
        booksList.splice(index, 1);
      }
    });
    localStorage.setItem('books-list', JSON.stringify(booksList));
  }
}

export default BooksAtLocalStorage;
