let cartProductDivDom = document.querySelector(".carts-products div");
let badgeDom = document.querySelector(".badge");
let cartProductMenu = document.querySelector(".carts-products");
let choppingCartIcon = document.querySelector(".choppingCart");

// check if ther is items in localStorige
let addItem = JSON.parse(localStorage.getItem("productsInCart"))
  ? JSON.parse(localStorage.getItem("productsInCart"))
  : [];

if (addItem) {
  addItem.map((item) => {
    cartProductDivDom.innerHTML += `<p>${item.title} ${item.qty}</p>`;
  });
  badgeDom.style.display = "block";
  badgeDom.innerHTML = addItem.length;
}

// open cart menu
choppingCartIcon.addEventListener("click", openCartMenu);

// open cart menu
function openCartMenu() {
  if (cartProductDivDom.innerHTML != "") {
    if (cartProductMenu.style.display == "block") {
      cartProductMenu.style.display = "none";
    } else {
      cartProductMenu.style.display = "block";
    }
  }
}
