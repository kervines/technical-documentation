export default function initDarkMode() {
  const circle = document.querySelector('.circle');
  const sun = document.querySelector('.sun');
  const moon = document.querySelector('.moon');
  const html = document.querySelector('html');
  const container = document.querySelector('.container-button');

  container.addEventListener('click', activeClass);
  function activeClass() {
    moon.classList.toggle('active');
    sun.classList.toggle('active');
    circle.classList.toggle('active');
    const mem = html.classList.toggle('dark-mode');
    localStorage.setItem('mode', mem);
  }

  const mem = JSON.parse(localStorage.getItem('mode'));
  if (mem) {
    activeClass();
  }
}
