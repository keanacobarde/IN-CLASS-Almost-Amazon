import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyAuthors = () => {
  const domString = '<h1>No Authors</h1>';
  renderToDOM('#store', domString);
};

const showAuthors = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-author-btn">Add An Author</button>';

  renderToDOM('#add-button', btnString);

  let domString = '';

  if (array.length <= 0) {
    domString = '<h1> No Authors </h1>';
  } else {
    array.forEach((item) => {
      domString += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${item.first_name} ${item.last_name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${item.email}</h6>
          <hr>
          <div style="display:flex;margin-bottom:0.5rem;">
          <i class="btn btn-success" id="view-author-btn--${item.firebaseKey}"> View Author </i>
          <i class="btn btn-info" id="update-author--${item.firebaseKey}"> Edit Author </i>
          <i class="btn btn-danger" id="delete-author-btn--${item.firebaseKey}"> Delete Author </i>
          </div>
          <p class="card-text bold">${item.favorite ? '<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Favorite </span> ' : ''}</p>
        </div>
      </div>
      `;
    });
  }
  renderToDOM('#store', domString);
};

export { showAuthors, emptyAuthors };
