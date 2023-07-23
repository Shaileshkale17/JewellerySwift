const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitem = document.getElementById("jewellery-section-main-image-box");
    const product = document.querySelectorAll(".jewellery-section-image-box");
    const pname = document.getElementsByTagName("h4");
    for (var i = 0; i < pname.length; i++) {
      let match = product[i].getElementsByTagName("h4")[0];
      if (match) {
          let textvalue = match.textContent || match.innerHTML
          if(textvalue.toUpperCase().indexOf(searchbox) > -1){
              product[i].style.display ="";
          }else{
              product[i].style.display ="none";
          }
      }
    }
  };