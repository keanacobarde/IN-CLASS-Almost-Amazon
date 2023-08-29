import { deleteBook, getBooks, getSingleBook } from '../api/bookData';
import { showBooks } from '../pages/books';
import addBookForm from '../components/forms/addBookForm';
import viewBook from '../pages/viewBook';
import { getSingleAuthor } from '../api/authorData';
// import { showAuthors } from '../pages/authors';
import addAuthorForm from '../components/forms/addAuthorForm';
import { getBookDetails, getAuthorDetails, deleteAuthorBookRelationship } from '../api/mergedData';
import viewAuthor from '../pages/viewAuthor';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-book')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, fbk] = e.target.id.split('--');
        deleteBook(fbk).then(() => {
          getBooks(user.uid).then(showBooks);
        });
      }
    }

    if (e.target.id.includes('add-book-btn')) {
      addBookForm(user.uid);
    }

    if (e.target.id.includes('edit-book-btn')) {
      const [, fbk] = e.target.id.split('--');
      getSingleBook(fbk).then((bookObj) => addBookForm(bookObj));
    }

    if (e.target.id.includes('view-book-btn')) {
      const [, fbk] = e.target.id.split('--');
      getBookDetails(fbk).then(viewBook);
    }

    if (e.target.id.includes('delete-author-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, fbk] = e.target.id.split('--');
        deleteAuthorBookRelationship(fbk);
      }
    }

    if (e.target.id.includes('add-author-btn')) {
      addAuthorForm(user.uid);
    }

    if (e.target.id.includes('update-author')) {
      const [, fbk] = e.target.id.split('--');
      getSingleAuthor(fbk).then((authorObj) => addAuthorForm(authorObj));
    }

    if (e.target.id.includes('view-author-btn')) {
      const [, fbk] = e.target.id.split('--');
      getAuthorDetails(fbk).then(viewAuthor);
    }
  });
};

export default domEvents;
