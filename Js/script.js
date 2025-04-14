// Initialize Swiper
var swiper = new Swiper(".clientSwiper", {
  slidesPerView: 6,
  spaceBetween: 50,
  autoplay: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});


// testimonials swiper
var swiper = new Swiper(".testimoniSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});