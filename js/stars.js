const stars = document.querySelectorAll(".stars span");
// loop through the "stars" nodeList

    stars.forEach((star, index1)=>{
        //add an event listener that run a function whan the click event is triggred
        star.addEventListener("click", () => {
            console.log(index1);
            stars.forEach((star, index2) => {
                index1>=index2 ? star.classList.add("checked"): star.classList.remove("checked");
                console.log(index2);
            });
        });
    });
