document.addEventListener("DOMContentLoaded", function(){
  let cerrarRedes = document.getElementById('cerrar-redes');
  if(cerrarRedes){
    cerrarRedes.addEventListener('click', function(event){
      document.getElementById('redes').classList.add('quitar-redes');
      event.preventDefault();
    });
  }
});
