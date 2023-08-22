const mobileMenuButton = document.querySelector('.toggle-button');
const container = document.querySelector('.container');
const leftWindow = document.querySelector('.left-window-contents');
mobileMenuButton.addEventListener('click', () => {
  leftWindow.classList.toggle('open');
});
