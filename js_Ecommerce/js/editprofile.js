let get_user = localStorage.getItem("username");
let get_email = localStorage.getItem("email");

// variables

let userinput = document.getElementById("changeName");
let userEmailinput = document.getElementById("changeEmail");
let editForm = document.getElementById("edit-profile-form");

// Setting Value of input
userinput.value = get_user;
userEmailinput.value = get_email;

// Evant

editForm.addEventListener("submit", editProfilData);

function editProfilData(e) {
  e.preventDefault();

  localStorage.setItem("username", userinput.value);
  localStorage.setItem("email", userEmailinput.value);

  setTimeout(() => {
    window.location = "profile.html ";
  }, 500);
}
