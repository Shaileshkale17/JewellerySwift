console.log("hello iam runing");

/*
function open(){
    document.getElementById("hero_2").style.display="";
}
function close(){
    document.getElementById("hero_2").style.display="none";
}
*/
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
    navber = document.querySelector(".nav");
    // navber.classList.toggle("active")
    
    if (navber.classList.contains("active")) {
        // navber.classList.remove("active");
    } else {
        navber.classList.add("active");
        console.log("active is add");
    }
};
//! closes button
closes = document.querySelector(".Closes");
closes.onclick = function () {
    navber = document.querySelector(".nav");
    // navber.classList.toggle("active")
    
    if (navber.classList.contains("active")) {
        navber.classList.remove("active");
    } else {
        // navber.classList.add("active");
        console.log("active is add");
    }
};
