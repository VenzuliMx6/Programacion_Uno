//Declaramos la variable - Inicializamos
var numero = 7; 

//Condicional 
if (numero > 6) {
    console.log('Estás aprobado')
}else{
    console.log('Nos vemos en diciembre')
}
//Otra forma de expresar una condición
var respuesta = (numero <= 4) ? 'Nos vemos en Marzo':'Nos veremos en Diciembre'
console.log(respuesta)

/* 
Diferencias entre let y var
*/

//Uso de VAR
var x = 44;
if (x == 44) {
    var x = 74 //Es la misma variable "x"
    console.log(x) //Acá se imprime el 74
}
console.log(x) //Y acá también se imprime el 74

//Uso de LET
let y = 11;
if (y == 11) {
    let y = 22;
    console.log(y) //Acá se imprime el 22, empieza y muere en el if.
}
console.log(y) //Acá se imprime el 11