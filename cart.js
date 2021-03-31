// Qty dropdown menu 
// ref:https://www.w3schools.com/howto/howto_js_dropdown.asp

function dropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event){
    if(!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i=0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }        
        }
    }
}

// ref: https://youtu.be/Pt8f3GwD3N8



localStorage.setItem("cart", "5");
localStorage.setItem("myCat", JSON.stringify(cat)); //save
JSON.parse(localStorage.getItem("myCat")); //Retrieve

