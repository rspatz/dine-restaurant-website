// Carousel
var slidePosition = 1;
SlideShow(slidePosition);

// Forward/Back Controls
function plusSlides(n) {
  SlideShow((slidePosition += n));
}

//  Image Controls
function currentSlide(n) {
  SlideShow((slidePosition = n));
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName('family-container');

  if (n > slides.length) {
    slidePosition = 1;
  }

  if (n < 1) {
    slidePosition = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slidePosition - 1].style.display = 'flex';
}

// Booking Form
const minusButton = document.querySelector('#minus');
const plusButton = document.querySelector('#plus');

minusButton.addEventListener('click', function () {
  alert('clicked!');
});
