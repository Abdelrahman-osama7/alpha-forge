
let allproducts = document.querySelector(".products")
let viewproductsdiv = document.querySelector(".viewproduct div")
let badge = document.querySelector(".badge")
let cart = document.querySelector(".cart")
let viewproduct = document.querySelector(".viewproduct")

let products = [
    { id: 1, title: "Hand Gripper", color: "black", imageUrl: "image/hand.jpg" },
    { id: 2, title: "Adjustable Dumbbell Set", color: "black", imageUrl: "image/adjus.jpg" },
    { id: 3, title: "Cable Machine Attachments Set", color: "black", imageUrl: "image/cable.jpg" },
    { id: 4, title: "Fixed Barbell", color: "black", imageUrl: "image/fixed.jpg" },
    { id: 5, title: "Jump Rope", color: "black", imageUrl: "image/jump.jpg" },
    { id: 6, title: "Whey Protein", color: "black", imageUrl: "image/optimum.jpg" },
]

function drowproduct() {
    let y = products.map((item) => {
        return `
           <div class="product-card">
                    <img src="${item.imageUrl}" alt="">
                    <div class="product-desc">
                        <h2>${item.title}</h2>
                        <p>Strengthens grip,bulids forearm power</p>
                        <span>${item.color}</span>
                    </div>
                    <div class="product-action">
                        <button class="add-to-cart" onclick="AddToCart(${item.id})">Add To Cart</button>
                        <i class="fa-solid fa-heart"></i>
                    </div>
                </div>
        `
    })
    allproducts.innerHTML = y.join(" ");
}
drowproduct()

let addeditem = JSON.parse(localStorage.getItem('productincart')) || [];

function renderCart() {
    viewproductsdiv.innerHTML = "";
    let totalQty = 0;
    addeditem.forEach(item => {
        totalQty += item.qty;
        viewproductsdiv.innerHTML += `<p>${item.title} x ${item.qty}</p>`;
    });
    if (totalQty > 0) {
        badge.style.display = "block";
        badge.textContent = totalQty;
    } else {
        badge.style.display = "none";
    }
}
renderCart();

function AddToCart(id) {
    let chooseitem = products.find((item) => item.id === id);
    let exist = addeditem.find(i => i.id === id);
    if (exist) {
        exist.qty += 1;
    } else {
        addeditem.push({ ...chooseitem, qty: 1 });
    }
    localStorage.setItem("productincart", JSON.stringify(addeditem));
    renderCart();
    viewproduct.style.display = "block";
}

cart.addEventListener('click', () => {
    if (addeditem.length > 0) {
        viewproduct.style.display = viewproduct.style.display == "block" ? "none" : "block";
    }
});