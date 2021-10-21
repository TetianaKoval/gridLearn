const burger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const body = document.querySelector('body')


function active(){
      burger.classList.toggle('active');
      headerMenu.classList.toggle('activeM');
      body.classList.toggle('overflowHidden');
}
burger.addEventListener('click', active);














