const dropdownRef = document.querySelector('.dropdown');
const dotsRef = document.querySelector('.dots');
const basketContainerRef = document.querySelector('.basket-container');

dotsRef.addEventListener('click', onDotsClick);
basketContainerRef.addEventListener('click', onBasketClick);

function onBasketClick() {
  basketContainerRef.classList.toggle('full-basket');
}

function onDotsClick(e) {
  e.preventDefault();
  dropdownRef.classList.toggle('hidden');
}
