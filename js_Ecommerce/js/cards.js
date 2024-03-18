let productsDom = document.querySelector(".products");
let noProductDom = document.querySelector(".noproduct");
// if (productsInCart) {
//   let items = JSON.parse(productsInCart);
//   drawCartProdactUi(items);
// }

function drawCartProdactUi(allproducts = []) {
  if ( JSON.parse(localStorage.getItem("productsInCart")).length === 0)
    noProductDom.innerHTML = "Ther No Products in the Cart ";

  let products =
    JSON.parse(localStorage.getItem("productsInCart")) || allproducts;
  let productUI = products.map((item) => {
    return `<div class="product-item">
      <img
        src="${item.imgUrl}"
        alt="head-phones"
        class="product-item-img"
      />
      <div class="product-item-desc">
        <h2>${item.title}</h2>
        <p>${item.desc}</p>
        <span>Size :${item.size}</span><br>
        <span>Quntati :${item.qty}</span>
      </div>
        <div class="product-item-actions">
          <button class="add-to-cart" onclick="removeItemFromCart(${item.id})" >Remove From  Cart</button>
          
        </div>
      
    </div>`;
  });
  productsDom.innerHTML = productUI.join("");
}
drawCartProdactUi();

function removeItemFromCart(id) {
  let productsInCart = localStorage.getItem("productsInCart");
  if (productsInCart) {
    let items = JSON.parse(productsInCart);

    let filteredItem = items.filter((item) => item.id !== id);
    // drawCartProdactUi(filteredItem);
    localStorage.setItem("productsInCart", JSON.stringify(filteredItem));
    drawCartProdactUi(filteredItem);
  }
}
