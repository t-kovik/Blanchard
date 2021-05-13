
const burger = $('.header__btn-burger');

function swiperCall () {
  const swiper = new Swiper('.swiper-container', {
    speed: 2500,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  })


  const swiperGallery = new Swiper('.swiper-gallery', {
    slidesPerColumnFill: 'row',
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },

    keyboard: {
      enabled: true,
    },

    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
      slideLabelMessage: 'Слайд {{index}} из {{slidesLength}}'
    },

    breakpoints: {
      1600: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        slidesPerColumn: 2,
        spaceBetween: 50,
      },
      475: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
      },
      0: {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        spaceBetween: 15,
      }
    }

  })

  if ($(window).width() > 577) {
    const SwiperEditions = new Swiper('.swiper-editions', {
      spaceBetween: 50,
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
      },
      breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        769: {
          spaceBetween: 50,
          slidesPerView: 2,
        },
        577: {
          spaceBetween: 34,
          slidesPerView: 2,
        }
      }

    })
  }


  const swiperPartners = new Swiper('.swiper-partners', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      577: {
        spaceBetween: 34,
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      }
    }

  })

  if ($(window).width() < 577) {
    const mobileSwiper = new Swiper('.swiper-container--mob', {
      spaceBetween: 15,
      pagination: {
        el: '.swiper-pagination',
      },
    })
  }
}

//Функция для бургер-меню
const toggleBurger = () => {

  const closeBtn = $('.header__nav-close');

  function toggleBtns(firstBtn, secondBtn, overflow) {
    firstBtn.hide();
    secondBtn.show();
    $('.header__menu').toggle();
    $('body').css('overflow-y', overflow);
    $('html').css('overflow-y', overflow);
  }

  burger.click(function () {
    toggleBtns(burger, closeBtn, 'hidden');
  })

  closeBtn.click(function () {
    toggleBtns(closeBtn, burger, 'auto');
  })
}
//

//Функция переключения видимости поиска
const switchSearch = () => {
  const toggleSearch = (ev) => {
    ev.preventDefault();
    $('.header__form-input').toggleClass('visible');

    if ($(window).width() < 769) {
      burger.toggle();
      $('.header__nav-list').toggle();
      $('.header__logo').toggle();
    }
    closeSearch.toggleClass('visible');
  }

  const btnSearch = $('.header__form-btn');
  const closeSearch = $('.header__form-close');

  btnSearch.click(toggleSearch);
  closeSearch.click(toggleSearch)
}
//

//Функция открытия дропдауна из нижнего header
const toggleDropdown = () => {
  const item = $('.header__list-item');


  item.click(function () {
    const dropdown = $(this).find('ul');
    $('.dropdown').removeClass('is-active');

    if(dropdown.hasClass('is-active')) {
      dropdown.removeClass('is-active');
    } else {
      dropdown.addClass('is-active');
    }

    $(document).click(function (ev) {
      if(!item.is(ev.target) && item.has(ev.target).length === 0) {
        $('.dropdown').removeClass('is-active');
      }
    })
  })
}
//

$('.dropdown').each(function(index,el) {
  new SimpleBar(el, {scrollbarMaxSize: 28})
});

//Перенос поиска в верхнюю часть header
if ($('.header-bottom').css('visibility', 'hidden')) {
  $('.header__form').appendTo('.header__container')
}
//

//Подключение choices
const initChoices = () => {
  const select = document.querySelector('.gallery__select')
  const choices = new Choices(select, {
    itemSelectText: '',
    searchEnabled: false,
    shouldSort: false,
  });

  choices.showDropdown();

  let ariaLabel = select.getAttribute('aria-label');
  select.closest('.choices').setAttribute('aria-label', ariaLabel)
}
//

