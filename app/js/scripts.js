$(document).ready(function(){
    document.createElement( "picture" );

    $('.gallery__slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: '<button type = "button" class = "slick-prev" aria-label="Назад">Назад</button>',
        nextArrow: '<button type = "button" class = "slick-next" aria-label="Вперёд">Вперёд</button>'
    });

    $('.product-item__photo-list').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        adaptiveHeight: true,
        dots: false,
        arrows: false,
        centerPadding: '10px'
    });

    var popup = new Popup({
        'popup': '.modal-popup',
        'closeModal': '.modal-popup__close',
        'overlay': '.modal-overlay'
    });

    $('.user-list__link').on('click', function () {
        popup.open($('.modal-login'));
    });

    $('.footer__search-link').on('click', function () {
        popup.open($('.modal-map'));
    });
});