import { templates, select } from '../settings.js';
import { utils } from '../utils.js';

class AboutUs {
  constructor(data = {}) {
    const thisAboutUs = this;
    thisAboutUs.data = data;
    thisAboutUs.render();
  }

  render() {
    const thisAboutUs = this;

    const generatedHTML = templates.aboutUs(thisAboutUs.data);

    thisAboutUs.element = utils.createDOMFromHTML(generatedHTML);

    const aboutUsContainer = document.querySelector(select.containerOf.aboutUs);

    aboutUsContainer.appendChild(thisAboutUs.element);
  }
}

export default AboutUs;
