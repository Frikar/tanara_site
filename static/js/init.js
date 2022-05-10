  document.addEventListener('DOMContentLoaded', function() {
    const parallax = document.querySelectorAll('.parallax');
    var instanceParallax = M.Parallax.init(parallax);

    const sidenav = document.querySelectorAll('.sidenav');
    var instanceSidenav = M.Sidenav.init(sidenav);
  });