"use strict";

(() => {
  const page = document.querySelector(`.page`);
  const accordion = document.querySelector(`.accordion `);

  page.classList.add(`js`);
  accordion.addEventListener(`click`, (e) => {
    const target = e.target;

    if (target.classList.contains(`accordion__button`)) {
      target.classList.toggle(`accordion__button--close`);
    }
  });
})();
