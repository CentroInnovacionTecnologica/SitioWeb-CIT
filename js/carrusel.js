
// Carrusel de Instalaciones
document.addEventListener('DOMContentLoaded', () => {
  const wrappers = document.querySelectorAll('.carousel-wrapper');

  wrappers.forEach(wrapper => {
    const carousel = wrapper.querySelector('.carousel');
    const btnLeft = wrapper.querySelector('.arrow.left');
    const btnRight = wrapper.querySelector('.arrow.right');

    if (!carousel || !btnLeft || !btnRight) return;

    const gap = 24;

    function getScrollAmount() {
      const card = carousel.querySelector('.card');
      return card ? card.offsetWidth + gap : 0;
    }

    function updateArrows() {
      const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

      btnLeft.classList.toggle('disabled', carousel.scrollLeft <= 0);
      btnRight.classList.toggle(
        'disabled',
        carousel.scrollLeft >= maxScrollLeft - 2
      );
    }

    btnRight.addEventListener('click', () => {
      carousel.scrollBy({
        left: getScrollAmount(),
        behavior: 'smooth'
      });
    });

    btnLeft.addEventListener('click', () => {
      carousel.scrollBy({
        left: -getScrollAmount(),
        behavior: 'smooth'
      });
    });

    carousel.addEventListener('scroll', updateArrows);

    updateArrows();
  });
});