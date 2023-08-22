import { signOut } from '../utils/auth';
import { getBooks, booksOnSale } from '../api/bookData';
import { getAuthors, getFavoriteAuthors } from '../api/authorData';
import { showBooks } from '../pages/books';
import { showAuthors } from '../pages/authors';

// navigation events
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  document.querySelector('#sale-books').addEventListener('click', () => {
    booksOnSale().then((response) => showBooks(response));
  });

  document.querySelector('#all-books').addEventListener('click', () => {
    getBooks().then((response) => showBooks(response));
  });

  document.querySelector('#authors').addEventListener('click', () => {
    getAuthors().then((response) => showAuthors(response));
  });

  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();
    if (e.keyCode === 13) {
      getBooks().then((response) => showBooks(response.filter((book) => book.title.toLowerCase() === searchValue)));
      document.querySelector('#search').value = '';
    }
  });

  document.querySelector('#favorite_authors').addEventListener('click', () => {
    getFavoriteAuthors().then(showAuthors);
  });
};

export default navigationEvents;
