// Маска для телефона
jQuery(($) => {
    $(".js-phone").mask("+7 (999) 999-99-99");
});

// Отображение видов техники и её скрытие
$(() => {
    const count = $('.technic__block').length;
    let start = 8;
    const show = count - start;

    $('.technic__block').addClass('technic__block_none');
    $('.technic__block:lt('+start+')').removeClass('technic__block_none');

    if($('.js-click')) {
        $('.js-click').click(() => {
            start = (start + show <= count) 
            ? start + show 
            : count;

            $('.technic__block:lt('+start+')').removeClass('technic__block_none');

            if($('.technic__block:not(.technic__block_none)').length === count ) {
                $('.js-click').addClass('buttom__plus_hide');
                $('.js-hide').removeClass('buttom__plus_hide');
            };
        })
    }

    if($('.js-hide')) {
        $('.js-hide').click(() => {
            let start = 8;
            $('.technic__block').addClass('technic__block_none');
            $('.technic__block:lt('+start+')').removeClass('technic__block_none');

            if($('.technic__block:not(.technic__block_none)').length !== count ) {
                $('.js-click').removeClass('buttom__plus_hide');
                $('.js-hide').addClass('buttom__plus_hide');
            }
        })
    }    
});

// Открытие и закрытие по меню-бургер
$(() => {
    if($('.header__burger')) {
        $('.header__burger').click(() => {
            $('.header__burger').removeClass('header__burger_active');
            $('.header__close').addClass('header__close_active');
            $('.header__list ').addClass('header__list_active');
            $('.body').addClass('body_look');
        })

        $('.header__close').click(() => {
            $('.header__close').removeClass('header__close_active');
            $('.header__burger').addClass('header__burger_active');
            $('.header__list ').removeClass('header__list_active');
            $('.body').removeClass('body_look');
        })

        $('.header__title').click(() => {
            $('.header__close').removeClass('header__close_active');
            $('.header__burger').addClass('header__burger_active');
            $('.header__list ').removeClass('header__list_active');
            $('.body').removeClass('body_look');
        })
    }
})