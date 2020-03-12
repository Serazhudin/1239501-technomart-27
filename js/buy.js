var buttonBuy = document.querySelector(".buy-button");
var popupBuy = document.querySelector(".modal-catalog");

buttonBuy.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupBuy.classList.add("modal-show");
});
