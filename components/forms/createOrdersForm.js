import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';
import { getBooks } from '../../api/bookData';
import { createOrder, updateOrder } from '../../api/orderData';

const allBooksUserCanOrder = (array) => {
  let domString = '';
  if (array.length <= 0) {
    domString = '<h1> No Books </h1>';
  } else {
    array.forEach((item) => {
      domString += `
      <div class="card" style="display:flex;">
        <img class="card-img-top" src=${item.image} alt=${item.title} style="height:auto;">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
            <p class="card-text bold">${item.sale ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${item.price}` : `$${item.price}`}</p>
            <hr>
            <div style="display:grid;">
            <i class="btn btn-success" id="view-book-btn--${item.firebaseKey}"> View Book </i>
            <i class="btn btn-info" id="order-book-btn--${item.firebaseKey}"> Add to Order </i>
            </div>
        </div>
      </div>`;
    });
  }
  renderToDOM('#booksToOrder', domString);
};

const createOrdersForm = (user) => {
  clearDom();
  const domString = `<form id="createOrderForm">
<div class="mb-3">
  <label for="customerName" class="form-label">Customer Name</label>
  <input type="string" class="form-control" id="customerName" aria-describedby="emailHelp">
</div>
<div class="mb-3">
  <label for="customerEmail" class="form-label">Email</label>
  <input type="email" class="form-control" id="customerEmail">
</div>
<div class="dropdown" style="margin:0.5rem 0;">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="order-label">
    Order Type
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#" value="online" id="online-order">Online</a></li>
    <li><a class="dropdown-item" href="#" value="in-person" id="in-person-order">In person</a></li>
    <li><a class="dropdown-item" href="#" value="curbside" id="curbside-order">Curbside</a></li>
  </ul>
</div>
<button type="submit" class="btn btn-primary" id="submitOrders">Order Now</button>
<div id="booksToOrder"></div>
</form>`;

  renderToDOM('#form-container', domString);

  // EVENT LISTENERS //
  document.querySelector('#form-container').addEventListener('click', (e) => {
    if (e.target.id === 'online-order') {
      document.querySelector('#order-label').innerHTML = 'Online';
    }

    if (e.target.id === 'in-person-order') {
      document.querySelector('#order-label').innerHTML = 'In Person';
    }

    if (e.target.id === 'curbside-order') {
      document.querySelector('#order-label').innerHTML = 'Curbside';
    }

    if (e.target.id === 'submitOrders') {
      const booksToShow = () => getBooks(user.uid).then(allBooksUserCanOrder);
      booksToShow();
    }

    if (e.target.id.includes('order-book-btn')) {
      console.warn(e.target.id);
      const [, fbk] = e.target.id.split('--');
      const payload = {
        bookid: fbk,
      };
      createOrder(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateOrder(patchPayload);
      });
    }
  });
};

export default createOrdersForm;
