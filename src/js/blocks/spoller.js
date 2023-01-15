
const spollers = document.querySelectorAll('[data-spoller]')
if(spollers.length > 0) {
	for(var i = 0; i < spollers.length; i++) {
		const spoller = spollers[i]

		if (!spoller.classList.contains('_active')) {
			spoller.nextElementSibling.hidden = true;
		} else {
			spoller.nextElementSibling.hidden = false;
		}
		spoller.addEventListener('click', function(e){
			const el = e.target;
			if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
				const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');
				const spollersBlock = spollerTitle.closest('[data-spollers]');
				const oneSpoller = spollersBlock.hasAttribute('data-one-spollers') ? true : false;

				if (!spollersBlock.querySelectorAll('._slide').length) {
					if(oneSpoller && !spollerTitle.classList.contains('_active')) {
						hideSpollersBody(spollersBlock);
					}
					spollerTitle.classList.toggle('_active');
					_slideToggle(spollerTitle.nextElementSibling, 200)
					
				}
				e.preventDefault();
			}
		})
	}

	function hideSpollersBody(spollersBlock) {
		const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._active');
		if (spollerActiveTitle) {
			spollerActiveTitle.classList.remove('_active');
			_slideUp(spollerActiveTitle.nextElementSibling, 300)
		}
	}
}