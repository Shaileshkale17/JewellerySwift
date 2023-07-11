// date function
let date;
a = new Date();
date = a.toLocaleDateString();
const nodeList = document.querySelectorAll(".user-date");
for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].innerHTML = date
}