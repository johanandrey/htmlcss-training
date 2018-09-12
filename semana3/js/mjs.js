var borrar = false;


/* Función que coloca el valor en el input y calcula */
function calcular(val) {
    console.log("Value: " + val);
    currentValue = document.getElementById("resultados").value;
    if (val == "=") {
        resultado = eval(currentValue);
        document.getElementById("resultados").value = currentValue + val + resultado;
        borrar = true;
    } else {
       
        if (borrar == true){
            console.log("Debería borrar: " + borrar);
            document.getElementById("resultados").value = "";
        }
        document.getElementById("resultados").value = currentValue + val;
    }
}

/* Función que limpia la caja texto al cargar el body */
function clearTextBox() {
    document.getElementById("resultados").value = '';
}
