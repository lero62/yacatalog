


$(function () {


	var $range = $(".js-range-slider");
	var $inputFrom = $(".js-input-from");
	var $inputTo = $(".js-input-to");
	var instance;
	var min = 0;
	var max = 100000;
	var from = 0;
	var to = 0;

	$range.ionRangeSlider({
		skin: "round",
		type: "double",
		min: min,
		max: max,
		from: 10000,
		to: 50000,
		onStart: updateInputs,
		onChange: updateInputs,
		onFinish: updateInputs,
		hide_min_max: true,
		hide_from_to: true,
	});
	instance = $range.data("ionRangeSlider");

	function updateInputs(data) {
		from = data.from;
		to = data.to;

		$inputFrom.prop("value", from);
		$inputTo.prop("value", to);
	}

	$inputFrom.on("input", function () {
		var val = $(this).prop("value");

		// validate
		if (val < min) {
			val = min;
		} else if (val > to) {
			val = to;
		}

		instance.update({
			from: val
		});

		$(this).prop("value", val);

	});

	$inputTo.on("input", function () {
		var val = $(this).prop("value");

		// validate
		if (val < from) {
			val = from;
		} else if (val > max) {
			val = max;
		}

		instance.update({
			to: val
		});

		$(this).prop("value", val);
	});

	// Cabinet menu 


	$('._toggle-cw-menu').on('click', function () {
		$('._cw-menu').slideToggle(200);

	})
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
	@@include('./blocks/dynamic.js')
	@@include('./blocks/spoller.js')
	// @@include('./blocks/functions.js')
	// @@include('./blocks/formValidate.js')
	// @@include('./blocks/gallery.js')
});




