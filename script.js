'use strict'

//Validando Inputs.
const redBorder = () => {
    const fields = document.getElementsByTagName('input');
    for (let i = 0; i < fields.length; i++) {
        if (fields[i].hasAttribute('required')) {
            if (fields[i].value == "") {
                fields[i].classList.add('redBorder');
                (fields[i]).after('*');
            } else {
                fields[i].classList.remove('redBorder');
            }
        }
    }
}

const validar = () => {

    //Validando Inputs
    let nombre, apellido, cedula, direccion, telefono, edad, sexo, expresion;
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    cedula = document.getElementById("cedula").value;
    direccion = document.getElementById("direccion").value;
    telefono = document.getElementById("telefono").value;
    edad = document.getElementById("edad").value;
    sexo = document.getElementById("sexo").value;

    if (nombre === "" || apellido === "" || cedula === "" || direccion === "" || telefono === "") {

        redBorder();
        alert('Todos los campos son obligatorios.');
        return false;
    }
}
