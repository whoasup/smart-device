'use strict';
(() => {

  const popup = document.querySelector(`.modal`);
  const overlay = document.querySelector(`.overlay`);
  const pageBody = document.querySelector(`body`);
  const modalLink = document.querySelector(`[data-control="modal"]`);
  const nameInput = popup.querySelector(`#popup-name`);

  const closeModal = () => {
    popup.classList.add(`modal--close`);
    overlay.classList.add(`overlay--close`);
    pageBody.classList.remove(`no-scroll`);
    modalLink.focus();
    modalLink.addEventListener(`click`, modalLinkHandler);
    document.removeEventListener(`click`, modalCloseHandler);
    document.removeEventListener(`keydown`, modalCloseHandler);
  };

  const openModal = () => {
    popup.classList.remove(`modal--close`);
    overlay.classList.remove(`overlay--close`);
    pageBody.classList.add(`no-scroll`);
    nameInput.focus();
    modalLink.removeEventListener(`click`, modalLinkHandler);
  };

  const modalCloseHandler = (e) => {
    const target = e.target;
    const targetClasses = target.classList;
    if (targetClasses.contains(`overlay`) || targetClasses.contains(`modal__button`) || e.key === `Escape`) {
      closeModal();
    }
  };

  const modalLinkHandler = (e) => {
    e.preventDefault();
    openModal();

    document.addEventListener(`click`, modalCloseHandler);
    document.addEventListener(`keydown`, modalCloseHandler);
  };

  closeModal();
})();
