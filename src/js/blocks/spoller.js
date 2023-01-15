$('[data-spoller]').on('click', function () {
	var el = $(this);

	el.next().slideToggle(200);
	el.toggleClass('_active');
	return false;
});