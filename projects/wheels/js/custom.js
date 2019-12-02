let menuList = document.querySelector('.main-nav__list');
let menuBtn = document.querySelector('.main-nav__trigger');
let logo = document.querySelector('.page-header__logo');


if(menuList.classList.contains('menu-list--opened')) {
  menuList.classList.remove('menu-list--opened');
}
if(menuBtn.classList.contains('main-nav__trigger--opened')) {
  menuList.classList.remove('main-nav__trigger--opened');
}

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('main-nav__trigger--opened');
  menuList.classList.toggle('menu-list--opened');
});

//Sticky navbar functionality
let navbar = document.querySelector('.page-header__nav');
let sticky = navbar.offsetTop;

if(window.innerWidth <= 1024 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

  window.onscroll = () => {
    onScrollWheelsDevices();
  }

  const onScrollWheelsDevices = () => {
    if(window.pageYOffset > sticky)
      navbar.classList.add('sticky');
    else
      navbar.classList.remove('sticky');
  }
} else {
  window.onscroll = () => {
    onScrollWheelsDesktop();
  }
  
  const onScrollWheelsDesktop = () => {
    if(window.pageYOffset > sticky)
      navbar.classList.add('stickyWindow');
    else
      navbar.classList.remove('stickyWindow');
  }
}