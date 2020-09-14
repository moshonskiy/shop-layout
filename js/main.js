$(function () {
  $(".banner-section__slider").slick({
    dots: true,
    prevArrow:
      '<button class="banner-section__slider-btn banner-section__slider-btn-prev"><img src="./img/banner-arrow-left.svg" alt="arrow left" /></button>',
    nextArrow:
      '<button class="banner-section__slider-btn banner-section__slider-btn-next"><img src="./img/banner-arrow-right.svg" alt="arrow right" /></button>',
    responsive: [
      {
        breakpoint: 969,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  $(".product-slider").slick({
    prevArrow:
      '<button class="product-slider__btn product-slider__btn-prev"><img src="./img/product-slider-arrow-left.svg" alt="product slider arrow left button"/></button>',
    nextArrow:
      '<button class="product-slider__btn product-slider__btn-next"><img src="./img/product-slider-arrow-right.svg" alt="product slider arrow left button"/></button>',
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1301,
        settings: {
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 1201,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 870,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 590,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".tab").on("click", function (e) {
    e.preventDefault();

    $($(this).siblings()).removeClass("tab--active");
    $(this).addClass("tab--active");

    $($(this).attr("href"))
      .parent()
      .find("div")
      .siblings()
      .removeClass("tabs-content--active");
    $($(this).attr("href")).addClass("tabs-content--active");

    $(".product-slider").slick("setPosition");
  });

  $(".product-item__favorite").on("click", function () {
    $(this).toggleClass("product-item__favorite--active");
  });

  $(".pagination-list__item").on("click", function (e) {
    e.preventDefault();

    $($(this).siblings()).removeClass("active");

    $(this).addClass("active");
  });

  $(".filter-style").styler();

  $(".filter-item-drop, .filter__extra").on("click", function () {
    $(this).toggleClass("filter-item-drop--active");

    $(this).next().slideToggle(150);
  });

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 100000,
    max: 500000,
    grid: false,
  });

  $(".catalog__filter-btn-grid").on("click", function () {
    $(this).addClass("catalog__filter-button--active");
    $(".catalog__filter-btn-line").removeClass(
      "catalog__filter-button--active"
    );
    $(".product-item__content-wrapper").removeClass(
      "product-item__content-wrapper--line"
    );
  });

  $(".catalog__filter-btn-line").on("click", function () {
    $(this).addClass("catalog__filter-button--active");
    $(".catalog__filter-btn-grid").removeClass(
      "catalog__filter-button--active"
    );
    $(".product-item__content-wrapper").addClass(
      "product-item__content-wrapper--line"
    );
  });

  $(".product-card__icon-favorite").on("click", function () {
    $(this).toggleClass("product-card__icon-favorite--active");
  });

  $(".rate-yo").rateYo({
    normalFill: "#c4c4c4",
    ratedFill: "#1c62cd",
    spacing: "6px",
  });

  $(".menu__btn").on("click", function () {
    $(".menu-mobile__list").toggleClass("menu-mobile__list--active");
  });

  $(".menu__filter-btn").on("click", function () {
    $(".menu-mobile__filter").toggleClass("menu-mobile__filter--active");
  });

  $(".menu-mobile__filter-top-btn").on("click", function () {
    $(".menu-mobile__filter").removeClass("menu-mobile__filter--active");
  });

  $(".footer__title-drop").on("click", function () {
    $(this).siblings(".footer-list").slideToggle();
    $(this).toggleClass("footer__title-drop--active");
  });
});
