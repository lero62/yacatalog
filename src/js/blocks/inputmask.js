// inputMask 
// ---------------------------------------------- 

const inputTel = document.querySelectorAll('input.tel');

if(inputTel.length>0){
	inputTel.forEach(function(item) {
		Inputmask("+7(999) 999 9999", {
			//"placeholder": '',
			clearIncomplete: true,
			showMaskOnHover: false,
			clearMaskOnLostFocus: true,

		}).mask(item);

	});
}
// ---------------------------------------------- 