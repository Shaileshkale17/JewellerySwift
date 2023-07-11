// main picture
var picture = document.querySelector("#pic");

//side picture
var picture1 = document.querySelector("#pic1");
var picture2 = document.querySelector("#pic2");
var picture3 = document.querySelector("#pic3");
var picture4 = document.querySelector("#pic4");
var picture5 = document.querySelector("#pic5");
var picture6 = document.querySelector("#pic6");

//Main picture container
var mainContainer = document.querySelector("#picture");
// selector
var rect = document.querySelector("#rect");
// zoom window
var zoom = document.querySelector("#zoom");
//list of pictures
picList = [picture1, picture2, picture3, picture4, picture5, picture6];

//Active picture
let picActive = 1;

//Add a boxshodow to the first piture( current active picture)
picture1.classList.add("img-active");

//change image
function changeImage(imgSrc, n) {
  //this will change the main image
  picture.src = imgSrc;
  //removing box shodow from the previus active side picture
  picList[picActive - 1].classList.remove("img-active");
  //add box shodow to active side picture
  picList[n - 1].classList.add("img-active");
  // update the active side picture
  picActive = n;
}
//width and height of msin main picture in px
let w1 = mainContainer.offsetWidth;
let h1 = mainContainer.offsetHeight;
// zoom ratio
let ratio = 3;
// zoom window background-image size
zoom.style.backgroundSize = w1 * ratio + "px" + h1 * ratio + "px";
//coordinates of mouse cursor
let x, y, xx, yy;
//width and height of selector
let w2 = rect.offsetWidth;
let h2 = rect.offsetHeight;
// zoom window width and height
zoom.style.width = w2 * ratio + "px";
zoom.style.height = h2 * ratio + "px";
//helf of selector shows outside the main picyure
//we need half of width and height
w2 = w2 / 2;
h2 = h2 / 2;
//moving the selector box
function move(event) {
  //how for is the mouse cursor from on element
  //x for from left of element
  x = event.offsetX;
  //y how for the cursor from top of an element
  y = event.offsetY;
  // keeping the selector inside the main picture
  // left of picture
  if (x < w2) {
    x = w2;
  }
  // right of main picture
  if (x > w2 - w1) {
    x = w1 - w2;
  }

  // top of picture
  if (y < h2) {
    y = h2;
  }
  // bottom of main picture
  if (y > h2 - h1) {
    y = h1 - h2;
  }

  //changing the position of the selector
  console.log(x, y);
  rect.style.left = x + "px";
  rect.style.top = y + "px";
  //changing back
}
mainContainer.addEventListener("mousemove", function () {
  move(event);
});
//show selector
function addopacity() {
  rect.classList.add("rect-active");
}

/*
    !check the number input
*not working 
    function restrictNumber(e) {
      var newValue = this.value.replace(new RegExp(/[^\d]/, 'ig'), "");
      this.value = newValue;
    }
    
    var userName = document.querySelector('#numberField');
    userName.addEventListener('input', restrictNumber);
console.log(userName);
*/

