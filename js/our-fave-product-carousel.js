(function () {

const product = JSON.parse(localStorage.product);
const slides = [
  `<div><img src ="${product.imageB}" alt = "${product.name}"></div>`,
  `<div><img src ="${product.imageB}" alt = "${product.name}"></div>`,
  `<div><img src ="${product.imageB}" alt = "${product.name}"></div>`,
  `<div><img src ="${product.imageB}" alt = "${product.name}"></div>`,
];


let currentSlide = 0;

let smallimg = document.querySelectorAll(".main-block-small-img-box-img");
Array.prototype.slice.call(smallimg);

function showCurrentSlide() {
  const slideContainer = document.querySelector(".main-block-big-img");
  slideContainer.innerHTML = slides[currentSlide];
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showCurrentSlide();

  for(let i=0; i < smallimg.length; i++){
  smallimg[i].classList.remove("active-arrow");
  smallimg[currentSlide].classList.add("active-arrow");
  }
  

}
console.log(smallimg);

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showCurrentSlide();
  for(let k=0; k < smallimg.length; k++){
    smallimg[k].classList.remove("active-arrow");
    smallimg[currentSlide].classList.add("active-arrow");
    }
  
}

document.querySelector(".arrow-next").addEventListener('click', nextSlide);
document.querySelector(".arrow-prev").addEventListener('click', prevSlide);

showCurrentSlide();




}) ();