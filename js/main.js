var answerFormButton = document.querySelector('.btn-contact');
var modalForm = document.querySelector('.modal');
var closeModalForm = document.querySelector('.modal-close')
var cart = document.querySelector('.cart-item');

cart.addEventListener('click', (e) => e.preventDefault());

answerFormButton.addEventListener('click', () => modalForm.classList.toggle('modal-show'));

closeModalForm.addEventListener('click', () =>  modalForm.classList.toggle('modal-show'));
