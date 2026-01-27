const track = document.getElementById('certTrack');
const btnPrev = document.getElementById('certPrev');
const btnNext = document.getElementById('certNext');

const scrollAmount = 420; // qué tanto se mueve cada click

btnNext.addEventListener('click', () => {
  track.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  });
});

btnPrev.addEventListener('click', () => {
  track.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth'
  });
});
