// Function to calling next page
function validat() {

  if (
    document.getElementById("user").value === "admin" &&
    document.getElementById("pass").value === "admin" &&
    document.getElementById("Code").value === "admin"
  ) {
    location.assign("http://127.0.0.1:5501/admin_index.html");
  } else {
    alert("validation failed");
  }
}
