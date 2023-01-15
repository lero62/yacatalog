
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