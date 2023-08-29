import client from '../utils/client';
// API CALLS FOR BOOKS

const endpoint = client.databaseURL;

const getBooks = (user) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/books.json?orderBy="uid"&equalTo="${user}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const deleteBook = (fireBaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/books/${fireBaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getSingleBook = (fireBaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/books/${fireBaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createBook = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/books.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateBook = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/books/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const booksOnSale = (user) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/books.json?orderBy="uid"&equalTo="${user}"`, {
    method: 'GET',
    header: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data).filter((book) => book.sale)))
    .catch(reject);
});

const booksbySingleAuth = (fbk) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/books.json?orderBy="author_id"&equalTo="${fbk}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

export {
  getBooks,
  createBook,
  booksOnSale,
  deleteBook,
  getSingleBook,
  updateBook,
  booksbySingleAuth,
};
