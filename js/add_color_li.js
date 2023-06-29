/*let color_li = document.getElementById('color_li');


function color_li{
    document.("color_li").style.color="green";
}*/

navbar.onmouseover = function(event) {
    let target = event.target;
    target.style.color = 'pink';

    Text.value += `over -> ${target.tagname}\n`;
    Text.scrollTop = text.scrollHeight;
};

navbar.onmouseout = function(event){
    let target = event.target;
    target.style.color = '';

    Text.value += `out <- ${target.tagname}\n`;
    Text.scrollTop = text.scrollHeight;
}