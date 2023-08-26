// for merged promises
import { booksbySingleAuth, getSingleBook, deleteBook } from './bookData';
import { deleteSingleAuthor, getAuthors, getSingleAuthor } from './authorData';
// import { showAuthors } from '../pages/authors';

// getting details for books - need author_id
const getBookDetails = async (firebaseKey) => {
  const bookObject = await getSingleBook(firebaseKey);
  const authorObject = await getSingleAuthor(bookObject.author_id);
  return { ...bookObject, authorObject };
};

// getting details for authors
const getAuthorDetails = async (firebaseKey) => {
  const authorObject = await getSingleAuthor(firebaseKey);
  const bookObject = await booksbySingleAuth(firebaseKey);
  return { ...authorObject, bookObject };
};

// deleting books along with single author
const deleteAuthorBookRelationship = async (firebaseKey) => {
  const authorBooks = await booksbySingleAuth(firebaseKey);
  const arrayofPromises = await authorBooks.map((book) => deleteBook(book.firebaseKey));
  await Promise.all(arrayofPromises);
  await (deleteSingleAuthor(firebaseKey));

  const authors = await getAuthors();
  return authors;
};

export { getBookDetails, getAuthorDetails, deleteAuthorBookRelationship };
