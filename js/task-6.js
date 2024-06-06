const controls = document.querySelector("#controls");
const input = document.querySelector("input");
console.log(input.value);

//======================================================================
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
