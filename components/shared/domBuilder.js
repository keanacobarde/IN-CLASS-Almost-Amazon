import renderToDOM from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
    <div id="add-button"></div>
    <div id="form-container"></div>
    <div id="store"></div>
    <div id="view"></div>
  </div><script src="https://kit.fontawesome.com/a4dd17ff4f.js" crossorigin="anonymous"></script>`;

  renderToDOM('#app', domString);
};

export default domBuilder;
