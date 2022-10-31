// Render of the books in the DOM
import BooksInDom from "./modules/renderBooksFromDom.js";
// Add Books to Ui
import addBooksToUi from "./modules/addBooksToUi.js";
// Getting & setting books from & to local storage
import BooksAtLocalStorage from "./modules/booksAtLs.js"; // eslint-disable-line no-unused-vars
// Books removal funtion from ui & localstorage
import removeBook from "./modules/removeBook.js";
// One page navigation
import onePageNavigation from "./modules/onePageNavigation.js";
// //Get Date & time
import getDate from "./modules/getDate.js";
// Invoking books representaion method
document.addEventListener("DOMContentLoaded", BooksInDom.displayBooks);

// Add books in the Ui
addBooksToUi();

// Remove a book from the list
removeBook();

// Invoke one page navigation funciton
onePageNavigation();

// Get date & time
getDate();
