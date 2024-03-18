let products = JSON.parse(localStorage.getItem("products"));

let itemDom = document.querySelector(".item-details");

let productId = localStorage.getItem("productId");

let productDetails = products.find((item) => item.id == productId);

itemDom.innerHTML = 
`<img src="${productDetails.imgUrl}" alt="">
<h2>${productDetails.title}</h2>
<p>${productDetails.desc}</p>
<span>Size:${productDetails.size}</span><br>
<span>Quntati :${productDetails.qty}</span><br>
<button onclick="editProduct(${productId})" > Edit Product</button>
`;





// Edit Product

function editProduct(id) {
    // console.log("id is ", id);
    localStorage.setItem("editProduct", id);
  
    window.location = "editproduct.html";
  }
  