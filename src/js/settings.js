Handlebars.registerHelper('breakLine', function (text) {
  const html = text.replace(/\|/g, '<br>');
  return new Handlebars.SafeString(html);
});

export const select = {
  templateOf: {
    menuProduct: '#template-menu-product',
    aboutUs: '#template-about-us',
    contactUs: '#template-contact-us',
    mainText: '#template-main-text',
  },
  containerOf: {
    menu: '.product-list',
    home: '.product-list-home',
    pages: '#pages',
    aboutUs: '.home__about-us-container',
    contactUs: '.contact-us__wrapper',
    mainText: '.header__hero',
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
    mainText: 'mainText',
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
  mainText: Handlebars.compile(
    document.querySelector(select.templateOf.mainText).innerHTML
  ),
};
