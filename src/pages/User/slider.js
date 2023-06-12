var slideIndex = 0;
var slides = document.querySelectorAll(".sub-content2 img");
var maxSlides = slides.length - 1;

function showSlide() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

showSlide();

function nextSlide() {
  slideIndex++;
  if (slideIndex > maxSlides) {
    slideIndex = 0;
  }
  showSlide();
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = maxSlides;
  }
  showSlide();
}
