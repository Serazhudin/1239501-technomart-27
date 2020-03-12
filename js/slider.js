var slides =document.querySelectorAll('.slider-1 .slide');
var currentSlide = 0;
var slideInterval =SetInterval(nextSlide, 2000);

function nextSlide(){
slider-1[currentSlide].className ='slide';
currentSlide =(currentSlide+1)%slider-1.length;
slider-1[currentSlide].className = 'slide showing';
}
