import Persona from "./persona.js";

function mostrar () {

const surname = document.getElementById("inp_apellido").value;
const name = document.getElementById("inp_apellido").value;
const dni = document.getElementById("inp_dni").value;

const persona = new Persona()

persona.apellido = surname;
persona.nombre = name;
persona.dni = dni;

persona.mostrar_datos_personales()
}

const btn = document.getElementById("btn_mostrar").addEventListener("click", mostrar)
