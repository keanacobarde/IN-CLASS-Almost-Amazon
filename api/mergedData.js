// for merged promises
import { getBooks, getSingleBook } from './bookData';
import { getSingleAuthor } from './authorData';

// getting details for books - need author_id
const getBookDetails = async (firebaseKey) => {
  const bookObject = await getSingleBook(firebaseKey);
  const authorObject = await getSingleAuthor(bookObject.author_id);
  return { ...bookObject, authorObject };
};

// getting details for authors
const getAuthorDetails = async (firebaseKey) => {
  const authorObject = await getSingleAuthor(firebaseKey);
  const bookObject = await getBooks();
  return { ...authorObject, bookObject };
};

export { getBookDetails, getAuthorDetails };
