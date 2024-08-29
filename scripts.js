const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

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

setInterval(showSlides, 3000);

const scrollUp = document.getElementById("scrollUp");

window.onscroll = function () {
  if (window.scrollY > 200) {
    scrollUp.classList.add("show");
  } else {
    scrollUp.classList.remove("show");
  }
};

scrollUp.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
