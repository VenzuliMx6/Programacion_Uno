export default class Rectangulo {
  constructor(ancho, largo) {
    this.ancho = ancho;
    this.largo = largo;
  }

  calcular_area_R() {
    const area_R = this.ancho * this.largo;
    return area_R;
  }
}
