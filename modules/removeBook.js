import BooksInDom from './renderBooksFromDom.js';
import BooksAtLocalStorage from './booksAtLs.js';

const removeBook = () => {
  const booksWrapper = document.querySelector('.books-wrapper');

  booksWrapper.addEventListener('click', (e) => {
    // Remove book from DOM
    BooksInDom.removeBook(e.target);
    // Remove book from local storage
    BooksAtLocalStorage.removeBookFromLs(e.target.parentElement.dataset.id);
  });
};

export default removeBook;
