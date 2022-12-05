import * as SL from './saveLoad.js';

function addRemoveOnClick(button, collection) {
  button.addEventListener('click', () => {
    const booksContainer = button.parentElement.parentElement;
    const book = button.parentElement;
    collection.removeBook(Array.prototype.indexOf.call(booksContainer.children, book));
    booksContainer.removeChild(book);
    SL.saveLocalStorage('collection', collection.collection);
  });
}

export default function displayColection(DOMElement, collection) {
  if (!DOMElement || !collection) { return; }
  DOMElement.innerHTML = '';
  const { collection: bookList } = collection;
  for (let i = 0; i < bookList.length; i += 1) {
    const newBook = document.createElement('article');
    newBook.classList.add('book');
    const { title, author } = bookList[i];
    newBook.innerHTML = `<p class="book-title">${title}</p>
    <p class="book-author">${author}</p>
    <button class="remove_button">Remove</button>
    `;
    DOMElement.appendChild(newBook);
  }
  SL.saveLocalStorage('collection', bookList);

  const buttonsList = document.querySelectorAll('.remove_button');
  buttonsList.forEach((button) => {
    addRemoveOnClick(button, collection);
  });
}
