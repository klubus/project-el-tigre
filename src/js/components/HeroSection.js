import { templates, select } from '../settings.js';
import { utils } from '../utils.js';

class HeroSection {
  constructor(id, data) {
    const thisHeroSection = this;
    thisHeroSection.id = id;
    thisHeroSection.data = data;
    thisHeroSection.renderMainText();
  }

  renderMainText() {
    const thisHeroSection = this;

    const generatedHTML = templates.mainText(thisHeroSection.data);

    thisHeroSection.element = utils.createDOMFromHTML(generatedHTML);

    const mainTextContainer = document.querySelector(
      select.containerOf.mainText
    );

    mainTextContainer.appendChild(thisHeroSection.element);
  }
}

export default HeroSection;
