import { deleteBook, getBooks, getSingleBook } from '../api/bookData';
import { showBooks } from '../pages/books';
import addBookForm from '../components/forms/addBookForm';
// import viewBook from '../pages/viewBook';
import { deleteSingleAuthor, getAuthors, getSingleAuthor } from '../api/authorData';
import { showAuthors } from '../pages/authors';
import addAuthorForm from '../components/forms/addAuthorForm';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // TODO: CLICK EVENT FOR DELETING A BOOK
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

    // TODO: CLICK EVENT FOR SHOWING FORM FOR ADDING A BOOK
    if (e.target.id.includes('add-book-btn')) {
      addBookForm();
    }

    if (e.target.id.includes('edit-book-btn')) {
      const [, fbk] = e.target.id.split('--');
      getSingleBook(fbk).then((bookObj) => addBookForm(bookObj));
    }
    // TODO: CLICK EVENT FOR VIEW BOOK DETAILS
    if (e.target.id.includes('view-book-btn')) {
      console.warn('VIEW BOOK', e.target.id);
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
    // FIXME: ADD CLICK EVENT FOR EDITING AN AUTHOR
    if (e.target.id.includes('update-author')) {
      const [, fbk] = e.target.id.split('--');
      getSingleAuthor(fbk).then((authorObj) => addAuthorForm(authorObj));
    }
  });
};

export default domEvents;
