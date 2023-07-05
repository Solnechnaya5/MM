document.addEventListener('DOMContentLoaded', function() {
    var burgerMenuIcon = document.querySelector('.burger-menu-icon');
    var burgerMenu = document.querySelector('.burger-menu');
    var body = document.querySelector('body');
    
    burgerMenuIcon.addEventListener('click', function() {
      burgerMenuIcon.classList.toggle('open-menu');
      burgerMenu.classList.toggle('open-menu');
      body.classList.toggle('fixed-page');
    });
  });