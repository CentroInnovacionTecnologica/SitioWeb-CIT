
// Animación para la sección informativa
document.addEventListener("DOMContentLoaded", () => {

  const elements = document.querySelectorAll(
    ".dashboard-section .card, " +
    ".dashboard-section h1, " +
    ".dashboard-section h2, " +
    ".dashboard-section p, " +
    ".dashboard-section ul, " +
    ".dashboard-section img"
  );

  elements.forEach(el => el.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("active");
          }, index * 120);

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -60px 0px"
    }
  );

  elements.forEach(el => observer.observe(el));
});
