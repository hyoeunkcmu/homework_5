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

// unique id, glazing, qty, total price
// cart item list
// saved for later list

function Item(name, glazing, qty, price) {
    this.name = name;
    this.glazing = glazing;
    this.qty = qty;
    this.price = price;
}

// localStorage.clear();

var original = new Item("Original", "None", "1PK", "$7");
localStorage.setItem("myItem", JSON.stringify(original));

var badgeToggle = localStorage.getItem("mycartBadge");
if (badgeToggle === "1"){
    var x = document.getElementById("badge");
    x.style.visibility = "visible";
}