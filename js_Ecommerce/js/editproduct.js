// variables
let products = JSON.parse(localStorage.getItem("products")) || productsDB;
let productId = JSON.parse(localStorage.getItem("editProduct"));
let getProduct = products.find((i) => i.id === productId);

console.log("befor",getProduct)

let productName = document.getElementById("product-name");
let productDesc = document.getElementById("product-desc");
let productSizeSelect = document.getElementById("product-size");
let updateForm = document.getElementById("update-form");
let inputFile = document.getElementById("upload-image-file");
let productSizeValue;
let productImage;

productName.value = getProduct.title;
productDesc.value = getProduct.desc;
productSizeSelect.value = getProduct.size;
productImage = getProduct.imgUrl;

// Events
productSizeSelect.addEventListener("change", getProductSizeValue);
updateForm.addEventListener("submit", updateProductFun);
inputFile.addEventListener("change", uploadImage);

//  FUNCTIONS
function getProductSizeValue(e) {
  productSizeValue = e.target.value;
}

function updateProductFun(event) {
  event.preventDefault();

  getProduct.title = productName.value;
  getProduct.desc = productDesc.value;
  getProduct.size = productSizeValue;
  getProduct.imgUrl = productImage ;

  console.log("after",getProduct)

  localStorage.setItem("products", JSON.stringify(products));

  setTimeout(() => {
          window.location = "index.html";
        }, 500);

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
