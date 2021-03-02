'use strict';
(() => {
  const page = document.querySelector(`.page`);
  const accordion = document.querySelector(`.accordion `);
  let openedTab = document.querySelector(`.accordion__button--close`);
  let isAccordionOpen = false;

  const closeTab = () => {
    openedTab.classList.remove(`accordion__button--close`);
    openedTab = null;
    isAccordionOpen = false;
  };

  page.classList.add(`js`);
  accordion.addEventListener(`click`, (e) => {
    const target = e.target;
    if (target.classList.contains(`accordion__button`) && !target.classList.contains(`accordion__button--close`)) {
      if (isAccordionOpen) {
        closeTab();
      }
      target.classList.add(`accordion__button--close`);
      openedTab = target;
      isAccordionOpen = true;
    } else if (target.classList.contains(`accordion__button--close`)) {
      closeTab();
    }
  });
})();
