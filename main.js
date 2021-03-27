// detail-page option button

var glazingArray = document.querySelectorAll('.glazing');
var qtyArray = document.querySelectorAll('.qty');

//default selection: Glazing None //other page errors
glazingArray[0].style.background = "#A5927B";
glazingArray[0].style.color = "white";
glazingArray[0].id = "activated";

glazingArray.forEach(item => {
    item.addEventListener('click', event => {
        btnToggle(item)       
    });
});

qtyArray.forEach(item => {
    item.addEventListener('click', event => {
        qtyBtnToggle(item)       
    });
});

function btnToggle(item) {
    for (let i=0; i < glazingArray.length; i++){
        if(glazingArray[i].id === "activated"){
            glazingArray[i].id = "deactivated";
            glazingArray[i].style.background = "white";
            glazingArray[i].style.color = "#383838";
        };
    };
    item.id="activated";
    item.style.background = "#A5927B";
    item.style.color = "white";
    changeAddToCartText()
}

var glazingPrice = 0;
var qtyPrice = 0;
var sum = 0;

function changeAddToCartText() {
    for (let i=0; i < glazingArray.length; i++){
        if(glazingArray[i].id === "activated" && glazingArray[i].innerHTML !== "None"){
            glazingPrice = 5;
        }
        else if(glazingArray[i].id === "activated" && glazingArray[i].innerHTML === "None"){
            glazingPrice = 0;
        }
    }
    for (let i=0; i < qtyArray.length; i++){
        if (qtyArray[i].id === "qty_activated"){
            qtyPrice = getQtyPrice(qtyArray[i]);  
        }
    }
    sum = qtyPrice + glazingPrice;
    var btn = document.getElementById("addToCartBtn").firstChild;
    btn.nodeValue = "Select size to add to cart" + " - $" + sum;
}

function qtyBtnToggle(item) {
    for (let i=0; i < qtyArray.length; i++){
        if(qtyArray[i].id === "qty_activated"){
            qtyArray[i].id = "qty_deactivated";
            qtyArray[i].style.background = "white";
            qtyArray[i].style.color = "#383838";
        };
    };
    item.id="qty_activated";
    item.style.background = "#A5927B";
    item.style.color = "white";
    changeAddToCartText()
}

function getQtyPrice(item) {
    var qtyText = item.innerHTML;
    var dollarStrIndex = qtyText.indexOf("$");
    var lastStrIndex = qtyText.length;  
    var priceText = qtyText.slice(dollarStrIndex+1, lastStrIndex);
    return parseInt(priceText);
}

// detail-page toggle on off information

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
