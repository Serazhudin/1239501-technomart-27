var link = document.querySelector(".contact-link");
var popup = document.querySelector(".modal-contact");
var close = document.querySelector(".modal-close");
var login = popup.querySelector("[name=user-name]");
var email = popup.querySelector("[name=user-email]");
var form = popup.querySelector("form");
var buyButton = document.querySelectorAll(".buy-button");
var buyPopup = document.querySelector(".modal-catalog");
var buyClose = buyPopup.querySelector(".modal-close");
var mapLink = document.querySelector(".map-image");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

var storage = localStorage.getItem("login");
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
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
  if (!login.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login - value);
      localStorage.setItem("email", email.value);
    }
  }
});

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

for (var i = 0; i < buyButton.length; i++) {
  buyButton[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    buyPopup.classList.add("modal-show");
  });
}

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (buyPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      buyPopup.classList.remove("modal-show");
    }
  }
});

buyClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  buyPopup.classList.remove("modal-show");
});

mapLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});

mapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});
