AOS.init();
AOS.init({
  duration: 1800,
});

const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");
const indicators = document.querySelectorAll(".indicator");

let currentSlide = 0;
const slidesToShow = 3;
const totalSlides = slides.length;
const maxSlideIndex = totalSlides - slidesToShow;

function updateCarousel() {
  track.style.transform = `translateX(-${
    currentSlide * (100 / slidesToShow)
  }%)`;
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === currentSlide);
  });
  prevButton.classList.toggle("inactive", currentSlide === 0);
  nextButton.classList.toggle("inactive", currentSlide === maxSlideIndex);
}
nextButton.addEventListener("click", () => {
  if (currentSlide < maxSlideIndex) {
    currentSlide++;
    updateCarousel();
  }
});
prevButton.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateCarousel();
  }
});
indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    currentSlide = index;
    updateCarousel();
  });
});
updateCarousel();
