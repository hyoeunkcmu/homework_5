// Carousel Ref:https://youtu.be/KcdBOoK3Pfw
// Index-page image carousel
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//buttons
const prevBtn = document.querySelector('#previousBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//button listeners
nextBtn.addEventListener('click', ()=>{
    if(carouselImages[counter].id === 'lastClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    else if(carouselImages[counter].id === 'firstClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    else {
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        counter++;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});

prevBtn.addEventListener('click', ()=>{
    if(carouselImages[counter].id === 'lastClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    else if(carouselImages[counter].id === 'firstClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    else {
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        counter--;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});

// detail-page image carousel



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

// alert if user click add to cart without qty

// document.getElementById("addToCartBtn").addEventListener("click", cartAlert);

// function cartAlert() {
//     var cartBtn = document.getElementById("addToCartBtn");
//     console.log(cartBtn);
//     for (let i = 0; i < qtyArray.length; i++){
//         console.log("test");
//         if (qtyArray[i].style.background === "#A5927B"){
//             console.log(qtyArray[i].id);
//             cartBtn.getAttribute("href");
//             cartBtn.setAttribute("href", "cart.html")
//         }
//         else { 
//             alert ("You must select a qty");
//             return
//         };
//     };
// }


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
