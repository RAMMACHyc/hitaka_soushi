document.querySelector(".Best-seller").addEventListener("click", function() {
    document.querySelector("body > div.dash > div:nth-child(4)").style.display = "flex";
    document.querySelector("body > div.dash > div:nth-child(5)").style.display = "none";
    document.querySelector("body > div.dash > div:nth-child(6)").style.display = "none";
})
document.querySelector(".Near-Me").addEventListener("click", function() {
    document.querySelector("body > div.dash > div:nth-child(4)").style.display = "none";
    document.querySelector("body > div.dash > div:nth-child(5)").style.display = "flex";
    document.querySelector("body > div.dash > div:nth-child(6)").style.display = "none";
})
document.querySelector(".Favorites").addEventListener("click", function() {
    document.querySelector("body > div.dash > div:nth-child(4)").style.display = "none";
    document.querySelector("body > div.dash > div:nth-child(5)").style.display = "none";
    document.querySelector("body > div.dash > div:nth-child(6)").style.display = "flex";
})

document.querySelector("body > div.dash > div.dash-menu > a:nth-child(6)").addEventListener("click", function() {
    document.querySelector("body > div.dash > div:nth-child(4)").style.display = "flex";
    document.querySelector("body > div.dash > div:nth-child(5)").style.display = "flex";
    document.querySelector("body > div.dash > div:nth-child(6)").style.display = "flex";
})


//Cart
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");
// open Cart
cartIcon.onclick = () => {
    cart.classList.add("active");
};
//close Cart 
closeCart.onclick = () => {
    cart.classList.remove("active");
};
//
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}
// Moking Function
function ready() {
    //Reomve Items Form cart
    var reomveCartButtons = document.getElementsByClassName("cart-remove");
    console.log(reomveCartButtons);
    for (var i = 0; i < reomveCartButtons.length; i++) {
        var button = reomveCartButtons[i];
        button.addEventListener("click", removeCartItem);
    }
    // Quantity Changes
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener("change", quantitychanged);
    }
    //add To Cart
    var addCart = document.getElementsByClassName("shoping");
    for (var i = 0; i < addCart.length; i++) {
        button.addEventListener("click", addCartCliked);
    }
}

// Reomve Items Form cart
function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parenElement.remove();
    updatetotal();
}
// Quantity changes
function quantitychanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updatetotal();
}
//add To cart
function addCartCliked(event) {
    var button = event.target;
    var shopProducts = button.parenElement;
    var title = shopProducts.getElementsByClassName('product-title')[0].innerText;
    console.log(title);
}


// Update Total
function updatetotal() {
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    for (var i = 0; i < reomveCartButtons.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("DH", ""));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
        // if price contain some cents Value
        total = Math.round(total * 100) / 100;
        document.getElementsByClassName("total-price")[0].innerText = "DH" + total;
    }
}