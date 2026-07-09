
document.addEventListener('DOMContentLoaded', function () {
    const grid = document.querySelector('.news-grid');
    if (!grid) return;

    const cards = grid.querySelectorAll('.news-card');
    const n = cards.length;

    grid.classList.remove('count-1', 'count-2', 'count-3', 'count-4');
    grid.classList.add('count-' + Math.min(n, 4));

    cards.forEach(function (card, i) {
        card.classList.toggle('featured', (n >= 3) && i === 0);
    });
});
