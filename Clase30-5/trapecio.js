//FORMULA TRAPECIO A= (a+b) /2 * altura

export default class Trapecio {
  constructor(a, b, h) {
    this.valorA = a;
    this.valorB = b;
    this.altura = h;
  }

  Calcular_T() {
    const area = ((this.valorA + this.valorB) / 2) * this.altura;
    return area;
  }
}
