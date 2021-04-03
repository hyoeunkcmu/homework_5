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

// update cart total number header text
function updateCartBadge(){
    if (JSON.parse(localStorage.getItem("items")) !== null){
        var totalNum = JSON.parse(localStorage.getItem("items")).length;
    }
    
    if (totalNum === undefined || totalNum === 0) {
        document.getElementById("totalNumber").innerHTML = "Your cart is empty";
    }
    else if (totalNum === 1){
        document.getElementById("totalNumber").innerHTML = "1 item in your cart";
    }
    else {
        document.getElementById("totalNumber").innerHTML = totalNum + " items in your cart";
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
}

function updateCartTotal() {
//items = [glazing, qty, totalPrice];
    let totalPrice = 0;
    if (JSON.parse(localStorage.getItem("items")) !== null){
        let items = JSON.parse(localStorage.getItem("items"));
        for (let i=0; i < items.length; i++) {
            totalPrice += parseInt(items[i][2]);
        }
    }
    let totalText = document.getElementsByClassName("subtotal");
    for (let i=0; i < totalText.length; i++) {
        let text = totalText[i];
        text.innerHTML = "Subtotal: $" + totalPrice;
    }
}

// ref: https://www.youtube.com/watch?v=YeFzkC2awTM
// add cart items from cart array data
function drawCartItems() {
    let items = JSON.parse(localStorage.getItem("items"));
    let glazing;
    let qty;
    let totalPrice;
    for (let i=0; i < items.length; i++) {
        glazing = items[i][0];
        qty = items[i][1];
        totalPrice = items[i][2];
        addItemToCart(glazing, qty, totalPrice);
    }
}

function addItemToCart(glazing, qty, totalPrice) {
    let cartRow = document.createElement('div');
    let cartItems = document.getElementsByClassName("cart-items")[0];
    let cartRowContents = `
    <div class="item-2">
        <div class="container">
            <div class="checkbox-container">
                <input type="checkbox" checked="checked">
                <span class="checkmark"></span>
            </div>
            <img src="images/cart_original.png" alt="original">
            <div class="text-container">
                <div class="title-price">
                    <div class="product-title">Original</div>
                    <div class="dropdown">
                        <button onclick="dropdown()" class="dropbtn">Qty: 1 <i class="fas fa-sort-down"></i></button>
                        <div id="myDropdown" class='dropdown-content'>
                            <div>Qty: 2</div>
                            <div>Qty: 3</div>
                            <div>Qty: 4</div>
                        </div>
                    </div>                
                    <div class="product-title">$${totalPrice}</div>
                </div>
                <div class="glazing-option">
                    <b>Glazing:</b> ${glazing}
                </div>
                <div class="stock"><b>${qty}PK</b></div>
                <div class="stock">In Stock</div>
                <div class="gift">
                    <label class="container-gift">
                        <input type="checkbox">
                        <span class="checkmark"></span>
                        This is a gift
                    </label>
                </div>
                <div class="text-btn">
                    <div class="edit">Edit</div>
                    <div class="delete">Delete</div>
                    <div class="save">Save for Later</div>
                </div>
            </div>
        </div>
    </div>`
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
}

drawCartItems()
updateCartTotal()
updateCartBadge()

// delete items
var removeCartItemButtons = document.getElementsByClassName("delete");
var deleteItemIndex;
for (let i = 0; i < removeCartItemButtons.length; i++){
    let button = removeCartItemButtons[i];
    button.addEventListener('click', function(event) {
        let buttonClicked = event.target;
        let item = buttonClicked.parentElement.parentElement.parentElement.parentElement;
        deleteItemIndex = i;
        let items = JSON.parse(localStorage.getItem("items"));
        items.splice(deleteItemIndex, 1);
        localStorage.setItem('items', JSON.stringify(items));
        item.remove();
        updateCartTotal()
        updateCartBadge()
    })
}

// edit items
var editCartItemButtons = document.getElementsByClassName("edit");
for (let i = 0; i < editCartItemButtons.length; i++){
    let button = editCartItemButtons[i];
    button.addEventListener('click', function(event) {
        document.location.href = "detail.html";
    })
}

// draw items - Saved for later

// delete items - Saved for later


