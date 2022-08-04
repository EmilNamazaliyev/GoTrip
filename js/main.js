// carousel
const owl = $('.owl-carousel');
owl.owlCarousel({
        
    center: true,
    loop: true,
    margin: 30,
    startPositions: 0,
    items: 1,

    responsive: {
        540 : {
            items: 3,
            startPositions: 1,
        },

        1200: {
            items: 3,
            margin: 30
        }
    }
    

});

$('.slider__button--prev').click(function() {
    owl.trigger('prev.owl.carousel');
})

$('.slider__button--next').click(function() {
    owl.trigger('next.owl.carousel');
})

// Nav Button

const navBtn = document.querySelector('.nav__toggle');
const nav =document.querySelector('.nav');
const menuIcon = document.querySelector('.menu-icon');




navBtn.onclick = function() {
    nav.classList.toggle('nav--mobile');
    menuIcon.classList.toggle('menu-icon-active');
}