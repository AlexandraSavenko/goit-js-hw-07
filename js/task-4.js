const form = document.querySelector(".login-form");
form.addEventListener("submit", handleGetInput);
function handleGetInput(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const data = {};
  formData.forEach((value, key) => (data[key] = value));
  console.log(data);
}
