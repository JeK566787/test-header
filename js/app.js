const dropdownRef = document.querySelector('.dropdown');
const dotsRef = document.querySelector('.dots');
const basketContainerRef = document.querySelector('.basket-container');
const fullBasketIconRef = document.querySelector('.full-basket-icon');

dotsRef.addEventListener('click', onDotsClick);
basketContainerRef.addEventListener('click', onBasketClick);

function onBasketClick() {
  basketContainerRef.classList.toggle('full-basket');
  fullBasketIconRef.classList.toggle('full-basket-icon');
}

function onDotsClick(e) {
  e.preventDefault();
  dropdownRef.classList.toggle('hidden');
}
