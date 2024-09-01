const modalElement = document.querySelector("#modal");
const modal = document.querySelector("#modal-from");

function openModal() {
  modalElement.classList.add("modal--open");
  document.body.classList.add("body-disabled");
  modal.focus();
}

function closeModal() {
  modalElement.classList.remove("modal--open");
  document.body.classList.remove("body-disabled");
}

function eventClickOnModal(event, buttonElement) {
  if (event.target == modal || modal.contains(event.target)) return;

  if (event.target !== buttonElement) closeModal(modalElement);
  else openModal(modalElement);
}

function evemtEscapeKeydown(event) {
  if (event.key === "Escape") closeModal();
}

export function toggleModalForm(buttonElement, buttonCloseElement) {
  window.addEventListener("click", (e) => eventClickOnModal(e, buttonElement));
	buttonCloseElement.addEventListener('click', () => closeModal());

  window.addEventListener("keydown", evemtEscapeKeydown);
}