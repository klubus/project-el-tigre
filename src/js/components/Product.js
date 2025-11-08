import { templates, select } from '../settings.js';
import { utils } from '../utils.js';

class Product {
  constructor(id, data) {
    const thisProduct = this;
    thisProduct.id = id;
    thisProduct.data = data;
    thisProduct.renderInHomePage();
  }

  renderInHomePage() {
    const thisProduct = this;

    const generatedHTML = templates.menuProduct(thisProduct.data);

    thisProduct.element = utils.createDOMFromHTML(generatedHTML);

    const menuContainers = document.querySelectorAll(select.containerOf.menu);

    menuContainers.forEach((container) => {
      container.appendChild(thisProduct.element.cloneNode(true));
    });
  }
}

export default Product;
