export default class Triangulo {
  constructor(b, h) {
    this.base = b;
    this.altura = h;
  }

  calcular_area() {
    const area = (this.base * this.altura) / 2;
    return area;
  }
}
