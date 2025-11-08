import { templates, select } from '../settings.js';
import { utils } from '../utils.js';

class AboutUs {
  constructor() {
    const thisAboutUs = this;
    thisAboutUs.render();
  }

  render() {
    const thisProduct = this;

    const generatedHTML = templates.aboutUs(thisProduct.data);

    thisProduct.element = utils.createDOMFromHTML(generatedHTML);

    const aboutUsContainer = document.querySelector(select.containerOf.aboutUs);

    aboutUsContainer.appendChild(thisProduct.element);
  }
}

export default AboutUs;
