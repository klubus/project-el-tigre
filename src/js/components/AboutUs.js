import { templates, select } from '../settings.js';
import { utils } from '../utils.js';

class AboutUs {
  constructor(data = {}) {
    const thisAboutUs = this;
    thisAboutUs.data = data;
    this.flkty = null;
    thisAboutUs.render();
  }

  render() {
    const thisAboutUs = this;

    const generatedHTML = templates.aboutUs(thisAboutUs.data);

    thisAboutUs.element = utils.createDOMFromHTML(generatedHTML);

    const aboutUsContainer = document.querySelector(select.containerOf.aboutUs);

    aboutUsContainer.appendChild(thisAboutUs.element);

    const elem = this.element.querySelector('.about-us__carousel');
    if (elem) {
      this.flkty = new window.Flickity(elem, {
        cellAlign: 'center',
        contain: true,
        wrapAround: true,
        autoPlay: 5000,
        imagesLoaded: true,
        pageDots: false,
        prevNextButtons: false,
      });
    }
  }
}

export default AboutUs;
