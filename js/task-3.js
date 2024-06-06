const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
textInput.addEventListener("input", handleInput);
function handleInput(event) {
  const inputValue = event.currentTarget.value.trim();
  if (inputValue !== " ") {
    output.textContent = inputValue || "Anonymous";
  }
}
