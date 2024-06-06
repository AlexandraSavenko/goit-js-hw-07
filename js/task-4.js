const form = document.querySelector(".login-form");
form.addEventListener("submit", handleGetInput);
function handleGetInput(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (email.value && password.value) {
    const data = {
      email: email.value,
      password: password.value,
    };
    console.log(data);
  } else {
    alert("All form fields must be filled in");
  }
  //   email.value = "";
  //   password.value = "";
}
