// Qty dropdown menu 
// ref:https://www.w3schools.com/howto/howto_js_dropdown.asp

function dropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event){
    if(!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i=0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }        
        }
    }
}

// update cart total number header text
function updateCartBadge(items){
    if (items !== null){
        var totalNum = items.length;
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

function updateCartTotal(items) {
//items = [glazing, qty, totalPrice];
    let totalPrice = 0;
    if (items !== null){
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
function drawCartItems(items) {
    let glazing;
    let qty;
    let totalPrice;
    let image;
    if (items !== null) {
        for (let i=0; i < items.length; i++) {
            glazing = items[i][0];
            qty = items[i][1];
            totalPrice = items[i][2];
            image = items[i][3];
            addItemToCart(glazing, qty, totalPrice, image);
        }
    }
    // Add onclick listener
    addEventListeners()
    addEditEventListeners()
}

function addItemToCart(glazing, qty, totalPrice, image) {
    let cartRow = document.createElement('div');
    let cartItems = document.getElementsByClassName("cart-items")[0];
    let cartRowContents = `
    <div class="item-2">
        <div class="container">
            <div class="checkbox-container">
                <input type="checkbox" checked="checked">
                <span class="checkmark"></span>
            </div>
            <img src=${image} alt="original">
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

function drawView() {
    // Clear cartItems
    let cartItems = document.getElementsByClassName("cart-items")[0];
    // console.log('cartItems.childNodes.length', cartItems.childNodes.length); 
    // console.log('cartItems.childNodes', cartItems.childNodes);
    while (cartItems.firstChild) {
        cartItems.removeChild(cartItems.firstChild);
    }
    // console.log('cartItems.childNodes after remove', cartItems.childNodes);
    let getSaveItems = document.getElementsByClassName("item-container-2")[0];
    while (getSaveItems.firstChild) {
        getSaveItems.removeChild(getSaveItems.firstChild);
    }
    // Draw all
    let items = JSON.parse(localStorage.getItem("items"));
    let saveItems = JSON.parse(localStorage.getItem("saveItems"));
    // console.log('items', items);
    drawCartItems(items)
    updateCartTotal(items)
    updateCartBadge(items)
    drawSaveForLater(saveItems)
}

function addEventListeners() {
    var removeCartItemButtons = document.getElementsByClassName("delete");
    var deleteItemIndex;
    for (let i = 0; i < removeCartItemButtons.length; i++){
        let button = removeCartItemButtons[i];
        button.addEventListener('click', function(event) {
            // let buttonClicked = event.target;
            // let item = buttonClicked.parentElement.parentElement.parentElement.parentElement;
            deleteItemIndex = i;
            // console.log('delete', deleteItemIndex);
            let items = JSON.parse(localStorage.getItem("items"));
            items.splice(deleteItemIndex, 1);
            localStorage.setItem('items', JSON.stringify(items));
            drawView()
        })
    }
}

// edit items
function addEditEventListeners(){
    var editCartItemButtons = document.getElementsByClassName("edit");
    for (let i = 0; i < editCartItemButtons.length; i++){
        let button = editCartItemButtons[i];
        button.addEventListener('click', function(event) {
            document.location.href = "detail.html";
        })
    }
}

// Save for later
// addEventListeners to save for later
function saveAddEventListeners() {
    var saveCartItemButtons = document.getElementsByClassName("save");
    var saveItems = []
    var saveItemIndex;
    for (let i = 0; i < saveCartItemButtons.length; i++){
        let button = saveCartItemButtons[i];
        button.addEventListener('click', function(event) {
            saveItemIndex = i;
            console.log('save', saveItemIndex);
            let items = JSON.parse(localStorage.getItem("items"));
            let saveItem = items[saveItemIndex];
            if (JSON.parse(localStorage.getItem("saveItems")) !== null){
                saveItems = JSON.parse(localStorage.getItem("saveItems"));
            }
            saveItems.push(saveItem);
            localStorage.setItem("saveItems", JSON.stringify(saveItems));           
            items.splice(saveItemIndex, 1);
            localStorage.setItem('items', JSON.stringify(items));
            drawView()
        })
    }
}

//draw items - Saved for later
function drawSaveForLater(items) {
    let glazing;
    let qty;
    let totalPrice;
    let image;
    if (items !== null){
        for (let i=0; i < items.length; i++) {
            glazing = items[i][0];
            qty = items[i][1];
            totalPrice = items[i][2];
            image = items[i][3];
            addItemToSaveForLater(glazing, qty, totalPrice, image);
        }
    }
    // Add onclick listener
    saveAddEventListeners()
    addEditEventListeners()
}

function addItemToSaveForLater(glazing, qty, totalPrice, image) {
    let cartRow = document.createElement('div');
    let cartItems = document.getElementsByClassName("item-container-2")[0];
    let cartRowContents = `
    <div class="item-2">
        <div class="container">
            <div class="checkbox-container">
                <input type="checkbox" checked="checked">
                <span class="checkmark"></span>
            </div>
            <img src=${image} alt="original">
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
                    <div class="delete-2">Delete</div>
                    <div class="move">Move to Cart</div>
                </div>
            </div>
        </div>
    </div>`
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
}


// // delete items - Saved for later
// function removeSaveItems(){
//     var removeSaveItemButtons = document.getElementsByClassName("delete-2");
//     var deleteItemIndex2;
//     for (let i = 0; i < removeSaveItemButtons.length; i++){
//         let button = removeSaveItemButtons[i];
//         // console.log('button', button);
//         button.addEventListener('click', function(event) {
//             let buttonClicked = event.target;
//             // console.log('buttonClicked', buttonClicked);
//             let item = buttonClicked.parentElement.parentElement.parentElement;
//             // console.log('item', item);
//             deleteItemIndex2 = i;
//             let items = JSON.parse(localStorage.getItem("cartItems"));
//             // console.log("clicked");
//             items.splice(deleteItemIndex2, 1);
//             localStorage.setItem("cartItems", JSON.stringify(items));
//             // console.log("array", JSON.parse(localStorage.getItem("cartItems")));
//             item.remove();
//         })
//     }
// }

//Move to cart
var moveToCartButtons = document.getElementsByClassName("move");
console.log('moveToCartbuttons', moveToCartButtons)
var moveToCartIndex;

for (let i = 0; i < moveToCartButtons.length; i++){
    let button = moveToCartButtons[i];
    button.addEventListener('click', function(event) {
        let buttonClicked = event.target;
        console.log('clicked')
        let item = buttonClicked.parentElement.parentElement.parentElement.parentElement;
        console.log('item', item);
        moveToCartIndex = i;
        console.log('moveToCartIndex', moveToCartIndex)
        let items = JSON.parse(localStorage.getItem("cartItems"));
        let saveItems = items[i];
        console.log('saveItems', saveItems);
        addListInCart(saveItems);
        items.splice(moveToCartIndex, 1);
        localStorage.setItem('cartItems', JSON.stringify(items));
        item.remove();
        drawSaveForLater();
    })
}

function addListInCart(saveItems) {
    let item = saveItems; //list
    console.log('item', item);
    let cartArray = []
    if (JSON.parse(localStorage.getItem("items")) !== null){
        cartArray = JSON.parse(localStorage.getItem("items"));
    }
    cartArray.push(item);
    localStorage.setItem("items", JSON.stringify(cartArray));
    console.log('list', JSON.parse(localStorage.getItem("items")));
    updateCartTotal();
    updateCartBadge();
    drawSaveForLater();
}

drawView()