import Producto from "./producto.js";

function cargar_producto() {
  let img = document.getElementById("url_producto").value;
  let desc = document.getElementById("descripcion_producto").value;
  let precio = document.getElementById("precio_producto").value;
  let tipo = document.getElementById("tipo_producto").value;

  let producto = new Producto(img, desc, precio, tipo);
    producto.cargar_producto();


}




