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
});
