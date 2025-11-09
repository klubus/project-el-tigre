import { classNames, select, settings } from './settings.js';
import Product from './components/Product.js';
import AboutUs from './components/AboutUs.js';
import ContactUs from './components/ContactUs.js';

const app = {
  initData: function () {
    const url = settings.db.url + '/' + settings.db.products;
    this.data = {};
    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((parsedResponse) => {
        this.data.products = parsedResponse;
        this.initProducts();
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
