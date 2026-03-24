document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(".reveal-up");

  if (revealElements.length) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
      }
    );

    revealElements.forEach((element) => revealObserver.observe(element));
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".tech-service-card");
  const modal = document.getElementById("modernModal");
  const modalTitle = document.getElementById("modernTitle");
  const modalList = document.getElementById("modernList");
  const closeBtn = document.querySelector(".modern-close");

  if (!cards.length || !modal || !modalTitle || !modalList || !closeBtn) return;

  cards.forEach((card) => {
    const button = card.querySelector(".solution-btn");

    if (!button) return;

    button.addEventListener("click", () => {
      const title = card.dataset.title || "";
      const rawItems = card.dataset.items || "";
      const items = rawItems.split("|").filter((item) => item.trim() !== "");

      modalTitle.textContent = title;
      modalList.innerHTML = "";

      items.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        modalList.appendChild(li);
      });

      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }

  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
});