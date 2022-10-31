// Getting & setting books from & inside local storage
import BooksAtLocalStorage from './booksAtLs.js';

class BooksInDom {
  static displayBooks() {
    const books = BooksAtLocalStorage.getBooksFromLs();
    books.forEach((book) => BooksInDom.addBook(book));
  }

  // Add book to the ui
  static addBook(book) {
    const booksWrapper = document.querySelector('.books-wrapper');

    booksWrapper.innerHTML += `
      <li class="single-book" data-id=${book.id}>
          <div>
              <h2>${book.title}</h2>
              <h3>${book.auther}</h3>
          </div>
          <button class="del-btn">Remove</button>
      </li>
      `;
  }

  // remove book from the ui
  static removeBook(element) {
    if (element.classList.contains('del-btn')) {
      const singleBookWrapper = element.parentElement;
      singleBookWrapper.remove();
    }
  }
}

export default BooksInDom;
