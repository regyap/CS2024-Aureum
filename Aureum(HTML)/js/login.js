function formatDate(date) {
  const options = { day: "numeric", month: "numeric", year: "numeric" };
  const [month, day, year] = new Date(date)
    .toLocaleDateString(undefined, options)
    .split("/");
  return `${day}/${month}/${year}`;
}

function showDateInput() {
  document.getElementById("textInput").style.display = "none";
  document.getElementById("dateInput").style.display = "inline-block";
  // Set the formatted date value of dateInput to the formatted value of textInput
  document.getElementById("dateInput").value = formatDate(
    document.getElementById("textInput").value
  );
}

function showTextInput() {
  document.getElementById("dateInput").style.display = "none";
  document.getElementById("textInput").style.display = "inline-block";
  // Set the formatted value of textInput to the formatted date value of dateInput
  document.getElementById("textInput").value = document.getElementById(
    "dateInput"
  ).value
    ? formatDate(document.getElementById("dateInput").value)
    : document.getElementById("textInput").value;
}

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-section");
  const registerForm = document.getElementById("register-section");

  function showLoginForm() {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
    console.log("Clicked");
  }

  function showRegisterForm() {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
    console.log("Clicked");
  }

  document.getElementById("toRegister").onclick = showRegisterForm;
  document.getElementById("toLogin").onclick = showLoginForm;

  // Initial state
  showLoginForm();
  document.getElementById("dateInput").style.display = "none";
  document.getElementById("textInput").style.display = "inline-block";
});
