let foto = document.getElementById('foto');
let about = document.getElementById('about');


document.addEventListener("DOMContentLoaded", function(){
  about.addEventListener('mousemove', function(e) {
    foto.style.right = e.clientX/2 + 1 + 'px';
  //  foto.style.top = e.clientY / 1 + 'px';
  });
});
