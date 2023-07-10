var openEye = document.getElementById("openEye");
var closeEye = document.getElementById("closeEye");
openEye.addEventListener("click", function () {
  console.log("clicked on open eye");
  openEye.style.display = "none";
  closeEye.style.display = "block";
  password.type = "password";
});

closeEye.addEventListener("click", function () {
  console.log("clicked on closeEye eye");
  closeEye.style.display = "none";
  openEye.style.display = "block";
  password.type = "block";
});