import { openPopap } from "../popap";


function validateEmail(email) {
  const schema = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return schema.test(email);
}

const responseStatusText = {
	ok: 'Отправка прошла успешно',
	on_validate: 'Вы не запонили все поля',
	on_validate_email: 'Некорректный email',
	error_500: 'Ошибка сети. Пожалуйста, попробуйте позже',
};

async function submitFrom(event) {
	event.preventDefault();
	const errorFormMessage = document.querySelector("#modal__error-form-message");
	
	errorFormMessage.textContent = '';

	const formData = new FormData(event.target);
	
	const fullName = formData.get('full-name');
	const email = formData.get('email');
	const message = formData.get('message');

	if (!fullName || !email || !message) {
		errorFormMessage.textContent = responseStatusText.on_validate;
		return;
	}

	if (!validateEmail(email)) {
		errorFormMessage.textContent = responseStatusText.on_validate_email;
		return;
	}

	errorFormMessage.textContent = '';

	try {
		const response = await fetch('api', {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				fullName,
				email,
				message
			})
		});

		if (response.ok) {
			openPopap(responseStatusText.ok);
		} else {
			errorFormMessage.textContent = responseStatusText.error_500;
		}

	} catch {
		errorFormMessage.textContent = responseStatusText.error_500;
	}
}

export function submitModalForm(formElement) {
	formElement.addEventListener('submit', submitFrom);
}