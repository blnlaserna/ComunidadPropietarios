
var entradaTipoVia;
var entradaNombreVia;
var entradaNumeroEdificio;
var entradaCodigoPostal;
var entradaPlanta;
var entradaPuerta;
var entradaPropietario;
var patronCodigoPostal = /^([0-9]{5})?$/;
var cancelarEntrada;
var datosCorrectos;


const edificioCreado = new Edificio();
do {
    datosCorrectos = false;
    cancelarEntrada = false;
    entradaTipoVia = prompt(`Indica el tipo de vía: `);
    if (entradaTipoVia == "" || Number(entradaTipoVia)) {
        alert("Formato incorrecto")
    } else if (entradaTipoVia != null) {
        alert("Dato introducido: " + entradaTipoVia);
        datosCorrectos = true;
    } else {
        cancelarEntrada = confirm(`¿Desea cancelar la introducción de datos?`);
    }
} while ((entradaTipoVia == "" || Number(entradaTipoVia) || !cancelarEntrada) && !datosCorrectos);

if (!cancelarEntrada) {
    edificioCreado.modificarTipoVia(entradaTipoVia);
}


datosCorrectos = false;

while (!cancelarEntrada && !datosCorrectos) {
    do {
        datosCorrectos = false;
        cancelarEntrada = false;
        entradaNombreVia = prompt(`Indica el nombre de la vía: `);
        if (entradaNombreVia == "" || Number(entradaNombreVia)) {
            alert("Formato incorrecto")
        } else if (entradaNombreVia != null) {
            alert("Dato introducido: " + entradaNombreVia);
            datosCorrectos = true;
        } else {
            cancelarEntrada = confirm(`¿Desea cancelar la introducción de datos?`);
        }
    } while ((entradaNombreVia == "" || Number(entradaNombreVia) || !cancelarEntrada) && !datosCorrectos);

    edificioCreado.modificarNombreVia(entradaNombreVia);
}

datosCorrectos = false;

while (!cancelarEntrada && !datosCorrectos) {
    do {
        datosCorrectos = false;
        cancelarEntrada = false;
        entradaNumeroEdificio = prompt(`Indica el número de la vía: `);
        if (entradaNumeroEdificio == "" || parseInt(entradaNumeroEdificio)<0 ) {
            alert("Formato incorrecto")
        } else if (entradaNumeroEdificio != null) {
            alert("Dato introducido: " + entradaNumeroEdificio);
            datosCorrectos = true;
        } else {
            cancelarEntrada = confirm(`¿Desea cancelar la introducción de datos?`);
        }
    } while ((entradaNumeroEdificio == "" || !cancelarEntrada) && !datosCorrectos);

    edificioCreado.modificarNumeroEdificio(entradaNumeroEdificio);
}

datosCorrectos = false;

while (!cancelarEntrada && !datosCorrectos) {
    do {
        datosCorrectos = false;
        cancelarEntrada = false;
        entradaCodigoPostal = prompt(`Indica el código postal: `);
        if (entradaCodigoPostal == "" ) {
            alert("Formato incorrecto");
        } else if (entradaCodigoPostal != null) {
            if (!patronCodigoPostal.test(entradaCodigoPostal)) {
                alert (`El código postal debe tener 5 dígitos`);
            } else {
                alert("Dato introducido: " + entradaCodigoPostal);
                datosCorrectos = true;
            }
        } else {
            cancelarEntrada = confirm(`¿Desea cancelar la introducción de datos?`);
        }
    } while ((entradaCodigoPostal == "" || !cancelarEntrada) && !datosCorrectos);

    edificioCreado.modificarCodigoPostal(entradaCodigoPostal);
}



// ---------------------------CREAR EDIFICIO-------------------------//



//----- AGREGAR PLANTAS, PUERTAS Y PROPIETARIOS AL EDIFICIO------------//


