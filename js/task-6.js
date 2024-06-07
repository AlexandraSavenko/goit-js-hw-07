const controls = document.querySelector("#controls");
const input = document.querySelector("input");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

input.addEventListener("input", handleInput);
let inputResult = 0;
function handleInput(event) {
  inputResult = Number(event.currentTarget.value);
}

//==============================================
createButton.addEventListener("click", handlerCreate);
function handlerCreate() {
  if (inputResult >= 1 && inputResult <= 100) {
    createBoxes(inputResult); //?but I can call this function with the right argument from here
  }
  inputResult = 0;
  input.value = "";
}
//============================================

function createBoxes(amount) {
  let boxHTML = "";
  for (let i = 1; i <= amount; i += 1) {
    boxHTML += `<div class="box"></div>`;
  }
  boxes.insertAdjacentHTML("beforeend", boxHTML);
}
// createBoxes(inputResult);//? for some reasone I can't use inputResult
//?from here and I can only get it's value from the createButton function.
//?Is that because input has no name ?
//======================================================================
destroyButton.addEventListener("click", handlerDestroy);
function handlerDestroy() {
  boxes.innerHTML = "";
}
//======================================================================
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
