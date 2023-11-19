'use strict';

const openModalButtons = document.querySelectorAll('.show-modal');
const closeModalButton = document.querySelector('.close-modal');
const modalContent = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const openModalWindow = function () {
  modalContent.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModalWindow = function () {
  modalContent.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < openModalButtons.length; i++)
  openModalButtons[i].addEventListener('click', openModalWindow);

closeModalButton.addEventListener('click', closeModalWindow);

overlay.addEventListener('click', closeModalWindow);
