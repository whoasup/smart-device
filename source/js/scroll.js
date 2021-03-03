'use strict';

import smoothscroll from 'smoothscroll-polyfill';

(() => {
  const smoothLinks = Array.from(document.querySelectorAll(`a[data-scroll="smooth"]`));

  smoothscroll.polyfill();
  smoothLinks.forEach((link) => {
    link.addEventListener(`click`, (e) => {
      const hash = link.getAttribute(`href`);
      const target = document.querySelector(hash);
      target.scrollIntoView({
        behavior: `smooth`,
        block: `start`
      });

      history.pushState(null, null, hash);
      e.preventDefault();
    });
  });

})();
