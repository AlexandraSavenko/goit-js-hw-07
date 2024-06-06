const controls = document.querySelector("#controls");
const input = document.querySelector("input");
input.addEventListener("input", onInputChange);
let Amount;
function onInputChange(event) {
  Amount = event.target.value;
}
console.log(Amount);
function createBoxes(amount) {
  for (let i = amount; i <= 100; i += 1) {
    console.log(`<div></div>`);
  }
}
createBoxes(5);
//======================================================================
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
