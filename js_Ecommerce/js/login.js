let username = document.querySelector("#username");
let password = document.querySelector("#password");
let loginBtn = document.querySelector("#sing_in");

let getUser = localStorage.getItem("username")
let getpassword = localStorage.getItem("password")

loginBtn.addEventListener("click",login);

function login(e){
    
        e.preventDefault();
      if (username.value === "" || password.value === "") {
        alert("Please FILL The Data");
      }else{
        if((getUser && getUser.trim()=== username.value.trim() && (getpassword && getpassword === password.value))){
            setTimeout(() => {
                window.location = "index.html";
              }, 1500);
        }else{
            alert("Username or Password is Wrong !!")
        }
      }
    
}
