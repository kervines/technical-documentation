const navBar = document.querySelector('#navbar');
const btnOpenClose = document.querySelector('.open-close');
const container = document.querySelector('.container');
btnOpenClose.style.left = '0px';
navBar.style.display = 'none';

function btnClose() {
  btnOpenClose.style.left = '270px';
  btnOpenClose.innerHTML = '❌';
  navBar.style.display = 'block';
}
function btnOpen() {
  btnOpenClose.style.left = '0px';
  btnOpenClose.innerHTML = '➡️';
}
function moveIn() {
  container.classList.remove('move-out');
  container.classList.add('move-in');
}
function moveOut() {
  container.classList.remove('move-in');
  container.classList.add('move-out');
}

btnOpenClose.addEventListener('click', () => {
  if (navBar.classList.contains('hide')) {
    navBar.classList.remove('hide');
    navBar.classList.add('show');
    btnClose();
    moveOut();
  } else {
    navBar.classList.remove('show');
    navBar.classList.add('hide');
    btnOpen();
    moveIn();
  }
});
