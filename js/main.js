const hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters

    loop: true,



    // Navigation arrows
    navigation: {
        nextEl: '.hotel-slider__button--prev',
        prevEl: '.hotel-slider__button--next',
    },
    effect: "flow",

    speed: 315,

});

const reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters

    loop: true,



    // Navigation arrows
    navigation: {
        nextEl: '.reviews-slider__button--next',
        prevEl: '.reviews-slider__button--prev',
    },
    effect: "flow",

    speed: 315,

});

var menuButton = document.querySelector('.menu-button')
menuButton.addEventListener("click", function() {
    console.log("click on button");
    document
        .querySelector(".navbar-bottom")
        .classList.toggle('navbar-bottom--visible');
});