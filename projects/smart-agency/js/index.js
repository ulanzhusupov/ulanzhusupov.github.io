$('.review-carousel').slick({
  dots: true,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 2
    }
  }]
});

$('.header__nav__button--open').click(() => {
  $('.header__nav__menu').addClass('header__nav__menu--open');
});

$('.header__nav__button--close').click(() => {
  $('.header__nav__menu').removeClass('header__nav__menu--open');
});