

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


	@@include('./blocks/sliders.js')
	// @@include('./blocks/selectbox.js')
	// @@include('./blocks/offcanvas.js')
	// @@include('./blocks/dynamic.js')
	@@include('./blocks/spoller.js')
	// @@include('./blocks/functions.js')
	// @@include('./blocks/formValidate.js')
	// @@include('./blocks/gallery.js')
});




