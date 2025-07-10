document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.querySelector('.burger-menu');
  const nav = document.getElementById('side-bar');
  const closeButton = document.getElementById('close-button');

  burgerMenu.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    closeButton.classList.toggle('button-open');
  });

  closeButton.addEventListener('click', () => {
    nav.classList.remove('nav-open');
    closeButton.classList.remove('button-open');
  });

  const navLinks = document.querySelectorAll('.navbar-link');

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const dropdown = link.nextElementSibling;

      document
        .querySelectorAll('.navbar-dropdown.navDrop-open')
        .forEach((openDropdown) => {
          if (openDropdown !== dropdown) {
            openDropdown.classList.remove('navDrop-open');
          }
        });

      if (dropdown && dropdown.classList.contains('navbar-dropdown')) {
        dropdown.classList.toggle('navDrop-open');
      }
    });
  });
});
