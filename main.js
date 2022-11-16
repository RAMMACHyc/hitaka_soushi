document.querySelector(".bx-menu").onclick = () => {
    document.querySelector(".navbar").classList.toggle("active");
};
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
const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector("#close-cart");
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
    document.addEventListener('DOMContentLoaded', start);
} else {
    start();
}

// Moking Function
function start() {
    addEvents();
}

function update() {
    addEvents();
    updateTotal();
}

function addEvents() {
    let cartRemove_btns = document.querySelectorAll('.cart-remove');
    console.log(cartRemove_btns);
    cartRemove_btns.forEach((btn) => {
        btn.addEventListener("click", handle_removerCartItems());

    });

    // change items quantiy
    let cartQuantity_inputs = document.querySelectorAll('.cart-quantity');
    cartQuantity_inputs.forEach(input => {
        input.addEventListener("change", handle_changeItemQuantity);
    });
    //Add item to cart
    let addCart_btns = document.querySelectorAll(".shoping");
    addCart_btns.forEach(btn => {
        btn.addEventListener("click", handle_addCartItem);
    });
}
//HANDLE EVENTS FUNCTIONS
function handle_addCartItem() {
    let product = this.parentElement;
    let title = product.querySelector(".product-title").innerHTML;
    let price = product.querySelector(".prix").innerHTML;

    let cartBoxElement;
    let newNode = document.createElement("div");

    const cartContent = cart.querySelector(".cart-content");
    cartContent.appendChild(newNode);
    document.getElementById("bi").innerHTML += `
    <div class = "cart-box ">
       <img src = "" alt = " " class = "cart-img ">
     <div class = "detail-box ">
       <div class = "cart-product-title ">${title}</div>
        <div class = "cart-price " >${price}</div>
         <input type = "number" value = "1" class = "cart-quantity ">
     </div>
        <i class = 'bx bxs-trash-alt cart-remove' ></i>
   </div> `
}

function handle_removerCartItems() {
    this.parentElement.remove();

    update();
}

function handle_changeItemQuantity() {
    if (isNaN(this.value) || this.value < 1) {
        this.value = 1;
    }
    this.value = Math.floor(this.value);

    update();
}

function updateTotal() {
    let cartBoxes = document.querySelectorAll('.cart-box');
    const totalElement = cart.querySelector('.total-price');
    let total = 0;
    cartBoxes.forEach(cartBox => {
        let priceElement = cartBox.querySelector('.cart-price');
        let price = parseFloat(priceElement.innerHTML.replace("DH", ""));
        let quantity = cartBox.querySelector(".cart-quantity").value;
        total += price * quantity;
    });
    total = total.toFixed(2);
    totalElement.innerHTML = "DH" + total;
}