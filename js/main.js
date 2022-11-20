// main menu effect
const menuHolder = document.querySelector("#menu-holder");
const navList = document.querySelector(".nav-list")

menuHolder.addEventListener("mousemove", () => {
  setTimeout(() => menuHolder.classList.add("open"))
  navList.style.display = "block"

});
menuHolder.addEventListener("mouseleave", () => {
  navList.style.display = "none"
  setTimeout(() => menuHolder.classList.remove("open"))

});

// Set Scroll Into Target Section 
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    const targetSection = document.querySelector(`#${e.target.dataset.section}`);
    targetSection.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
    menuHolder.classList.remove("open")
  })
})

// Fixed Navbar on Scroll
const navbar = document.querySelector("#main-nav");
window.addEventListener("scroll", () => window.scrollY >= 100 ? navbar.classList.add("active") : navbar.classList.remove("active"))

// scroll to top btn 
const upBtn = document.getElementById("up-btn");
window.addEventListener("scroll", () => window.scrollY >= 300 ? upBtn.classList.add("show") : upBtn.classList.remove("show"));
upBtn.addEventListener("click", () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" }))

// Initialize Swiper Slider
// Set Landing Page Slider
const swiperElement = document.querySelector(".swiper")
const swiper = new Swiper(swiperElement, {
  // Optional parameters
  loop: true,
  centeredSlides: true,
  parallax: true,
  speed: 1400,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Start set config of AOS Library
AOS.init();