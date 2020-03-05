var link = document.querySelector(".contact-link");
var popup = document.querySelector(".modal-contact");
var popupMap = document.querySelector(".modal-map");
var close =document.querySelector(".modal-close");
var login = popup.querySelector("[name=user-name]");
var email = popup.querySelector("[name=user-email]");
var form = popup.querySelector("form");
var map = document.querySelector(".map-image");

var storage =localStorage.getItem("login");
var isStorageSupport = true;

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

form.addEventListener("submit", function(evt){
  if(!login.value || !email.value) {
  evt.preventDefault();
  console.log("нужно ввести лог пар");
} else {
if (isStorageSupport) {
  localStorage.setItem("login", login-value);
  localStorage.setItem("email", email.value);
}
}
});

map.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-show");
});

try{
storage = localStorage.getItem("login");
} catch(err) {
isStorageSupport = false;
}
