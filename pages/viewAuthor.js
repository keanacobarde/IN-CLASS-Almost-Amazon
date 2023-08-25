import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewAuthor = (obj) => {
  clearDom();

  const domString = `<div class="d-flex flex-column style="color:white;">
<h1>${obj.first_name} ${obj.last_name}</h1><p class="card-text bold">${obj.favorite ? '<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Favorite </span> ' : ''}</p><h4>Author Email: ${obj.email}</h4>
<div>
<i class="fas fa-edit btn btn-info" id="update-author--${obj.firebaseKey}"></i>
<i class="btn btn-danger fas fa-trash-alt" id="delete-author-btn--${obj.firebaseKey}"></i>
</div><hr>
<h4>Books</h4>
<div style="display:grid;">
</div>
 </div>`;

  renderToDOM('#view', domString);
};

export default viewAuthor;
