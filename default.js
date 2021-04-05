// activate shoping cart badge

if (JSON.parse(localStorage.getItem("items")) !== null){
    var totalNum = JSON.parse(localStorage.getItem("items")).length;
}

if (totalNum > 0) {
    let x = document.getElementById("badge");
    x.style.visibility = "visible";
}
else {
    let x = document.getElementById("badge");
    x.style.visibility = "hidden";
}

document.getElementById("badge").innerHTML = totalNum;