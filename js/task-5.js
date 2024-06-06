const body = document.querySelector("body");
const button = document.querySelector(".change-color");
const color = document.querySelector(".color");
button.addEventListener("click", handleColor);
function handleColor() {
  const resultColor = getRandomHexColor();
  body.style.backgroundColor = resultColor;
  color.textContent = resultColor;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
