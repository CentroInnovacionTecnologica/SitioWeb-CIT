
// Animación para EVENTOS
const revealEvents = document.querySelectorAll('.reveal-event');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.2
    }
);

revealEvents.forEach(event => {
    observer.observe(event);
});
