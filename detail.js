// detail-page image carousel
// Carousel Ref:https://youtu.be/KcdBOoK3Pfw
const productCarouselSlide = document.querySelector('.product-carousel-slide');
const productCarouselImages = document.querySelectorAll('.product-carousel-slide img');

//buttons
const productPrevBtn = document.querySelector('#product-previousBtn');
const productNextBtn = document.querySelector('#product-nextBtn');

//counter
let counter = 1;
const imageSize = productCarouselImages[0].clientWidth;

productCarouselSlide.style.transform = 'translateX(' + (-imageSize * counter) + 'px)';

//button listeners
productNextBtn.addEventListener('click', ()=>{
    if(productCarouselImages[counter].id === 'lastClone'){
        productCarouselImages.style.transition = "none";
        counter = productCarouselImages.length - 2;
        productCarouselImages.style.transform = 'translateX(' + (-imageSize * counter) + 'px)';
    }
    else if(productCarouselImages[counter].id === 'firstClone'){
        productCarouselImages.style.transition = "none";
        counter = productCarouselImages.length - counter;
        productCarouselImages.style.transform = 'translateX(' + (-imageSize * counter) + 'px)';
    }
    else {
        productCarouselSlide.style.transition = "transform 0.4s ease-in-out";
        counter++;
        productCarouselSlide.style.transform = 'translateX(' + (-imageSize * counter) + 'px)';
    }
});

productPrevBtn.addEventListener('click', ()=>{
    if(productCarouselImages[counter].id === 'lastClone'){
        productCarouselSlide.style.transition = "none";
        counter = productCarouselImages.length - 2;
        productCarouselSlide.style.transform = 'translateX(' + (-imageSize * counter) + 'px)';
    }
    else if(productCarouselImages[counter].id === 'firstClone'){
        productCarouselSlide.style.transition = "none";
        counter = productCarouselImages.length - counter;
        productCarouselSlide.style.transform = 'translateX(' + (-imageSize * counter) + 'px)';
    }
    else {
        productCarouselSlide.style.transition = "transform 0.4s ease-in-out";
        counter--;
        productCarouselSlide.style.transform = 'translateX(' + (-imageSize * counter) + 'px)';
    }
});

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

// button toggle for glazing option
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
    isQtyOn = false;
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
            isQtyOn = true;  
        }
    }
    sum = qtyPrice + glazingPrice;
    var btn = document.getElementById("addToCartBtn").firstChild;
    if (isQtyOn) {
        btn.nodeValue = "Add to cart" + " - $" + sum;
    }
    else {
        btn.nodeValue = "Select size to add to cart" + " - $" + sum;
    }
}

// button toggle for qty option
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

// parse price text from option text
function getQtyPrice(item) {
    var qtyText = item.innerHTML;
    var dollarStrIndex = qtyText.indexOf("$");
    var lastStrIndex = qtyText.length;  
    var priceText = qtyText.slice(dollarStrIndex+1, lastStrIndex);
    return parseInt(priceText);
}

var cartBtn = document.getElementById("addToCartBtn");
cartBtn.addEventListener("click", () =>{
    cartAlert();
    activateBadge();
});

// alert if user click add to cart without qty
function cartAlert() {
    for (let i=0; i < qtyArray.length; i++){
        if (qtyArray[i].id === "qty_activated"){
            document.location.href = "cart.html";
            return true;
        }
    };
    alert("You must select size");
}

// activate shoping cart badge
function activateBadge() {

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
