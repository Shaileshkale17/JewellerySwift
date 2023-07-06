function password_icon() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
    // document.querySelector("#icon-eye").style.display= "none";
  } else {
    x.type = "password";
    // document.querySelector("#bi-eye-slash").style.display= "none";
  }
}

// add = document.querySelector(".bi-eye-slash");
// add.onclick = function () {
//     icon = document.querySelector(".icon-eye");
//     if (icon.classList.contains("on")) {
//         icon.classList.remove("on");
//         console.log("remove")
//     } else {
//       icon.classList.add("on");
//       console.log("add")
//     }

//     // if (navber.classList.contains("active")) {
//     //     // navber.classList.remove("active");
//     // } else {
//     //     navber.classList.add("active");
//     //     console.log("active is add");
//     // }
// };
// remove = document.querySelector(".bi-eye");
// remove.onclick = function () {
//     icon = document.querySelector(".bi-eye-slash");
//     if (icon.classList.contains("on")) {
//       // not writing code
//     } else {
//       icon.classList.add("on");
//       
//     }
// };
