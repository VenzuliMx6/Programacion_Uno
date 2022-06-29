export default class Producto {
  constructor(image, description, price, type) {
    this.img = image;
    this.desc = description;
    this.precio = price;
    this.tipo = type;
  }

  guardar_producto() {
    let nuevo_producto = {
      imagen: this.img,
      descripcion: this.desc,
      precio: this.precio,
      tipo: this.tipo,
    };
  }


















}
