const words = [
  "INNOVADORES",
  "MENTES CURIOSAS",
  "INVESTIGADORES",
  "VISIONARIOS",
  "CREATIVOS"
];

let index = 0;
const wordSpan = document.getElementById("dynamicWord");

setInterval(() => {
  wordSpan.classList.add("fade-out");

  setTimeout(() => {
    index = (index + 1) % words.length;
    wordSpan.textContent = words[index];
    wordSpan.classList.remove("fade-out");
  }, 500);

}, 3000);
