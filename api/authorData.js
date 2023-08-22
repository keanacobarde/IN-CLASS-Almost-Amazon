import client from '../utils/client';

const endpoint = client.databaseURL;

const getAuthors = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/authors.json`, {
    method: 'GET',
    header: {
      'Content-Type': 'application/json',
    }
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// FIXME: CREATE AUTHOR
const createAuthor = () => {};

// FIXME: GET SINGLE AUTHOR
const getSingleAuthor = () => {};

// FIXME: DELETE AUTHOR
const deleteSingleAuthor = (fireBaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/authors/${fireBaseKey}.json`, {
    method: 'DELETE',
    header: {
      'Content-Type': 'application/json',
    }
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// FIXME: UPDATE AUTHOR
const updateAuthor = () => {};

// TODO: GET A SINGLE AUTHOR'S BOOKS
const getAuthorBooks = () => {};

export {
  getAuthors,
  createAuthor,
  getSingleAuthor,
  deleteSingleAuthor,
  updateAuthor,
  getAuthorBooks,
};
