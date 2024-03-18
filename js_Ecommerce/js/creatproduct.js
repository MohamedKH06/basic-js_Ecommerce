// variables
let productName = document.getElementById("product-name");
let productDesc = document.getElementById("product-desc");
let productSizeSelect = document.getElementById("product-size");
let createForm = document.getElementById("creat-form");
let inputFile = document.getElementById("upload-image-file");
let productSizeValue;
let productImage;

// Events
productSizeSelect.addEventListener("change", getProductSizeValue);
createForm.addEventListener("submit", createProductFun);
inputFile.addEventListener("change", uploadImage);

// FUNCTIONS
function getProductSizeValue(e) {
  productSizeValue = e.target.value;
}

function createProductFun(event) {
  event.preventDefault(); // Corrected the spelling of preventDefault
  let allProducts = JSON.parse(localStorage.getItem("products")) || productsDB;
  let nameValue = productName.value;
  let descValue = productDesc.value;
  if (nameValue && descValue) {
    let obj = {
      id: allProducts ? allProducts.length + 1 : 1, // Corrected the typo in length
      qty: 1,
      imgUrl: productImage,
      size: productSizeValue,
      title: nameValue,
      desc: descValue,
      isMe: "Y",
    };

    let newProducts = allProducts ? [...allProducts, obj] : [obj];
    localStorage.setItem("products", JSON.stringify(newProducts));
    productName.value = "";
    productDesc.value = "";
    productSizeSelect.value = "";
    setTimeout(() => {
      window.location = "index.html";
    }, 500);
  } else {
    alert("please fill the form name and description");
  }
}
// uploadImge

function uploadImage() {
  let file = this.files[0];
  // console.log(file);

  let types = ["image/jpeg", "image/png"];

  if (types.indexOf(file.type) == -1) {
    alert("the tyep is not supported");
    return;
  }
  if (file.size > 3 * 1024 * 1024) {
    alert("The image size should be less than 5MB");
    return;
  }
  // productImage = URL.createObjectURL(file);
  getImageBase64(file);
}

function getImageBase64(file) {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    productImage = reader.result;
  };
  reader.onerror = function () {
    alert("Error !");
  };
}
