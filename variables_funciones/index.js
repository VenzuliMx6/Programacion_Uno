//Función clásica
function mostrar() {
  
  /* Forma 1 */
  let nombres = document.querySelector("#inp_nombre").value
  
  /* Sin template string */
  nombres = 'nombre y apellido: '+nombres


  //Siempre que sea solamente texto usar ''
  alert(nombres);
}
