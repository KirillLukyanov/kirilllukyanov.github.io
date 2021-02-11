$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 800,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/arrow_left.svg" alt="Назад"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/slider/arrow_right.svg" alt="Вперед"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    });
});