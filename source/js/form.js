'use strict';

import IMask from 'imask';

(() => {
  const popupForm = document.querySelector(`.popup-form`);
  const popupName = popupForm.querySelector(`#popup-name`);
  const popupTel = popupForm.querySelector(`#popup-phone`);
  const popupQuestion = popupForm.querySelector(`#popup-question`);
  const feedbackForm = document.querySelector(`.feedback-form`);
  const feedbackName = feedbackForm.querySelector(`#feedback-name`);
  const feedbackTel = feedbackForm.querySelector(`#feedback-phone`);
  const feedbackQuestion = feedbackForm.querySelector(`#feedback-question`);

  const telMaskOptions = {
    mask: `+{7}(000)000-00-00`
  };

  let isStorageSupport = true;

  const maskPopupTel = IMask(popupTel, telMaskOptions);

  const maskFeedbackTel = IMask(feedbackTel, telMaskOptions);

  try {
    localStorage.setItem(`__test`, `data`);
  } catch (error) {
    isStorageSupport = false;
  }

  popupForm.addEventListener(`submit`, () => {
    if (isStorageSupport) {
      localStorage.setItem(`name`, popupName.value);
      localStorage.setItem(`tel`, popupTel.value);
      localStorage.setItem(`question`, popupQuestion.value);
    }
  });

  feedbackForm.addEventListener(`submit`, () => {
    if (isStorageSupport) {
      localStorage.setItem(`name`, feedbackName.value);
      localStorage.setItem(`tel`, feedbackTel.value);
      localStorage.setItem(`question`, feedbackQuestion.value);
    }
  });
})();
