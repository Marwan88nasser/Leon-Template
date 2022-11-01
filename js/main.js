// main menu effect
const menuHolder = document.querySelector("#menu-holder");
const navList = document.querySelector(".nav-list")

menuHolder.addEventListener("mousemove", () => {
  setTimeout(() => menuHolder.classList.add("open"))
  navList.style.display= "block"
  
});
menuHolder.addEventListener("mouseleave", () => {
  navList.style.display= "none"
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


// Set ScrollReveal Animation
ScrollReveal({ reset: true });

// special Heading Effect Animation
ScrollReveal().reveal('.special-heading', { duration: 3000, delay: 100, origin: 'left', distance: '200px' })

// Feature Effect Animation
ScrollReveal().reveal('.feat-one', { duration: 2000, delay: 100, origin: 'bottom', distance: '100px' })
ScrollReveal().reveal('.feat-two', { duration: 2000, delay: 250, origin: 'bottom', distance: '100px' })
ScrollReveal().reveal('.feat-three', { duration: 2000, delay: 350, origin: 'bottom', distance: '100px' })

// Services Effect Animation
ScrollReveal().reveal('.srv', { duration: 2000, delay: 0, origin: 'bottom', distance: '100px' })
ScrollReveal().reveal('.image-column', { duration: 2000, delay: 0, origin: 'right', distance: '20px' })

// Portfolio Effect Animation
ScrollReveal().reveal('.port-one', { duration: 2000, delay: 100, origin: 'left', distance: '70px' })
ScrollReveal().reveal('.port-two', { duration: 2000, delay: 250, origin: 'bottom', distance: '120px' })
ScrollReveal().reveal('.port-three', { duration: 2000, delay: 350, origin: 'right', distance: '12px' })

// About Effect Animation
ScrollReveal().reveal('.text-sr', { duration: 2000, delay: 0, origin: 'top', distance: '100px' })
ScrollReveal().reveal('.image-sr', { duration: 2000, delay: 0, origin: 'left', distance: '50px' })

// Contact Effect Animation
ScrollReveal().reveal('.contact-content', { duration: 2500, delay: 100, origin: 'bottom', distance: '120px' })