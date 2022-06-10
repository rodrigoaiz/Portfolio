
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('header').classList.add('header-down');
        document.getElementById('fondo').classList.add('fondo-down');
      } else {
        document.getElementById('header').classList.remove('header-down');
        document.getElementById('fondo').classList.remove('fondo-down');
      }
  });
});
