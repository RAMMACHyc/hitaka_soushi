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
// if (document.readyState == 'loading') {
//     document.addEventListener('DOMContentLoaded', start);
// } else {
//     start();
// }


// FUNCTIONS
// id.addEventListener('onchange', e => {
//     var q = id.value;
//     sum += q * prix;
// })

function addtocart(id) {
    var element = document.getElementsByClassName('dash-card')[id];
    var image = element.getElementsByClassName('card-image')[0].src;
    var spliteImg = image.split('hitaka_soushi/');
    image = spliteImg[1];
    var div = element.getElementsByClassName('product-title')[0].innerHTML;
    var myArray = div.split(" <");
    var nameProduct = myArray[0];
    div = element.getElementsByClassName('product-title')[0];
    var prix = div.getElementsByClassName('prix')[0].innerHTML;
    var product = {
        'imageSrc': image,
        'name': nameProduct,
        'prix': prix
    }
    var child = document.createElement('div');
    child.className = 'cart-box';
    var divProduct = `
                <img src="./${product.imageSrc}" alt="" class="cart-img ">
                <div class="detail-box ">
                    <div class="cart-product-title ">${product.name}</div>
                    <div class="cart-price ">${product.prix}</div>
                    <input type="number" value="1" class="cart-quantity" onchange="SetDefault(this.value,'${product.prix}')" min=0>
                </div>
                <i class='bx bxs-trash-alt cart-remove'></i>
    `;
    child.innerHTML = divProduct;
    var parent = document.getElementsByClassName("cart-content")[0];
    parent.appendChild(child);
    CalculTotal();
}

function CalculTotal() {
    var cart = document.getElementById('cart');
    var prices = cart.getElementsByClassName('cart-price');
    var total = 0;
    for (var i = 0; i < prices.length; i++) {
        var price = prices[i].innerHTML;
        price = price.split("DH");
        price = parseInt(price)
        total += price;
    }
    var priceTotal = document.getElementById("total_price");
    priceTotal.innerHTML = total + 'DH';
}
CalculTotal();

function SetDefault(value, prix) {
    prix = prix.split("DH");
    prix = parseInt(prix)
    var addPrice = value * prix;
    var cart = document.getElementById('cart');
    var prices = cart.getElementsByClassName('cart-price');
    var total = 0;
    for (var i = 0; i < prices.length; i++) {
        var price = prices[i].innerHTML;
        price = price.split("DH");
        price = parseInt(price)
        if (price == prix) {
            total += addPrice;
            prix = 0;
        } else {
            total += price;
        }
    }
    var priceTotal = document.getElementById("total_price");
    priceTotal.innerHTML = total + 'DH';
}