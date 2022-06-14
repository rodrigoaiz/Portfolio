document.addEventListener("DOMContentLoaded", function(){
  let cerrarRedes = document.getElementById('cerrar-redes');
  if(cerrarRedes){
    cerrarRedes.addEventListener('click', function(event){
      document.getElementById('redes').classList.toggle('quitar-redes');
      event.preventDefault();
    });
  }
});
