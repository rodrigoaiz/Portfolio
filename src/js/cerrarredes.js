document.addEventListener("DOMContentLoaded", function(){
  let cerrarRedes = document.getElementById('cerrar-redes');
  if(cerrarRedes){
    cerrarRedes.addEventListener('click', function(){
      document.getElementById('redes').classList.add('quitar-redes');
    });
  }
});
