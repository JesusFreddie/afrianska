const popap = document.querySelector('#success-from-popap');

export function openPopap(text) {
	popap.classList.add("success-from-popap--open");
	popap.textContent = text;

	setTimeout(() => popap.classList.remove('success-from-popap--open'), 3000);
}