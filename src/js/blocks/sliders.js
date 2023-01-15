// if (document.querySelector('.cards-swiper')) {
// 	new Swiper('.cards-swiper ', {

// 		loop: false,
// 		slidesPerView: 1,
// 		spaceBetween: 10,
// 		watchOverflow: true,
// 		watchSlidesVisibility: true,
// 		watchSlidesProgress: true,
// 		navigation: {
// 			nextEl: '.cards-swiper-next',
// 			prevEl: '.cards-swiper-prev',
// 		},
// 		breakpoints: {
// 			100: {
// 				slidesPerView: 2,
// 				spaceBetween: 6,
// 			},
// 			575: {
// 				slidesPerView: 2,
// 				spaceBetween: 10,
// 			},

// 			768: {
// 				slidesPerView: 3,


// 			},
// 			1025: {
// 				slidesPerView: 4,

// 			},
// 			1300: {
// 				slidesPerView: 1,

// 			},
// 		}

// 	})
// };


var breakpoint = window.matchMedia('(min-width: 992px)');
var categoriesSwiper;

var breakpointChecker = function () {

	if (breakpoint.matches === true) {
		if (categoriesSwiper !== undefined) categoriesSwiper.destroy(true, true);
		return;
	} else if (breakpoint.matches === false) {

		return enableSwiper();
	}
};


var enableSwiper = function () {
	categoriesSwiper = new Swiper('.categories-swiper', {
		loop: false,
		slidesPerView: 'auto',
		spaceBetween: 10,
		watchOverflow: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	});

};

breakpoint.addListener(breakpointChecker);
breakpointChecker();