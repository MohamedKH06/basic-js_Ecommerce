let productsDom = document.querySelector(".products");
let noProductDom = document.querySelector(".noproduct");


function drawfavoritsProdactUi(allproducts = []) {
  if ( JSON.parse(localStorage.getItem("productsfavorite")).length === 0)
    noProductDom.innerHTML = "Ther No Products in the Cart ";

  let products =
    JSON.parse(localStorage.getItem("productsfavorite")) || allproducts;
  let productUI = products.map((item) => {
    return `<div class="product-item">
      <img
        src="${item.imgUrl}"
        alt="head-phones"
        class="product-item-img"
      />
      <div class="product-item-desc">
        <h2>${item.title}</h2>
    desc :"Lorem ipsum dolor sit amet consectetur adipisicing .",
        <p>${item.desc}</p>
        <span>Size :${item.size}</span><br>
        <span>Quntati :${item.qty}</span>
      </div>
        <div class="product-item-actions">
          <button class="add-to-cart" onclick="removeItemFromCart(${item.id})">Remove From  Favorite </button>
          
        </div>
      
    </div>`;
  });
  productsDom.innerHTML = productUI.join("");
}
drawfavoritsProdactUi();

function removeItemFromCart(id) {
  let productsfavorite = localStorage.getItem("productsfavorite");
  if (productsfavorite) {
    let items = JSON.parse(productsfavorite);

    let filteredItem = items.filter((item) => item.id !== id);
    // drawCartProdactUi(filteredItem);
    localStorage.setItem("productsfavorite", JSON.stringify(filteredItem));
    drawfavoritsProdactUi(filteredItem);
  }
}
