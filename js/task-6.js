const controls = document.querySelector("#controls");
const input = document.querySelector("input");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");
const newBox = document.querySelector(".box");

input.addEventListener("input", handleInput);
let inputResult = 0;
function handleInput(event) {
  inputResult = Number(event.currentTarget.value);
}

//======================================I call my function which creates boxes========
createButton.addEventListener("click", handlerCreate);
function handlerCreate() {
  if (inputResult >= 1 && inputResult <= 100) {
    boxes.innerHTML = "";
    createBoxes(inputResult); //?but I can call this function with the right argument from here
    const items = Array.from(document.querySelectorAll(".box"));
    //==My function creates number that will be used for width and height properties of my box
    // let size = 20;
    // function biggerSize(items) {
    //   for (let i = 1; i <= items; i += 1) {
    //     size += 10;
    //   }
    //   console.log(size);
    //   return size;
    // } //my function that generates size ends here
    // console.log(`this is the size of my box: ${myBoxSize}`);
    // items.forEach((item) => {
    //   item.style.backgroundColor = getRandomHexColor();
    //   item.style.width = `${biggerSize(items.length)}px`;
    //   item.style.height = `${biggerSize(items.length)}px`;
    // });
    let size = 30;
    function biggerSize(index) {
      return size + index * 10;
    }

    items.forEach((item, index) => {
      item.style.backgroundColor = getRandomHexColor();
      const newSize = biggerSize(index);
      item.style.width = `${newSize}px`;
      item.style.height = `${newSize}px`;
    });
  }

  inputResult = 0;
  input.value = "";
}
//=========================My function to create HTML boxes===================

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
