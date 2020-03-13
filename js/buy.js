var buttonBuy = document.querySelectorAll(".buy-button");
var popupBuy = document.querySelector(".modal-catalog");
let onclickBuy;


for (var i=0; i<buttonBuy.length; i++) {
  buttonBuy[i].addEventListener("click", function(evt) {
  evt.preventDefault();
  popupBuy.classList.add("modal-show");
});
}


