// activate shoping cart badge

var badgeToggle = localStorage.getItem("mycartBadge");
if (badgeToggle === "1"){
    var x = document.getElementById("badge");
    x.style.visibility = "visible";
}
