// swiper
var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 5,
    freeMode: true,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});