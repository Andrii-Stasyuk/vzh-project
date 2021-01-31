const burgerIcon = document.querySelector('.burger-icon');
const menu = document.querySelector('#menu');
burgerIcon.addEventListener('click', toggleResponsiveMenu);
function toggleResponsiveMenu() {
      menu.classList.toggle('responseve-menu');

}
