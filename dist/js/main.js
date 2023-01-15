

$(window).on('load', function () {
	$('body').removeClass('loaded');
});
$(function () {


	// Сatalog menu 

	$('#navbar-catalog').on('show.bs.offcanvas', function () {
		$('.header').addClass('_active')
		$('[data-bs-target="#navbar-catalog"]').addClass('_active')
		$('body').addClass('backdrop_catalog')
	})

	$('#navbar-catalog').on('hide.bs.offcanvas', function () {
		$('.header').removeClass('_active')
		$('[data-bs-target="#navbar-catalog"]').removeClass('_active')
		$('body').removeClass('backdrop_catalog')
		$('[data-catalog]').removeClass('_active');
		$('[data-catalog-target]').closest('li').removeClass('_active');


	})

	$('[data-catalog-target]').on('click', function () {
		let thisIndex = $(this).data('catalog-target');
		$('[data-catalog-target]').not($(this)).closest('li').removeClass('_active');
		$(this).closest('li').addClass('_active');

		$('[data-catalog]').removeClass('_active');
		$('[data-catalog="' + thisIndex + '"]').addClass('_active');

	})
	$('[data-catalog-back]').on('click', function () {
		$('[data-catalog]').removeClass('_active');
		$('[data-catalog-target]').closest('li').removeClass('_active');
	})


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
	// 
const selectboxHeads = document.querySelectorAll('[data-selectbox-head]');
const selectboxTitles = document.querySelectorAll('[data-selectbox-title]');
const selectboxListElements = document.querySelectorAll('.selectbox__drop ul li');


if (selectboxHeads.length > 0) {

	selectboxHeads.forEach(item => {
		item.addEventListener('click', selectboxOpen)
	});

	selectboxTitles.forEach(item => {
		const selectboxPlaceholder = item.dataset.selectboxTitle
		if (selectboxPlaceholder !== '' && !item.closest('[data-selectbox]').querySelector('li._selected')) {
			item.innerHTML = `<span class="selectbox__legend">${selectboxPlaceholder}</span>`;

		}

	});

	selectboxListElements.forEach(item => {
		item.addEventListener('click', selectboxChange)
		if (item.classList.contains('_selected')) {
			item.closest('[data-selectbox]').querySelector('[data-selectbox-title]').innerHTML = item.innerHTML
		}
	})


}

// Изменяем значение селекта
function selectboxChange() {
	const thisText = this.innerHTML;
	const selectbox = this.closest('[data-selectbox]');
	const selectboxText = selectbox.querySelector('[data-selectbox-title]');
	const selectboxListEls = selectbox.querySelectorAll('li');


	if (selectbox.classList.contains('_open')) {
		selectbox.classList.remove('_open')
	}

	selectbox.classList.add('_change')

	selectboxText.innerHTML = thisText;

	selectboxListEls.forEach(item => {
		item.classList.remove('_selected')
	})

	this.classList.add('_selected')
}

// Открытие селекта
function selectboxOpen() {
	const selectbox = this.closest('.selectbox');
	if (!selectbox.classList.contains('_open')) {
		selectboxClose();
		selectbox.classList.add('_open')
	} else {
		selectbox.classList.remove('_open')
	}
}

// Закрытие селекта
function selectboxClose() {
	document.querySelectorAll('.selectbox').forEach(item => item.classList.remove('_open'));
}

document.addEventListener('click', function (e) {
	if (!e.target.closest(".selectbox")) {
		selectboxClose()
	}
})




	// // offcanvass 
// ---------------------------------------------- 
const offcanvasLinks = document.querySelectorAll('._open-modal');
const offcanvasCloseIcon = document.querySelectorAll('._close-modal');
const body = document.querySelector('body');
const html = document.querySelector('html');
const lockPadding = document.querySelectorAll(".lock-padding");


let unlock = true;

const timeout = 200;

if (offcanvasLinks.length > 0) {
	for (let index = 0; index < offcanvasLinks.length; index++) {
		const offcanvasLink = offcanvasLinks[index];
		offcanvasLink.addEventListener("click", function (e) {
			let offcanvasName;
			if (this.hasAttribute('href')) {
				offcanvasName = offcanvasLink.getAttribute('href').replace('#', '');
			} else {
				offcanvasName = offcanvasLink.getAttribute('data-href').replace('#', '');
			}
			const curentoffcanvas = document.getElementById(offcanvasName);
			offcanvasOpen(curentoffcanvas);
			e.preventDefault();
		});
	}
}

if (offcanvasCloseIcon.length > 0) {
	for (let index = 0; index < offcanvasCloseIcon.length; index++) {
		const el = offcanvasCloseIcon[index];
		el.addEventListener('click', function (e) {
			offcanvasClose(el.closest('._modal'));
			e.preventDefault();
		});
	}
}

function offcanvasOpen(curentoffcanvas) {
	if (curentoffcanvas && unlock) {
		const offcanvasActive = document.querySelector('._modal._open');
		if (offcanvasActive) {
			offcanvasClose(offcanvasActive, false);
		} else {
			bodyLock();
		}
		curentoffcanvas.classList.add('_open');
		setTimeout(() => {
			curentoffcanvas.classList.add('_animate');
		}, 50)
		curentoffcanvas.addEventListener("click", function (e) {

			if (!e.target.closest('._modal__content')) {
				offcanvasClose(e.target.closest('._modal'));
			}
		});
	}
}

function offcanvasClose(offcanvasActive, doUnlock = true) {
	if (unlock) {
		offcanvasActive.classList.remove('_animate');

		setTimeout(() => {
			offcanvasActive.classList.remove('_open');
		}, 250)
		if (doUnlock) { // если открыто фиксированное меню то...
			bodyUnLock();
		}
	}
}

function bodyLock(classEl = 'lock') {
	const lockPaddingValue = window.innerWidth - document.querySelector('.main-wrapper').offsetWidth + 'px';

	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	html.classList.add(classEl);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnLock(classEl = 'lock') {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		html.classList.remove(classEl);
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const offcanvasActive = document.querySelector('._modal._open');
		offcanvasClose(offcanvasActive);
	}
});

(function () {
	// проверяем поддержку
	if (!Element.prototype.closest) {
		// реализуем
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function () {
	// проверяем поддержку
	if (!Element.prototype.matches) {
		// определяем свойство
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();
	// 
// Dynamic
// data-da=calss, index(last, first), media
// ---------------------------------------------- 

var originalPositions = [];
var daElements = document.querySelectorAll('[data-da]');
var daElementsArray = [];
var daMatchMedia = [];
//Заполняем массивы
if (daElements.length > 0) {
	var number = 0;
	for (var index = 0; index < daElements.length; index++) {
		var daElement = daElements[index];
		var daMove = daElement.getAttribute('data-da');
		if (daMove != '') {
			var daArray = daMove.split(',');
			var daPlace = daArray[1] ? daArray[1].trim() : 'last';
			var daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
			var daType = daArray[3] === 'min' ? daArray[3].trim() : 'max';
			var daDestination = document.querySelector('.' + daArray[0].trim())
			if (daArray.length > 0 && daDestination) {
				daElement.setAttribute('data-da-index', number);
				//Заполняем массив первоначальных позиций т
				originalPositions[number] = {
					"parent": daElement.parentNode,
					"index": indexInParent(daElement)
				};
				//Заполняем массив элементов 
				daElementsArray[number] = {
					"element": daElement,
					"destination": document.querySelector('.' + daArray[0].trim()),
					"place": daPlace,
					"breakpoint": daBreakpoint,
					"type": daType
				}
				number++;
			}
		}
	}
	dynamicAdaptSort(daElementsArray);

	//Создаем события в точке брейкпоинта
	for (var index = 0; index < daElementsArray.length; index++) {
		var el = daElementsArray[index];
		var daBreakpoint = el.breakpoint;
		var daType = el.type;

		daMatchMedia.push(window.matchMedia("(" + daType + "-width: " + daBreakpoint + "px)"));
		daMatchMedia[index].addListener(dynamicAdapt);
	}
}
//Основная функция
function dynamicAdapt(e) {
	for (var index = 0; index < daElementsArray.length; index++) {
		var el = daElementsArray[index];
		var daElement = el.element;
		var daDestination = el.destination;
		var daPlace = el.place;
		var daBreakpoint = el.breakpoint;
		var daClassname = "_dynamic_adapt_" + daBreakpoint;

		if (daMatchMedia[index].matches) {
			//Перебрасываем элементы
			if (!daElement.classList.contains(daClassname)) {
				var actualIndex = indexOfElements(daDestination)[daPlace];
				if (daPlace === 'first') {
					actualIndex = indexOfElements(daDestination)[0];
				} else if (daPlace === 'last') {
					actualIndex = indexOfElements(daDestination)[indexOfElements(daDestination).length];
				}
				daDestination.insertBefore(daElement, daDestination.children[actualIndex]);
				daElement.classList.add(daClassname);
			}
		} else {
			//Возвращаем на место
			if (daElement.classList.contains(daClassname)) {
				dynamicAdaptBack(daElement);
				daElement.classList.remove(daClassname);
			}
		}
	}

}

//Вызов основной функции
dynamicAdapt();

//Функция возврата на место
function dynamicAdaptBack(el) {
	var daIndex = el.getAttribute('data-da-index');
	var originalPlace = originalPositions[daIndex];
	var parentPlace = originalPlace['parent'];
	var indexPlace = originalPlace['index'];
	var actualIndex = indexOfElements(parentPlace, true)[indexPlace];
	parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
}
//Функция получения индекса внутри родителя
function indexInParent(el) {
	var children = Array.prototype.slice.call(el.parentNode.children);
	return children.indexOf(el);
}
//Функция получения массива индексов элементов внутри родителя 
function indexOfElements(parent, back) {
	var children = parent.children;
	var childrenArray = [];
	for (var i = 0; i < children.length; i++) {
		var childrenElement = children[i];
		if (back) {
			childrenArray.push(i);
		} else {
			//Исключая перенесенный элемент
			if (childrenElement.getAttribute('data-da') == null) {
				childrenArray.push(i);
			}
		}
	}
	return childrenArray;
}
//Сортировка объекта
function dynamicAdaptSort(arr) {
	arr.sort(function (a, b) {
		if (a.breakpoint > b.breakpoint) { return -1 } else { return 1 }
	});
	arr.sort(function (a, b) {
		if (a.place > b.place) { return 1 } else { return -1 }
	});
}

	$('[data-spoller]').on('click', function () {
	var el = $(this);

	el.next().slideToggle(200);
	el.toggleClass('_active');
	return false;
});
	// 
let _slideUp = (target, duration = 500) => {
	if(!target.classList.contains('_slide')){

		target.classList.add('_slide');
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = duration + 'ms';
		target.style.height = target.offsetHeight + 'px';
		target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		window.setTimeout(() => {
			target.hidden = true;
			target.style.removeProperty('height');
			target.style.removeProperty('padding-top');
			target.style.removeProperty('padding-bottom');
			target.style.removeProperty('margin-top');
			target.style.removeProperty('margin-bottom');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
}

let _slideDown = (target, duration = 500) => {
	if(!target.classList.contains('_slide')){
		target.classList.add('_slide')
		if (target.hidden)
			target.hidden = false;

		
		let height = target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		target.offsetHeight;
		target.style.transitionProperty = "height, margin, padding";
		target.style.transitionDuration = duration + 'ms';
		target.style.height = height + 'px';
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		window.setTimeout(() => {
			target.style.removeProperty('height');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
}
let _slideToggle = (target, duration = 500) => {
	if (target.hidden) {
		return _slideDown(target, duration);
	} else {
		return _slideUp(target, duration);
	}
	
}



	// 
//Пишем id формы 
// formId('form');

function formId(formId) {
	const form = document.getElementById(formId);
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);

		if (error === 0) {
			form.reset();
		} else {
			alert('Заполните обязательные поля');
		}
	}

	function formValidate(formReq) {
		let error = 0;
		formReq.querySelectorAll('._req');

		for (let i = 0; i < formReq.length; i++) {
			const input = formReq[i];
			formRemoveError(input);

			if (input.classList.contains('_email')) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			} else if (input.classList.contains('_tel')) {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			} else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
				formAddError(input);
				error++;
			} else if (input.getAttribute('type') === 'text' && input.value.length < 3) {
				formAddError(input);
				error++;
			}
		}

		return error;
	}
}

function formAddError(input) {
	input.parentElement.classList.add('_error');
	input.classList.add('_error');
}

function formRemoveError(input) {
	input.parentElement.classList.remove('_error');
	input.classList.remove('_error');
}

function emailTest(input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}


function telTest(e) {
	var el = e.target,
		clearVal = el.dataset.phoneClear,
		pattern = el.dataset.phonePattern,
		matrix_def = "+7(___) ___-__-__",
		matrix = pattern ? pattern : matrix_def,
		i = 0,
		def = matrix.replace(/\D/g, ""),
		val = e.target.value.replace(/\D/g, "");
	if (clearVal !== 'false' && e.type === 'blur') {
		if (val.length < matrix.match(/([\_\d])/g).length) {
			e.target.value = '';
			return;
		}
	}
	if (def.length >= val.length) val = def;

	e.target.value = matrix.replace(/./g, function (a) {
		return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
	});
}

var phone_inputs = document.querySelectorAll('._tel');
for (let elem of phone_inputs) {
	for (let ev of ['input', 'blur', 'focus']) {
		elem.addEventListener(ev, telTest);
	}
}
	// 
// <div data-gallery-items>
// 	<div data-gallery-item>
// 		<img src="" alt="" data-gallery-src="">
// 	</div>
// 	<div data-gallery-item>
// 		<img src="" alt="" data-gallery-src="">
// 	</div>
// </div>


const windowHtml = `
	<div class="gallery" data-gallery>
		<div class="gallery__close" data-gallery-close>
			X
		</div>
		<div class="gallery__wrap">
			<div class="gallery__swiper-wrap">
				<div class="gallery__swiper swiper" data-gallery-swiper>
					<div class="swiper-wrapper"></div>
				</div>
				<div class="swiper-button-prev gallery__prev"></div>
				<div class="swiper-button-next gallery__next"></div>
			</div>


			<div class="gallery__swiper-thumbs swiper" data-gallery-thumbs>
				<div class="swiper-wrapper"></div>
			</div>
		</div>
	</div>`;

const windowHtmlOne = `<div class="gallery" data-gallery>
		<div class="gallery__close" data-gallery-close>
			X
		</div>
		<div class="gallery__wrap">
			<div class="gallery__img" data-gallery-img></div>
		</div>
	</div>`;

const gallery = document.querySelectorAll('[data-gallery-item]');

gallery.forEach((gallery, index) => {
	gallery.addEventListener('click', function (e) {
		bodyLock();

		if (this.closest('[data-gallery-items]')) {
			let galleryItemsIndex;
			document.querySelector('.main-wrapper').insertAdjacentHTML('afterEnd', windowHtml);

			if (this.closest('.swiper-wrapper')) {
				galleryItemsIndex = [...this.closest('.swiper-wrapper').children].findIndex(el => el == e.currentTarget.closest('.swiper-slide'));
				console.log(galleryItemsIndex)
			} else {
				galleryItemsIndex = [...this.closest('[data-gallery-items]').children].findIndex(el => el == e.currentTarget);
			}

			let galleryItems = this.closest('[data-gallery-items]').querySelectorAll('[data-gallery-item]')

			for (i = 0; i < galleryItems.length; i++) {

				if (galleryItems[i].querySelector('[data-gallery-info]')) {
					document.querySelector('[data-gallery-swiper] .swiper-wrapper').innerHTML += `
						<div class="swiper-slide">
							<div class="${galleryItems[i].getAttribute('class')}">
								<img src="${galleryItems[i].querySelector('[data-gallery-src]').dataset.gallerySrc}" alt="" />	
								${galleryItems[i].querySelector('[data-gallery-info]').outerHTML}
							</div>
						</div>
					`;
				} else {
					document.querySelector('[data-gallery-swiper] .swiper-wrapper').innerHTML += `
						<div class="swiper-slide">
							<img src="${galleryItems[i].querySelector('[data-gallery-src]').dataset.gallerySrc}" alt="" />	
						</div>
					`;
				}

				document.querySelector('[data-gallery-thumbs] .swiper-wrapper').innerHTML += `
					<div class="swiper-slide" >
						<img src="${galleryItems[i].querySelector('[data-gallery-src]').getAttribute('src')}" alt="" />	
					</div>
				`;
			}


			// Thumbs
			const galleryThumbsSlider = new Swiper('.gallery__swiper-thumbs', {
				loop: false,
				slidesPerView: 'auto',
				spaceBetween: 10,
				centerInsufficientSlides: true,
				watchOverflow: true,
				watchSlidesProgress: true,
			})

			// Slider
			const gallerySlider = new Swiper('.gallery__swiper', {
				loop: false,
				slidesPerView: 1,
				spaceBetween: 20,
				watchOverflow: true,

				watchSlidesProgress: true,
				thumbs: {
					swiper: galleryThumbsSlider
				},
				navigation: {
					nextEl: '.gallery__next',
					prevEl: '.gallery__prev',
				},
			})

			gallerySlider.slideTo(galleryItemsIndex, 0, false); // Go to slide

		} else {
			document.querySelector('.main-wrapper').insertAdjacentHTML('afterEnd', windowHtmlOne);
			let gallerySrc = this.querySelector('[data-gallery-src]')

			document.querySelector('[data-gallery-img]').innerHTML = `<img src="${gallerySrc.dataset.gallerySrc}" alt = "" />`;
		}

		document.querySelector('[data-gallery-close]').addEventListener('click', function (e) {
			windowClose(this.closest('[data-gallery]'));

		})
	})

})


function windowClose(windowActive) {
	windowActive.remove();
	bodyUnLock();
}
});




