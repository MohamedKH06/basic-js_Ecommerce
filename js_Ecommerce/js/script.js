
//Define Product

let productsDom = document.querySelector(".products");
let products = productsDB;

// display products

let drawProdactUi;
(drawProdactUi = function (products = []) {
  // console.log(products);
  let productUI = products.map((item) => {
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
        
        ${
          (item.isMe === "Y" &&
            "<button class='edit-product'onclick='editProduct(" +
              item.id +
              ")' >Edit Product</button>") ||
          ""
        }
        
        <i class=" favorite fa-regular fa-heart ${
          item.like == true ? "fa-solid fa-heart" : ""
        }" style= "color :${
      item.like == true ? "red" : ""
    }" onclick="AddToFavorite(${item.id}) " ></i>
      </div>
    
  </div>`;
  });
  productsDom.innerHTML = productUI.join("");
})(JSON.parse(localStorage.getItem("products")) || productsDB);

// Add to cart

function AddToCart(id) {
  if (localStorage.getItem("username")) {
    let products = JSON.parse(localStorage.getItem("products")) || products;
    let product = products.find((item) => item.id === id);
    let isProductInCart = addItem.some((i) => i.id === product.id);

    if (isProductInCart) {
      addItem = addItem.map((p) => {
        if (p.id === product.id) p.qty += 1;
        return p;
      });
    } else {
      addItem.push(product);
    }
    // UI
    cartProductDivDom.innerHTML = "";
    addItem.forEach((item) => {
      cartProductDivDom.innerHTML += `<p>${item.title}  <span class='item-qty' > ${item.qty}</span></p>`;
    });
    // save data
    localStorage.setItem("productsInCart", JSON.stringify(addItem));
    // add counter of items
    let cartProductItems = document.querySelectorAll(".carts-products div p");
    badgeDom.style.display = "block";
    badgeDom.innerHTML = cartProductItems.length;
  } else {
    window.location = "login.html";
  }
}

function getUniqueArr(arr, filterType) {
  let unique = arr
    .map((item) => item[filterType])
    .map((item, i, final) => final.indexOf(item) === i && i)
    .filter((item) => arr[item])
    .map((item) => arr[item]);
  return unique;
}

function saveItemData(id) {
  localStorage.setItem("productId", id);
  window.location = "cartDetails.html ";
}

//search

let input = document.getElementById("search");

input.addEventListener("keyup", function (e) {
  search(e.target.value, JSON.parse(localStorage.getItem("products")));

  if (e.target.value.trim() === "") {
    drawProdactUi(JSON.parse(localStorage.getItem("products")));
  }
});

function search(title, myArry) {
  let arr = myArry.filter(
    (item) => item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1
  );
  drawProdactUi(arr);
}

// Add to favorite

let favoriteItem = JSON.parse(localStorage.getItem("productsfavorite"))
  ? JSON.parse(localStorage.getItem("productsfavorite"))
  : [];

function AddToFavorite(id) {
  if (localStorage.getItem("username")) {
    let chosenItem = products.find((item) => item.id === id);
    chosenItem.like = true;
    favoriteItem = [...favoriteItem, chosenItem];
    let uniqueProducts = getUniqueArr(favoriteItem, "id");
    localStorage.setItem("productsfavorite", JSON.stringify(uniqueProducts));
    products.map((item) => {
      if (item.id === chosenItem.id) {
        item.like = true;
      }
    });
    localStorage.setItem("products", JSON.stringify(products));
    drawProdactUi(products);
  } else {
    window.location = "login.html";
  }
}

// filter by size

let sizeFilter = document.getElementById("size-filter");

sizeFilter.addEventListener("change", getProductsFilterBySize);

function getProductsFilterBySize(e) {
  let val = e.target.value;
  // console.log(val);
  let products = JSON.parse(localStorage.getItem("products")) || products;
  console.log(products);

  if (val === "all") {
    drawProdactUi(products);
  } else {
    products = products.filter((i) => i.size === val);
    drawProdactUi(products);
  }
}

// Edit Product

function editProduct(id) {
  // console.log("id is ", id);
  localStorage.setItem("editProduct", id);

  window.location = "editproduct.html";
}