do {

    introducirMasDatos = false;

    datosCorrectos = false;

    while (!cancelarEntrada && !datosCorrectos) {
        do {
            datosCorrectos = false;
            cancelarEntrada = false;
            entradaPlanta = prompt(`Indica la planta: `);
            if (entradaPlanta == "" || parseInt(entradaPlanta)<0) {
                alert("Formato incorrecto")
            } else if (entradaPlanta != null) {
                alert("Dato introducido: " + entradaPlanta);
                datosCorrectos = true;
            } else {
                cancelarEntrada = confirm(`¿Desea cancelar la introducción de datos?`);
            }
        } while ((entradaPlanta == "" || !cancelarEntrada) && !datosCorrectos);

        edificioCreado.agregarPlanta(entradaPlanta);
    }

    datosCorrectos = false;

    while (!cancelarEntrada && !datosCorrectos) {
        do {
            datosCorrectos = false;
            cancelarEntrada = false;
            entradaPuerta = prompt(`Indica la puerta: `);
            if (entradaPuerta == "" || parseInt(entradaPuerta)<0) {
                alert("Formato incorrecto")
            } else if (entradaPuerta != null) {
                alert("Dato introducido: " + entradaPuerta);
                datosCorrectos = true;
            } else {
                cancelarEntrada = confirm(`¿Desea cancelar la introducción de datos?`);
            }
        } while ((entradaPuerta == "" || !cancelarEntrada) && !datosCorrectos);

        edificioCreado.agregarPuerta(entradaPlanta, entradaPuerta);
    }
    
    datosCorrectos = false;

    while (!cancelarEntrada && !datosCorrectos) {
        do {
            datosCorrectos = false;
            cancelarEntrada = false;
            entradaPropietario = prompt(`Indica el propietario: `);
            if (entradaPropietario == "" ) {
                alert("Formato incorrecto")
            } else if (entradaPropietario != null) {
                alert("Dato introducido: " + entradaPropietario);
                datosCorrectos = true;
            } else {
                cancelarEntrada = confirm(`¿Desea cancelar la introducción de datos?`);
            }
        } while ((entradaPropietario == "" || !cancelarEntrada) && !datosCorrectos);

        edificioCreado.agregarPropietario(entradaPropietario, entradaPlanta, entradaPuerta);
    }
    
    if (!cancelarEntrada) {      
        introducirMasDatos = confirm(`¿Deseas introducir más datos en el edificio?`);
    }
    
} while (introducirMasDatos);


// --------------------MOSTRAR DATOS POR PANTALLA----------------------//
function encontrarDatosDeseadosConSeparador(datos, separador) {
    let indiceLocalizacion = datos.indexOf(separador) + 2
    return datos.slice(indiceLocalizacion); 
};


var tipoViaRaw = edificioCreado.imprimirTipoVia();
var nombreViaRaw = edificioCreado.imprimirNombreVia();
var numeroEdificioRaw = edificioCreado.imprimirNumeroEdificio();
var codigoPostalRaw = edificioCreado.imprimirCodigoPostal();

var tipoVia = encontrarDatosDeseadosConSeparador(tipoViaRaw, ":");
var nombreVia = encontrarDatosDeseadosConSeparador(nombreViaRaw, ":");
var numeroEdificio = encontrarDatosDeseadosConSeparador(numeroEdificioRaw, ":");
var codigoPostal = encontrarDatosDeseadosConSeparador(codigoPostalRaw,":");

var stringListadoPropietariosPorPiso = edificioCreado.imprimirTodosPropietarios();

var arrayListadoPropietariosPorPiso = stringListadoPropietariosPorPiso.split("\n");

document.write(`<h1 style="text-align:center;">COMUNITAT PROPIETARIS<br></h1>`);
    
if (tipoVia != "undefined" && nombreVia !="undefined" && numeroEdificio != "undefined" && codigoPostal != "undefined") {
    let titulo2HTML1 = 
        `${tipoVia} 
        ${nombreVia}, 
        ${numeroEdificio} C.P. 
        ${codigoPostal}`;
        
    document.write(`<h1 style="text-align:center;">${titulo2HTML1}</h1>`);


    arrayListadoPropietariosPorPiso= arrayListadoPropietariosPorPiso.slice(1);

    for (let elementoArray of arrayListadoPropietariosPorPiso) {
        if (elementoArray.includes("Planta")) {
            let tituloHTML2 = `<h2><strong> ${elementoArray} </strong></h2>`; 
            document.write(tituloHTML2);
        } else if (elementoArray.includes("Puerta")) {
            identificadorPuerta = encontrarDatosDeseadosConSeparador(elementoArray, "?");
            let tituloHTML3 = `<h3><strong>&nbsp;&nbsp;&nbsp;&nbsp;${identificadorPuerta}</strong></h3>`; 
            document.write(tituloHTML3);
        } else {
            let propietarioPorPuerta = encontrarDatosDeseadosConSeparador(elementoArray, "\t");
            let parrafoHTML = `<pre>        ${propietarioPorPuerta}</pre>`; 
            document.write(parrafoHTML);
        }
    }

}

function cambiarColorFondo() {
    let red = parseInt(Math.random() * 256);
    let green = parseInt(Math.random() * 256);
    let blue = parseInt(Math.random() * 256);
    color = `rgb(${red},${green},${blue})`;
    document.body.style.backgroundColor = color;
}
cambiarColorFondo();


/*
// Creación de los mensajes a mostrar por pantalla
var menuPeticionesDatos = new Map([
    ["tipoVia", `Indica el tipo de vía: `],
    ["nombreVia", `Indica el nombre de la vía: `],
    ["numeroEdificio", `Indica el número del edificio: `],
    ["codigoPostal", `Indica el código postal`],
    ["numeroPlanta", `Indica la planta a introducir: `],
    ["numeroPuerta", `Indica la puerta a introducir: `],
    ["nombrePropietario", `Indica el propietario a introducir`]
]);

console.log(menuPeticionesDatos);


var mensajeConfirmación = `Se ha introducido correctamente el dato`;



for (let [elementoPeticion, mensajePeticion] of menuPeticionesDatos) {
    datoEntrada = prompt(mensajePeticion);

}
*/
