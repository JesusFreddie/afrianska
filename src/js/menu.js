export function toggleMenuNav(buttonElement) {
	const menuContainer = document.querySelector('#menu');

	buttonElement.addEventListener('click', (event) => {
		event.stopPropagation();
		menuContainer.classList.toggle('menu--open');
	});

	window.addEventListener('click', (event) => {
		if (!menuContainer.contains(event.target) && !buttonElement.contains(event.target)) {
      menuContainer.classList.remove('menu--open');
    }
	});
}