//Creando un objeto

const miobjeto = {
  nombre: "Carlitos",
  apellido: "Menem",
  dni: 6705066,
  correos: {
    gmail: "elalfa2009@gmail.com",
    outlook: "murieldesanjose@outlook.com",
    yahoo: "cuidacochesdesansalvadordejujuy12@yahoo.com",
  },
};

console.log(miobjeto.apellido);

//Método para mostrar los correos NO MUY PRÁCTICO
/* const gmail = miobjeto.correos.gmail;
const outlook = miobjeto.correos.outlook;
const yahoo = miobjeto.correos.yahoo; */

//Destructuring Object- Metodo más óptimo
    const {gmail, outlook, yahoo} = miobjeto.correos;



console.log(`
Correos:

Gmail: ${gmail}
Outlook: ${outlook}
Yahoo: ${yahoo}
`);
