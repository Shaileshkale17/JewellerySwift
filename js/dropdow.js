/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function priceDropdownFunction() {
    document.getElementById("myDropdown-price").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.pricebtn')) {
      var dropdowns = document.getElementsByClassName("price-navbar-dropdow");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }



  function metalDropdownFunction() {
    document.getElementById("myDropdown-metal").classList.toggle("show");
  }
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.metalbtn')) {
      var dropdowns = document.getElementsByClassName("metal-navbar-dropdow");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }





  function styleDropdownFunction() {
    document.getElementById("myDropdown-style").classList.toggle("show");
  }
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.stylebtn')) {
      var dropdowns = document.getElementsByClassName("style-navbar-dropdow");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }






//   myDropdown-gender
  function genderDropdownFunction() {
    document.getElementById("myDropdown-gender").classList.toggle("show");
  }
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.genderbtn')) {
      var dropdowns = document.getElementsByClassName("gender-navbar-dropdow");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
