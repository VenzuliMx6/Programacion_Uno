const framework = {
  titulo: "Framework utilizado en la actualidad",
  nombre: "Angular",
  características: {
    lenguaje: "Typescript",
    patron: "MVVM",
    spa: "si",
  },
};

const {titulo, nombre} = framework
const { lenguaje, patron, spa } = framework.características;

const mostrar_objeto = () => {
  console.log(`
Framework: 
    Titulo:${titulo}
    Nombre:${nombre}
    características:
        Lenguaje: ${lenguaje}
        Patron: ${patron}
        Spa: ${spa}
    `);
};


const bobject = document.getElementById("btn_objeto")
bobject.addEventListener("click", mostrar_objeto)