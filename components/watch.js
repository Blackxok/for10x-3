
// <!-- Initialize Swiper -->
var swiper = new Swiper('.mySwiper', {
    direction: "vertical",
    mousewheel: true,
    spaceBetween: 40,
    grabCursor: true,
    a11y: false,
    freeMode: true,
    speed: 11000,
    loop: true,
    slidesPerView: "auto",
    autoplay: {
        delay: 0.5,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: { /* when window >=0px - webflow mobile landscape/portriat */
            spaceBetween: 30,
        },
        480: { /* when window >=0px - webflow mobile landscape/portriat */
            spaceBetween: 30,
        },
        767: { /* when window >= 767px - webflow tablet */
            spaceBetween: 40,
        },
        992: { /* when window >= 988px - webflow desktop */
            spaceBetween: 40,
        }
    },
});

