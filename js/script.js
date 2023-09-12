const buttonOpen = document.querySelector('.open');
const navBarElement = document.querySelector('#navbar');

buttonOpen.addEventListener('click', () => {
  navBarElement.classList.toggle('hide');
});
