

$(window).on('load', function () {
	$('body').removeClass('loaded');
});
$(function () {

	$('#navbar-catalog').on('show.bs.offcanvas', function () {
		$('.header').addClass('_active')
		$('[data-bs-target="#navbar-catalog"]').addClass('_active')
		$('body').addClass('backdrop_catalog')
	})

	$('#navbar-catalog').on('hide.bs.offcanvas', function () {
		$('.header').removeClass('_active')
		$('[data-bs-target="#navbar-catalog"]').removeClass('_active')
		$('body').removeClass('backdrop_catalog')
	})
	@@include('./blocks/sliders.js')
	// @@include('./blocks/selectbox.js')
	// @@include('./blocks/offcanvas.js')
	// @@include('./blocks/dynamic.js')
	// @@include('./blocks/spoller.js')
	// @@include('./blocks/functions.js')
	// @@include('./blocks/formValidate.js')
	// @@include('./blocks/gallery.js')
});




