
let productdiv = document.querySelector(".products");
let badge = document.querySelector(".badge");
let productInCart = JSON.parse(localStorage.getItem("productincart")) || [];

function drow() {
    let total = 0;
    let y = productInCart.map((item, index) => {
        total += item.qty;
        return `
        <div class="product-card">
            <img src="${item.imageUrl}" alt="">
            <div class="product-desc">
                <h2>${item.title}</h2>
                <p>Strengthens grip,bulids forearm power</p>
                <span>${item.color}</span>
                <p>Qty: ${item.qty}</p>
                <div>
                    <button onclick="changeQty(${index}, 1)">+</button>
                    <span>${item.qty}</span>
                    <button onclick="changeQty(${index}, -1)">-</button>
                </div>
            </div>
            <div class="product-action">
                <button class="add-to-cart" onclick="RemoveItem(${index})">Remove From Cart</button>
            </div>
        </div>`;
    });
    productdiv.innerHTML = y.join("");
    badge.innerHTML = total;
    if (total > 0) {
        badge.style.display = "block";
    } else {
        badge.style.display = "none";
    }
}
drow();

function changeQty(index, num) {
    productInCart[index].qty += num;
    if (productInCart[index].qty <= 0) {
        productInCart.splice(index, 1);
    }
    localStorage.setItem("productincart", JSON.stringify(productInCart));
    drow();
}

function RemoveItem(index) {
    productInCart.splice(index, 1);
    localStorage.setItem("productincart", JSON.stringify(productInCart));
    drow();
}