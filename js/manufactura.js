
// Animación para la sección de impresoras
const printerRows = document.querySelectorAll('.printer-row');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.2
    }
);

printerRows.forEach(row => {
    observer.observe(row);
});
