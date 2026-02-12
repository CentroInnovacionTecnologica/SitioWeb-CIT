
// Carrusel de proyectos
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevButton = document.querySelector('.arrow.left');
const nextButton = document.querySelector('.arrow.right');

let currentIndex = 0;

function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    prevButton.classList.toggle('disabled', currentIndex === 0);
    nextButton.classList.toggle('disabled', currentIndex === slides.length - 1);
}

nextButton.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});
