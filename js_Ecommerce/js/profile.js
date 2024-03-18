let get_user = localStorage.getItem("username");
let get_email = localStorage.getItem("email");
let products = JSON.parse(localStorage.getItem("products")) || productsDB;
let myproducts = products.filter((i) => i.isMe === "Y");
console.log(products);

// variables

let userDom2 = document.getElementById("username");
let userEmailDom = document.getElementById("email");
let productsLength = document.querySelector ("#productsLength span");

userDom2.innerHTML = get_user;
userEmailDom.innerHTML = get_email;
if(myproducts.length){
    productsLength.innerHTML = myproducts.length

}else{
    productsLength.remove();
}
