document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector(".web-intro");
    const image = document.querySelector(".web-intro__image");
    const content = document.querySelector(".web-intro__content");

    if (!section) return;

    let currentProgress = 0;
    let targetProgress = 0;

    const ease = 0.08; // ↓ más bajo = más tranquilo

    function animate() {
        currentProgress += (targetProgress - currentProgress) * ease;

        const imgWidth = 48 + currentProgress * 52;
        const textWidth = 100 - imgWidth;

        image.style.width = `${imgWidth}%`;
        content.style.width = `${textWidth}%`;

        requestAnimationFrame(animate);
    }

    window.addEventListener("scroll", () => {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const start = windowHeight * 0.3;
        const end = windowHeight * 0.85;

        let progress = (start - rect.top) / (end - start);
        targetProgress = Math.min(Math.max(progress, 0), 1);
    });

    animate();
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".text-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target); // solo una vez
        }
      });
    },
    {
      threshold: 0.3, // aparece cuando se ve el 30%
    }
  );

  cards.forEach((card) => observer.observe(card));
});
