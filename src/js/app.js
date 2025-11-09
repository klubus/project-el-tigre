import { classNames, select, settings } from './settings.js';
import Product from './components/Product.js';
import AboutUs from './components/AboutUs.js';
import ContactUs from './components/ContactUs.js';
import HeroSection from './components/HeroSection.js';

const app = {
  initData: function () {
    const thisApp = this;
    const urlProducts = settings.db.url + '/' + settings.db.products;
    const urlMainText = settings.db.url + '/' + settings.db.mainText;
    this.data = {};
    Promise.all([fetch(urlProducts), fetch(urlMainText)])
      .then(function (responses) {
        return Promise.all(responses.map((r) => r.json()));
      })
      .then(function ([products, mainText]) {
        thisApp.data.products = products;
        thisApp.data.mainText = mainText;

        thisApp.initProducts();
        thisApp.initHeroSection();
      });
  },

  initProducts: function () {
    const thisApp = this;
    for (let productData in thisApp.data.products) {
      new Product(
        thisApp.data.products[productData].id,
        thisApp.data.products[productData]
      );
    }
  },

  initAboutUs: function () {
    new AboutUs();
  },

  initContactUs: function () {
    new ContactUs();
  },

  initHeroSection: function () {
    const thisApp = this;
    const randomDigit = Math.floor(Math.random() * 3);
    new HeroSection(thisApp.data.mainText[randomDigit].id, {
      mainText: thisApp.data.mainText[randomDigit].text,
    });
  },
  initPages: function () {
    const thisApp = this;
    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);
    const idFromHash = window.location.hash.replace('#/', '');

    let pageMatchingHash = thisApp.pages[0].id;

    for (const page of thisApp.pages) {
      if (page.id == idFromHash) {
        pageMatchingHash = page.id;
        break;
      }
    }

    thisApp.activatePage(pageMatchingHash);

    for (let link of thisApp.navLinks) {
      link.addEventListener('click', function (event) {
        const clickedElement = this;
        event.preventDefault();

        const id = clickedElement.getAttribute('href').replace('#', '');
        thisApp.activatePage(id);
        window.location.hash = '#/' + id;
      });
    }
  },

  activatePage: function (pageId) {
    const thisApp = this;

    for (let page of thisApp.pages) {
      page.classList.toggle(classNames.active, page.id == pageId);
    }

    for (let link of thisApp.navLinks) {
      link.classList.toggle(
        classNames.active,
        link.getAttribute('href') == '#' + pageId
      );
    }
  },

  init: function () {
    const thisApp = this;
    thisApp.initPages();
    thisApp.initData();
    thisApp.initAboutUs();
    thisApp.initContactUs();
  },
};

app.init();
