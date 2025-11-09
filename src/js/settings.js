export const select = {
  templateOf: {
    menuProduct: '#template-menu-product',
    aboutUs: '#template-about-us',
    contactUs: '#template-contact-us',
  },
  containerOf: {
    menu: '#product-list',
    home: 'product-list-home',
    pages: '#pages',
    aboutUs: '.about-us-wrapper',
    contactUs: '.contact-us-wrapper',
  },
  nav: {
    links: '.header__nav a',
  },
};

export const classNames = {
  active: 'active',
};

export const settings = {
  db: {
    url:
      '//' +
      window.location.hostname +
      (window.location.hostname == 'localhost' ? ':3131' : ''),
    products: 'products',
  },
};

export const templates = {
  menuProduct: Handlebars.compile(
    document.querySelector(select.templateOf.menuProduct).innerHTML
  ),
  aboutUs: Handlebars.compile(
    document.querySelector(select.templateOf.aboutUs).innerHTML
  ),
  contactUs: Handlebars.compile(
    document.querySelector(select.templateOf.contactUs).innerHTML
  ),
};