//Модальное окно
const modalCall = () => {
  const modal = $('.modal');

  const closeModal = event => {
    const target = event.target;

    if (target.closest('.modal__close') ||
      target.classList.contains('modal') ||
      event.code === 'Escape') {
      modal.removeClass('show');
    }
    $('body').css('overflow-y', 'auto');
    $('html').css('overflow-y', 'auto');
  }

  $('.galleryJs').click(function () {
    $('.modal').addClass('show');
    const src = $(this).find('img')[0].getAttribute('src');
    $('.modal__img').attr('src', src);
    $('body').css('overflow-y', 'hidden');
    $('html').css('overflow-y', 'hidden');
  })

  modal.click(closeModal);
}
//

//Перенос заметки в секции "gallery"
if ($(window).width() < 769) {
  $('.gallery__note-mobile').appendTo('.gallery__column-js');
}
//

//Подключение аккордеона
$('.accordion').accordion({
  active: true,
  collapsible: true,
  heightStyle: 'content',
  header: '> .accordion-item > .accordion-header',
});

$( '.accordion__main' ).accordion( "option", "active", 0 );
//

//Функция переключения табов
const tabsSwitch = (tab, tabContent) => {
  $(tab).on('click', function () {
    $(tab).removeClass("active");
    $(this).toggleClass("active").fadeTo();
    let activeTabContent = $(this).attr("data-target");
    $(tabContent).removeClass("visible");
    $(activeTabContent).toggleClass("visible");
  });
}
//

//Функция для показа всех событий в секции "events"
const showEvents = () => {
  const eventCard = $('.events__card');

  $(".events__btn").click(function () {
    eventCard.removeClass('is-hidden');
    eventCard.removeClass('is-hidden--mobile');
    $(".events__btn-wrapper").addClass('is-hidden');
  })
}
//

//Функция выбора категории
const chooseCategory = () => {
  const label = $('.editions__label');
  const list = $('.editions__list');

  if ($(window).width() < 577) {
    $('.editions__category-btn').click(function () {
      if (list.hasClass('is-open')) {
        $('.editions__arrow').addClass('is-rotate');
        label.removeClass('js-hidden');
        list.removeClass('is-open')
      } else {
        $('.editions__arrow').removeClass('is-rotate');
        $('input:checkbox:not(:checked)').each(function () {
          $(this).next().addClass('js-hidden')
        });
        list.addClass('is-open')
      }
    });
  }
}
//

// Функция маскирования и валидации формы
const validateForm = () => {
  const selector = document.querySelector("input[type='tel']");
  let im = new Inputmask("+7 (999) 999-99-99");
  im.mask(selector);

  new JustValidate('.contacts__form', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 11,
      },
      phone: {
        required: true,
        function: () => {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
        },
      },
    },
    submitHandler(form) {
      let th = $(form);

      $.ajax({
        type: 'POST',
        url: 'mail.php',
        data: th.serialize(),
      }).done(() => {
        console.log('ok');
        th.trigger('reset')
      });
      return false;

    },
    messages: {
      name: 'Как вас зовут?',
      phone: 'Укажите ваш телефон',
    },
  })
}
//

//Подключения Яндекс-карт
ymaps.ready(init);

function init() {
  const myMap = new ymaps.Map("map", {
    center: [55.761284, 37.625208],
    zoom: 15,
    controls: []
  });

  const myPlacemark = new ymaps.Placemark([55.761254, 37.605795], {}, {
    iconLayout: 'default#image',
    iconImageHref: './images/map-pin.svg',
    iconImageSize: [20, 20],
  });
  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable(['scrollZoom']);
  myMap.controls.add('zoomControl');
  myMap.controls.add('rulerControl', {});
  myMap.controls.add('geolocationControl');
}

//

//Перенос карты в мобильном разрешении
if ($(window).width() < 577) {
  $('.contacts__map--mobile').appendTo('.contacts__wrapper');
}
//

swiperCall();
toggleBurger();
switchSearch();
toggleDropdown();
initChoices();
modalCall();
tabsSwitch('.artist', '.artist-info');
tabsSwitch('.catalog__country', '.country-artists');
showEvents();
chooseCategory();
validateForm();