import { templates, select } from '../settings.js';
import { utils } from '../utils.js';

class ContactUs {
  constructor(data = {}) {
    const thisContactUs = this;
    thisContactUs.data = data;
    thisContactUs.render();
  }

  render() {
    const thisContactUs = this;

    const generatedHTML = templates.contactUs(thisContactUs.data);

    thisContactUs.element = utils.createDOMFromHTML(generatedHTML);

    const contactUsContainer = document.querySelector(
      select.containerOf.contactUs
    );

    contactUsContainer.appendChild(thisContactUs.element);
  }
}

export default ContactUs;
