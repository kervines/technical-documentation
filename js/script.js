const buttonOpen = document.querySelector('.open');
const buttonClose = document.querySelector('.close');
const navBarElement = document.querySelector('#navbar');

buttonOpen.addEventListener('click', () => {
  navBarElement.classList.toggle('hide');
});
buttonClose.addEventListener('click', () => {
  navBarElement.classList.toggle('hide');
});
