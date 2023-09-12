const buttonOpen = document.querySelector('.open');
const buttonClose = document.querySelector('.close');
const navBarElement = document.querySelector('#navbar');
const links = document.querySelectorAll('#navbar ul li a');
const buttonReturn = document.querySelector('.top-return');

buttonOpen.addEventListener('click', () => {
  navBarElement.classList.toggle('hide');
});
buttonClose.addEventListener('click', () => {
  navBarElement.classList.toggle('hide');
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    navBarElement.classList.toggle('hide');
  });
});

document.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    buttonReturn.style.opacity = '.5';
  } else {
    buttonReturn.style.opacity = '0';
  }
});
