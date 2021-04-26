export function swiperCall () {
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

