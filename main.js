


// // detail-page toggle on off information

var detailAlergie = document.getElementById("allergies");
detailAlergie.addEventListener("click", expand);

var detailIngredient = document.getElementById("ingredients");
detailIngredient.addEventListener("click", expand);

var detailShipping = document.getElementById("shipping");
detailShipping.addEventListener("click", expand);

function expand() {
    var detailMore = this.getElementsByClassName("more");
    var detailIcon = this.getElementsByClassName("fas");
    var detailContent = this.getElementsByClassName("detail-content");

    if(detailContent[0].style.maxHeight === "0px"){
        detailContent[0].style.maxHeight = "1000px";
        detailIcon[0].className = "fas fa-minus";
        detailMore[0].innerHTML = "Less";
    }
    else {
        detailContent[0].style.maxHeight = "0px";  
        detailIcon[0].className = "fas fa-plus";
        detailMore[0].innerHTML = "More";
    }
};
