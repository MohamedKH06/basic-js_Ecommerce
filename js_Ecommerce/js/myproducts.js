let productsDom = document.querySelector(".products");
let noProductDom = document.querySelector(".noproduct");

let drawProdactUi;
(drawProdactUi = function (products = []) {
  let myProducts = products.filter((item) => item.isMe === "Y");
  if (myProducts.length != 0) {
    let productUI = myProducts.map((item) => {
      return `<div class="product-item" style="border: ${
        item.isMe === "Y" ? "2px solid green " : ""
      }">
    <img
      src="${item.imgUrl}"
      alt="head-phones"
      class="product-item-img"
    />
    <div class="product-item-desc">
      <a onclick="saveItemData(${item.id})" >${item.title}</a>
      <p>${item.desc}</p>
      <span>Size :${item.size}</span>
    </div>
      <div class="product-item-actions">
        <button class="add-to-cart" onclick="AddToCart(${
          item.id
        })" >Add To Cart</button>
        
        <button class='edit-product'onclick='editProduct(${
          item.id
        })' >Edit Product</button>
        <button class='delete-product'onclick='deleteProduct(${
          item.id
        })' >Delete Product</button>
        
    </div>
  </div>`;
    });
    productsDom.innerHTML = productUI.join("");
  } else {
    noProductDom.innerHTML = "Ther is No Products";
  }
})(JSON.parse(localStorage.getItem("products")) || productsDB);

// Edit Product

function editProduct(id) {
  localStorage.setItem("editProduct", id);

  window.location = "editproduct.html";
}

//   Delete Product

function deleteProduct(id) {
  let products = JSON.parse(localStorage.getItem("products")) || productsDB;
  let myProducts = products.filter((item) => item.isMe === "Y");
  let filterd = myProducts.filter((i) => i.id !== id);

  let clickdItem = myProducts.find((i) => i.id === id);
  products = products.filter((i) => i.id !== clickdItem.id);
  localStorage.setItem("products", JSON.stringify(products));
  drawProdactUi(filterd);
}
