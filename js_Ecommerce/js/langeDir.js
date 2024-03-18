// lang
let getlang = localStorage.getItem("langeDir");
if (getlang === "rtl") {
  ChangeDir("rtl");
} else {
  ChangeDir("ltr");
}


// Change the lange

let en = document.getElementById("en-lang");
let ar = document.getElementById("ar-lang");

en.addEventListener("click", () => ChangeDir("ltr"));
ar.addEventListener("click", () => ChangeDir("rtl"));

function ChangeDir(dir) {
  document.documentElement.setAttribute("dir", dir);
  localStorage.setItem("langeDir", dir);
}
