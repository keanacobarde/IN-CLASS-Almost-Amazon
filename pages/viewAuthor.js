import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewAuthor = (obj) => {
  clearDom();

  let domString = `<div class="d-flex flex-column">
<h1>${obj.first_name} ${obj.last_name}</h1><p class="card-text bold">${obj.favorite ? '<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Favorite </span> ' : ''}</p><h4>Author Email: ${obj.email}</h4>
<div>
<i class="btn btn-info" id="update-author--${obj.firebaseKey}"> Edit Author </i>
<i class="btn btn-danger" id="delete-author-btn--${obj.firebaseKey}"> Delete Author </i>
</div><hr>
</div>
<h4>Books</h4>
<div style="display:grid;">`;

  for (let i = 0; i < obj.bookObject.length; i++) {
    domString += `<div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${obj.bookObject[i].image}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${obj.bookObject[i].title}</h5>
          <p class="card-text">${obj.bookObject[i].description}</p>
          <p class="card-text"><small class="text-body-secondary"><p>${obj.bookObject[i].sale ? `<span class="badge bg-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> 
          $${obj.bookObject[i].price}` : `$${obj.bookObject[i].price}`}</p> </small></p>
        </div>
      </div>
    </div>
  </div>`;
  }

  domString += '</div>';

  renderToDOM('#view', domString);
};

export default viewAuthor;
