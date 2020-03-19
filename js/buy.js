var buyButton = document.querySelectorAll(".buy-button");
var buyPopup = document.querySelector(".modal-catalog");
var buyClose = buyPopup.querySelector(".modal-close");

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
