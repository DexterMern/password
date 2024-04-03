let $ = document;
let inputPassword = $.querySelector(".input-password");
let buttonPassword = $.querySelector(".btn-eye");
function eyePassword() {
  if ($.querySelector(".fa-eye")) {
    buttonPassword.classList.remove("fa", "fa-eye");
    buttonPassword.classList.add("fa", "fa-eye-slash");
    buttonPassword.style.color = 'red';
    inputPassword.type = "text";
  } else {
    buttonPassword.classList.remove("fa", "fa-eye-slash");
    buttonPassword.classList.add("fa", "fa-eye");
    buttonPassword.style.color = 'green';
    inputPassword.type = "password";
  }
}
buttonPassword.addEventListener("click", eyePassword);
if ($.querySelector(".fa-eye")) {
  console.log("true");
} else {
  console.log("false");
}
