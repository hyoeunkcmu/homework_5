// Qty dropdown menu 
// ref:https://www.w3schools.com/howto/howto_js_dropdown.asp

function addDropdownEventListeners() {
    var dropDownButtons = document.getElementsByClassName("dropbtn");
    var itemIndex;
    for (let i = 0; i < dropDownButtons.length; i++){
        let button = dropDownButtons[i];
        button.addEventListener('click', function(event){
            itemIndex = i;
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var eventDropdownContents = dropdowns[itemIndex];
            eventDropdownContents.classList.toggle("show");
            exitDropdownMenu()
        })
    }
    var contentsButtons = document.getElementsByClassName("drQty");
    for (let i = 0; i < contentsButtons.length; i++){
        let button = contentsButtons[i];
        button.addEventListener('click', function(event){
            let text = event.target.innerHTML;
            let intText = text[text.length - 1];
            let items = JSON.parse(localStorage.getItem("items"));
            let price = items[itemIndex][2];
            items[itemIndex][4] = intText; //multiplier
            let finalPrice = price * intText;
            items[itemIndex][5] = finalPrice;
            localStorage.setItem('items', JSON.stringify(items));
            drawView()
        })
    }
}

// Close the dropdown menu if the user clicks outside of it
function exitDropdownMenu() {
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
                }
            }
        }
    }
}

function addDropdownEventListenersToSave() {
    let dropDownButtons = document.getElementsByClassName("dropbtn2");
    var itemIndex;
    for (let i = 0; i < dropDownButtons.length; i++){
        itemIndex = i;
        let button = dropDownButtons[i];
        button.addEventListener('click', function(event){
            let dropdowns = document.getElementsByClassName("dropdown-content2");
            let eventDropdownContents = dropdowns[i];
            eventDropdownContents.classList.toggle("show");
            exitDropdownMenu2();
        })
    }
    var contentsButtons = document.getElementsByClassName("drQty2");
    for (let i = 0; i < contentsButtons.length; i++){
        let button = contentsButtons[i];
        button.addEventListener('click', function(event){
            let text = event.target.innerHTML;
            let intText = text[text.length - 1];
            let items = JSON.parse(localStorage.getItem("saveItems"));
            let price = items[itemIndex][2];
            items[itemIndex][4] = intText; //multiplier
            let finalPrice = price * intText;
            items[itemIndex][5] = finalPrice;
            localStorage.setItem("saveItems", JSON.stringify(items));
            drawView()
        })
    }
}

function exitDropdownMenu2() {
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn2')) {
            var dropdowns = document.getElementsByClassName("dropdown-content2");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
                }
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
    let finalPrice = 0;
    if (items !== null){
        let items = JSON.parse(localStorage.getItem("items"));
        for (let i=0; i < items.length; i++) {
            finalPrice += parseInt(items[i][5]);
        }
    }
    let totalText = document.getElementsByClassName("subtotal");
    for (let i=0; i < totalText.length; i++) {
        let text = totalText[i];
        text.innerHTML = "Subtotal: $" + finalPrice;
    }
}

// ref: https://www.youtube.com/watch?v=YeFzkC2awTM
// add cart items from cart array data
function drawCartItems(items) {
    let glazing;
    let qty;
    let totalPrice;
    let image;
    let totalQty;
    let finalPrice;
    if (items !== null) {
        for (let i=0; i < items.length; i++) {
            glazing = items[i][0];
            qty = items[i][1];
            totalPrice = items[i][2];
            image = items[i][3];
            totalQty = items[i][4];
            finalPrice = items[i][5];
            addItemToCart(glazing, qty, totalPrice, image, totalQty, finalPrice);
        }
    }
    // Add onclick listener
    addEventListeners()
    addEditEventListeners()
    addDropdownEventListeners()
}

function addItemToCart(glazing, qty, totalPrice, image, totalQty, finalPrice) {
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
                        <button class="dropbtn">Qty: ${totalQty} <i class="fas fa-sort-down"></i></button>
                        <div class='dropdown-content'>
                            <div class='drQty'>Qty: 1</div>
                            <div class='drQty'>Qty: 2</div>
                            <div class='drQty'>Qty: 3</div>
                            <div class='drQty'>Qty: 4</div>
                        </div>
                    </div>                
                    <div class="product-title">$${finalPrice}</div>
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
            deleteItemIndex = i;
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
    let totalQty;
    let finalPrice;
    if (items !== null){
        for (let i=0; i < items.length; i++) {
            glazing = items[i][0];
            qty = items[i][1];
            totalPrice = items[i][2];
            image = items[i][3];
            totalQty = items[i][4];
            finalPrice = items[i][5];
            addItemToSaveForLater(glazing, qty, totalPrice, image, totalQty, finalPrice);
        }
    }
    // Add onclick listener
    saveAddEventListeners()
    addEditEventListeners()
    addDeleteEventListenersToSave()
    moveAddEventListeners()
    addDropdownEventListenersToSave()
}

function addItemToSaveForLater(glazing, qty, totalPrice, image, totalQty, finalPrice) {
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
                        <button class="dropbtn2">Qty: ${totalQty} <i class="fas fa-sort-down"></i></button>
                        <div class='dropdown-content2'>
                            <div class='drQty2'>Qty: 1</div>
                            <div class='drQty2'>Qty: 2</div>
                            <div class='drQty2'>Qty: 3</div>
                            <div class='drQty2'>Qty: 4</div>
                        </div>
                    </div>                
                    <div class="product-title">$${finalPrice}</div>
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

function addDeleteEventListenersToSave(){
    let removeSaveItemButtons = document.getElementsByClassName("delete-2");
    let deleteItemIndex;
    for (let i = 0; i < removeSaveItemButtons.length; i++){
        let button = removeSaveItemButtons[i];
        button.addEventListener('click', function(event) {
            deleteItemIndex = i;
            let saveItems = JSON.parse(localStorage.getItem("saveItems"));
            saveItems.splice(deleteItemIndex, 1);
            localStorage.setItem("saveItems", JSON.stringify(saveItems));
            drawView();
        })
    }
}

//Move to cart
function moveAddEventListeners() {
    var moveToCartButtons = document.getElementsByClassName("move");
    var moveItemIndex;
    for (let i = 0; i < moveToCartButtons.length; i++){
        let button = moveToCartButtons[i];
        button.addEventListener('click', function(event) {
            moveItemIndex = i;
            let saveItems = JSON.parse(localStorage.getItem("saveItems"));
            let moveItem = saveItems[moveItemIndex];
            if (JSON.parse(localStorage.getItem("items")) !== null){
                cartItems = JSON.parse(localStorage.getItem("items"));
            }
            cartItems.push(moveItem);
            localStorage.setItem("items", JSON.stringify(cartItems));           
            saveItems.splice(moveItemIndex, 1);
            localStorage.setItem('saveItems', JSON.stringify(saveItems));
            drawView()
        })
    }
}

drawView()