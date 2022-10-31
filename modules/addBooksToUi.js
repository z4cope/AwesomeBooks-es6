import BooksInDom from "./renderBooksFromDom.js";
import BooksAtLocalStorage from "./booksAtLs.js";

const addBooksToUi = () => {
  const titleField = document.querySelector(".title");
  const autherField = document.querySelector(".auther");
  const addBookBtn = document.querySelector(".add-book");
  const successMsg = document.querySelector(".book-added");
  const errorMsg = document.querySelector(".error-msg");

  addBookBtn.addEventListener("click", () => {
    // Single book class
    class Book {
      constructor(id, title, auther) {
        this.id = id;
        this.title = title;
        this.auther = auther;
      }
    }
    if (titleField.value !== "" && autherField.value !== "") {
      const newBook = new Book(Date.now(), titleField.value, autherField.value);
      BooksInDom.addBook(newBook);
      // reset fields values
      titleField.value = "";
      autherField.value = "";
      // Success & failer messages on adding books
      successMsg.classList.add("show-message");
      window.setTimeout(() => {
        successMsg.classList.remove("show-message");
      }, 2000);
      errorMsg.classList.remove("show-message");
      // Add book to local storage
      BooksAtLocalStorage.addBooksToLs(newBook);
    } else {
      errorMsg.classList.add("show-message");
      window.setTimeout(() => {
        errorMsg.classList.remove("show-message");
      }, 2000);
      successMsg.classList.remove("show-message");
    }
  });
};

export default addBooksToUi;
