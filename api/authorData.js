import client from '../utils/client';

const endpoint = client.databaseURL;

const getAuthors = (user) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/authors.json?orderBy="uid"&equalTo="${user}"`, {
    method: 'GET',
    header: {
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

const createAuthor = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/authors.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .then(reject);
});

const getSingleAuthor = (fireBaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/authors/${fireBaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getFavoriteAuthors = (user) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/authors.json?orderBy="uid"&equalTo="${user}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data).filter((author) => author.favorite)))
    .catch(reject);
});

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

const updateAuthor = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/authors/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
    .then((response) => response.json())
    .then(resolve)
    .then(reject);
});

const getAuthorBooks = () => {};

export {
  getAuthors,
  createAuthor,
  getSingleAuthor,
  getFavoriteAuthors,
  deleteSingleAuthor,
  updateAuthor,
  getAuthorBooks,
};
