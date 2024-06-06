// const controls = document.querySelector("#controls");
// const buttonCreate = document.querySelector("#controls button[data-create]");
// const buttonDestroy = document.querySelector("#controls button[data-destroy]");
// const input = document.querySelector("input");

// let inputValue;
// input.addEventListener("input", handleInput);
// function handleInput(event) {
//   inputValue = event.currentTarget.value.trim();
// }
// console.log(inputValue);
// // function createBoxes(amount) {
// //   if ()
// // }
// // createBoxes();

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
const controls = document.querySelector("#controls");
const buttonCreate = document.querySelector("#controls button[data-create]");
const buttonDestroy = document.querySelector("#controls button[data-destroy]");
const input = document.querySelector("input");

let inputResult = 0; // Змінна має бути доступна глобально

input.addEventListener("input", (event) => {
  inputResult = event.currentTarget.value;
  console.log(`Current input value: ${inputResult}`);
});

buttonCreate.addEventListener("click", () => {
  createBoxes(inputResult);
});

function createBoxes(amount) {
  console.log(`this is it ${amount}`);
}

// Тепер createBoxes викликається після натискання кнопки
