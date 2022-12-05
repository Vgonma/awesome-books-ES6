import { DateTime } from './modules/luxon.js';
import Book from './modules/book.js';
import Collection from './modules/collection.js';
import * as SL from './modules/saveLoad.js';
import displayColection from './modules/bookList.js';
import addTransitionToMenu from './modules/navInteraction.js';

const date = document.createElement('div');
date.classList.add('nav-date');
date.innerHTML = DateTime.now().toLocaleString(DateTime.DATE_HUGE);
document.querySelector('.nav-container').appendChild(date);

const lib = new Collection();
lib.insertBook(new Book('Lorem ipsum', 'Testeroo Testyy'));
lib.insertBook(new Book('Second Book', 'Testeroo Testyy'));

(SL.loadLocalStorage('collection', lib));
const booksContainer = document.querySelector('.book-section');
displayColection(booksContainer, lib);

const button = document.querySelector('.add_button');
button.addEventListener('click', (event) => {
  event.preventDefault();
  const title = document.querySelector('.title');
  const author = document.querySelector('.author');
  if (title.value && author.value) {
    lib.insertBook(new Book(title.value, author.value));
    title.value = '';
    author.value = '';
  }
  displayColection(booksContainer, lib);
});

const navList = document.querySelectorAll('.nav-li');
addTransitionToMenu(navList, lib);