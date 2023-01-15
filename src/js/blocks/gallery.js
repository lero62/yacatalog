
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