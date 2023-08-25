import { deleteBook, getBooks, getSingleBook } from '../api/bookData';
import { showBooks } from '../pages/books';
import addBookForm from '../components/forms/addBookForm';
import viewBook from '../pages/viewBook';
import { deleteSingleAuthor, getAuthors, getSingleAuthor } from '../api/authorData';
import { showAuthors } from '../pages/authors';
import addAuthorForm from '../components/forms/addAuthorForm';
import { getBookDetails } from '../api/mergedData';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-book')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, fbk] = e.target.id.split('--');
        console.warn(fbk);
        deleteBook(fbk).then(() => {
          getBooks().then(showBooks);
        });
      }
    }

    if (e.target.id.includes('add-book-btn')) {
      addBookForm();
    }

    if (e.target.id.includes('edit-book-btn')) {
      const [, fbk] = e.target.id.split('--');
      getSingleBook(fbk).then((bookObj) => addBookForm(bookObj));
    }

    if (e.target.id.includes('view-book-btn')) {
      console.warn('VIEW BOOK', e.target.id);
      const [, fbk] = e.target.id.split('--');
      getBookDetails(fbk).then(viewBook);
    }

    if (e.target.id.includes('delete-author-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, fbk] = e.target.id.split('--');
        deleteSingleAuthor(fbk).then(() => { getAuthors().then(showAuthors); });
      }
    }

    if (e.target.id.includes('add-author-btn')) {
      addAuthorForm();
    }

    if (e.target.id.includes('update-author')) {
      const [, fbk] = e.target.id.split('--');
      getSingleAuthor(fbk).then((authorObj) => addAuthorForm(authorObj));
    }

    if (e.target.id.includes('view-author-btn')) {
      console.warn('VIEW AUTHOR', e.target.id.split('--'));
    }
  });
};

export default domEvents;
