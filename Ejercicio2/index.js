//PROMPT ES PARA LARGAR UN MENSAJE CON CONFIRMACIÓN
//Prompt es una función
//Mediante la función prompt("") deberemos ingresar calificaciones
//Voy a tener que preguntar lo siguiente:
//Si calificación mayor o igual que 7 deberemos mostrar en consola en consola un "Aprobado"
//Caso contrario mostrar "Desaprobado"
const valor = prompt("Ingrese valor");
const calificacion = valor >= 7 ? "Aprobado" : "Desaprobado";

//Template string ``
console.log(`
    Tu calificación en el taller 
    de programación 1 es: ${valor}, ${calificacion}

`);

//Se imprime en pantalla
document.write(valor);
