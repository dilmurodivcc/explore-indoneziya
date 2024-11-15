AOS.init();
AOS.init({
  duration: 1000,
});

const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");
const indicators = document.querySelectorAll(".indicator");

let currentSlide = 0;
let slidesToShow = 3;
let slideWidth = 100 / slidesToShow;
let totalSlides = slides.length;
let maxSlideIndex = totalSlides - slidesToShow;

function setResponsiveSlides() {
  if (window.innerWidth <= 768) {
    slidesToShow = 1;
    slideWidth = 100;
  } else {
    slidesToShow = 3;
    slideWidth = 300 / slidesToShow;
  }
  maxSlideIndex = totalSlides - slidesToShow;
  updateCarousel();
}

function updateCarousel() {
  track.style.transform = `translateX(-${currentSlide * slideWidth}%)`;

  // Update indicators
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

window.addEventListener("resize", setResponsiveSlides);

setResponsiveSlides();

const customCursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
  const smoke = document.createElement("div");
  smoke.classList.add("tutun");

  smoke.style.left = `${e.pageX}px`;
  smoke.style.top = `${e.pageY}px`;

  document.body.appendChild(smoke);

  setTimeout(() => {
    smoke.style.opacity = "0";
  }, 100);

  setTimeout(() => {
    smoke.remove();
  }, 600);
});
document.getElementById("backToTop").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const menu = document.querySelector(".menu");
const menuMobile = document.querySelector(".menu-mobile");
const close = document.querySelector(".close");

menu.addEventListener("click", () => {
  menuMobile.classList.add("active");
  document.body.style.overflow = "hidden";
});

close.addEventListener("click", () => {
  menuMobile.classList.remove("active");
  document.body.style.overflowY = "auto";
});
















