/* RESPONSIVE EXAMPLE */

console.log('Welcome to fake.shop');

/* OFFSCREEN MENU TOGGLE */
(function mobileMenu() {
  if (document.querySelector('.menu')) {
    let menuIcon = document.querySelector('.menu')
    menuIcon.addEventListener('click', function() {
      document.body.classList.toggle('menu-active')
    })
  }
  
})();

