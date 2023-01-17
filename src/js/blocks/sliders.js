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

if (document.querySelector('.categories-swiper')) {
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
}

if (document.querySelector('.card-swiper')) {
	const cardThumbsSwiper = new Swiper('.card-nav-swiper', {
		slidesPerView: 4,
		spaceBetween: 5,
		loop: false,
		direction: "vertical",
		slideToClickedSlide: true,

		watchOverflow: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		breakpoints: {
			100: {
				direction: "horizontal",
				slidesPerView: 4,
			},

			576: {
				direction: "horizontal",
				slidesPerView: 3,
			},

			768: {
				direction: "horizontal",
				slidesPerView: 4,
			},


			1200: {
				direction: "vertical",
				slidesPerView: 4,

			},
		}
	});

	const cardSwiper = new Swiper('.card-swiper', {
		slidesPerView: 1,
		loop: false,
		effect: 'fade',
		watchOverflow: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		fadeEffect: {
			crossFade: true
		},
		thumbs: {
			swiper: cardThumbsSwiper
		},

	});
}
