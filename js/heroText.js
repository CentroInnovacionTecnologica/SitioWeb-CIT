const words = [
  "INVESTIGADORES",
  "CREATIVOS",
  "MENTES CURIOSAS",
  "VISIONARIOS"
];

let index = 0;
const wordElement = document.getElementById("dynamic-word");

setInterval(() => {
  wordElement.style.opacity = 0;
  wordElement.style.transform = "translateY(6px)";

  setTimeout(() => {
    index = (index + 1) % words.length;
    wordElement.textContent = words[index];
    wordElement.style.opacity = 1;
    wordElement.style.transform = "translateY(0)";
  }, 350);
}, 2200);
