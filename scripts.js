// Toggle Mobile Navbar
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Image Slider Functionality
let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll(".slide");
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  document.querySelector(".slides").style.transform = `translateX(-${
    slideIndex * 100
  }%)`;
}

// Automatic Slide Change every 3 seconds
setInterval(showSlides, 3000); // 3000 milliseconds = 3 seconds
