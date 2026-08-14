const ClinicMasterCarousel = function () {
  const handleTestimonialSwiper1 = () => {
    const swiperEl = document.querySelector(".testimonial-swiper1");
    if (!swiperEl) return;

    new Swiper(".testimonial-swiper1", {
      loop: true,
      spaceBetween: 20,
      slidesPerView: 1,
      navigation: {
        nextEl: ".swiper1-button-next",
        prevEl: ".swiper1-button-prev",
      },
    });
  };

  const handleTestimonialSwiper4 = () => {
    const swiperEl = document.querySelector(".testimonial-swiper4");
    if (!swiperEl) return;

    const testimonialThumbSwiper4 = new Swiper(".testimonial-thumb-swiper4", {
      slidesPerView: 1,
      effect: "fade",
      centeredSlides: true,
    });

    new Swiper(".testimonial-swiper4", {
      loop: true,
      spaceBetween: 20,
      slidesPerView: 1,
      centeredSlides: true,
      autoplay: {
        delay: 3000,
      },
      thumbs: {
        swiper: testimonialThumbSwiper4,
      },
      navigation: {
        nextEl: ".swiper4-button-next",
        prevEl: ".swiper4-button-prev",
      },
    });
  };

  const handleClientSwiper2 = () => {
    const swiperEl = document.querySelector(".client-swiper2");
    if (!swiperEl) return;

    new Swiper(".client-swiper2", {
      loop: true,
      slidesPerView: 4,
      spaceBetween: 30,
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        767: {
          slidesPerView: 4,
        },
        575: {
          slidesPerView: 3,
        },
        320: {
          slidesPerView: 2,
        },
      },
    });
  };

  const BlogSlideshowSwiper = () => {
    const swiperEl = document.querySelector(".blog-slideshow");
    if (!swiperEl) return;

    new Swiper(".blog-slideshow", {
      loop: true,
      spaceBetween: 0,
      slidesPerView: "auto",
      speed: 1500,
      autoplay: {
        delay: 2000,
      },
      pagination: {
        el: ".swiper-pagination-two",
        clickable: true,
      },
    });
  };

  if (
    document.querySelector(".galley-thumb-swiper") &&
    document.querySelector(".galley-swiper")
  ) {
    const swiperThumbs = new Swiper(".galley-thumb-swiper", {
      loop: false,
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });

    new Swiper(".galley-swiper", {
      loop: true,
      spaceBetween: 10,
      thumbs: {
        swiper: swiperThumbs,
      },
    });
  }

  const handleTestimonialSwiper = function () {
    const wrapper = document.querySelector(".testimonial-swiper-wrapper");
    if (!wrapper) return;

    const testimonialThumbs = new Swiper(".testimonial-thumbs", {
      speed: 1500,
      parallax: true,
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      autoplay: {
        delay: 3000,
      },
    });

    new Swiper(".testimonial-swiper", {
      speed: 1500,
      parallax: true,
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      autoplay: {
        delay: 3000,
      },
      navigation: {
        nextEl: ".testimonial-button-next",
        prevEl: ".testimonial-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      thumbs: {
        swiper: testimonialThumbs,
      },
    });
  };

  const handleServiceSwiper = () => {
    const swiperEl = document.querySelector(".service-swiper");
    if (!swiperEl) return;

    new Swiper(".service-swiper", {
      speed: 1500,
      parallax: true,
      slidesPerView: 1,
      spaceBetween: 35,
      loop: true,
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        567: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        767: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1025: {
          slidesPerView: 4,
          spaceBetween: 35,
        },
      },
    });
  };

  const handleTestimonialSwiper3 = () => {
    const swiperEl = document.querySelector(".testimonial-swiper3");
    if (!swiperEl) return;

    new Swiper(".testimonial-swiper3", {
      loop: true,
      spaceBetween: 0,
      slidesPerView: 1,
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: ".testimonial-pagination-swiper3",
        clickable: true,
      },
    });
  };
  
  const handleTestimonialSwiper7 = function () {
    const swiperContainer = document.querySelector(".testimonial-swiper7");

    if (swiperContainer) {
      const testimonialSwiper7 = new Swiper(".testimonial-swiper7", {
        loop: true,
        spaceBetween: 0,
        slidesPerView: 1,
        autoplay: {
          delay: 3000,
        },
        pagination: {
          el: ".testimonial-pagination-swiper7",
          clickable: true,
        },
      });
    }
  };

  const handlePortfolioSlider = () => {
    const sliderEl = document.querySelector(".portfolio-slider");

    if (sliderEl) {
      const swiper = new Swiper(".portfolio-slider", {
        speed: 1500,
        slidesPerView: 6.5,
        spaceBetween: 0,
        loop: true,
        autoplay: {
          delay: 2000,
        },
        breakpoints: {
          1600: {
            slidesPerView: 6.5,
          },
          1480: {
            slidesPerView: 7,
          },
          768: {
            slidesPerView: 4,
          },
          320: {
            slidesPerView: 2,
          },
        },
      });
    }
  };

  return {
    load() {
      handleTestimonialSwiper();
      handleTestimonialSwiper1();
      handleTestimonialSwiper3();
      handleTestimonialSwiper4();
      handleTestimonialSwiper7();
      handleClientSwiper2();
      BlogSlideshowSwiper();
      handleServiceSwiper();
      handlePortfolioSlider();
    },
  };
};

window.addEventListener("load", function () {
  ClinicMasterCarousel().load();
});
