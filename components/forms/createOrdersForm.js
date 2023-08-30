import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const createOrdersForm = () => {
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
<button type="submit" class="btn btn-primary">Submit</button>
</form>`;

  renderToDOM('#form-container', domString);

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
  });
};

export default createOrdersForm;
