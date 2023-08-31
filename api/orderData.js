import client from '../utils/client';

const endpoint = client.databaseURL;

//  Create Order
const createOrder = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orderBooks.json`, {
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

// Update Order
const updateOrder = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orderBooks/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  createOrder,
  updateOrder
};
