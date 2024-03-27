// DECLARACION DE VARIABLES GLOBALES  //


const botonImagen = document.getElementById("panel-img-button");
const botonTexto = document.getElementById("text-panel-button");
const botonDescarga = document.getElementById("boton-descarga-meme")
const botonModo = document.getElementById("round");
const textoMemeSuperior = document.getElementById("texto-superior");
const textoMemeInferior = document.getElementById("texto-inferior");
const contenedorMeme = document.getElementById("contenedor-editor");


//variables botones Imagen y Texto de pantalla principal
const panelImagen = document.getElementById("panel-imgen");
const panelTexto = document.getElementById("panel-text");

const botonCierre = document.getElementById("boton-cierre-panel");
const asidePanel = document.getElementById("panel");

const selectorFondo = document.getElementById("selector-fondo");
const PanelImagen = document.getElementById("panel-imgen")

const imagenMeme = document.getElementById("imagen-meme");//// Se obtiene el elemento con el ID q es el contenedor donde se mostrará la imagen cargada.

// boton cambio Modo claro/oscuro pantalla principal

let isDarkMode = true;
function applyDarkMode() {

    if (isDarkMode) {
        document.body.style.backgroundColor = "#140152";
        document.body.style.color = "#ebebeb";
        botonImagen.style.color = "#ebebeb";
        botonTexto.style.color = "#ebebeb";
        botonDescarga.style.color = "#ebebeb";
        botonModo.style.backgroundColor = "#0d00a4"
        botonTexto.style.backgroundColor = "#0d00a4";
        botonImagen.style.backgroundColor = "#0d00a4";
        botonDescarga.style.backgroundColor = "#0d00a4";
        textoMemeSuperior.style.backgroundColor = "#0d00a4";
        textoMemeInferior.style.backgroundColor = "#0d00a4";
        contenedorMeme.style.backgroundColor = "#22007c";
        asidePanel.style.backgroundColor = "#140152";
        asidePanel.style.color = "#ebebeb";

    } else {
        document.body.style.backgroundColor = "#ffe3e0";
        document.body.style.color = "#997b66";
        botonImagen.style.color = "#997b66";
        botonTexto.style.color = "#997b66";
        botonTexto.style.backgroundColor = "#FEC89A";
        botonImagen.style.backgroundColor = "#FEC89A";
        botonDescarga.style.backgroundColor = "#FEC89A";
        botonDescarga.style.color = "#997b66";
        botonModo.style.backgroundColor = "#FEC89A";
        textoMemeSuperior.style.backgroundColor = "#FEC89A";
        textoMemeInferior.style.backgroundColor = "#FEC89A";
        contenedorMeme.style.backgroundColor = "#FCD5CE";
        asidePanel.style.color = "#997b66";
        asidePanel.style.backgroundColor = "#ffe3e0";



    }
}
applyDarkMode(); // apply initial dark mode state

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    applyDarkMode();
}


// funcion boton imagen ,despliegue del aside

//boton cierre desplegables (X), activacion de boton imagen y boton texto


botonImagen.addEventListener("click", () => {
    if (asidePanel.style.display == "none") {
        asidePanel.style.display = "flex";
        botonCierre.style.display = "block";
    }
    panelImagen.style.display = "block";
    panelTexto.style.display = "none";

});


botonTexto.addEventListener("click", () => {
    if (asidePanel.style.display == "none") {
        asidePanel.style.display = "flex";
        botonCierre.style.display = "block";
    }
    panelTexto.style.display = "block";
    panelImagen.style.display = "none";

});

botonCierre.addEventListener("click", () => {
    botonCierre.style.display = "none";
    asidePanel.style.display = "none";
});


//////    se da funcionalidad a las opciones de la <seccion "panel-imgen">    /////////


//ingreso de url

document.getElementById("url-img-input").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        cargarImagen();
    }
});

function cargarImagen() { //función que se ejecuta cuando se presiona la tecla "Enter" en el input 

    let imagenUrl = document.getElementById("url-img-input").value; //se obtiene el valor del input

    imagenMeme.style.backgroundImage = "url('" + imagenUrl + "')"; //Se establece la URL de la imagen como fondo del elemento con ID "imagen-meme".

    document.getElementById('url-img-input').value = "";  // se borra el valor del input con ID "url-img-input" después de cargar la imagen.
}


// fondo  //

//crear un img a la misma altura que del div del fondo.
//el img inicializarlo en display none,y ademas el z-index debe ser supeior al div .
//cuaando cargo la imagen la etiqueta img debe ser visible y cargar la imagen como  src.



/*
 function opcionesFondo() {

    if (selectorFondo.value === 'Ninguno'){
        imagenMeme.style.backgroundBlendMode = 'unset';
    }else if (selectorFondo.value == 'Aclarar'){
        imagenMeme.style.backgroundBlendMode ='lighten';
    }else if (selectorFondo.value == 'Oscurecer'){
        imagenMeme.style.backgroundBlendMode = 'darken';
    }else if (selectorFondo.value == 'Diferencia'){
        imagenMeme.style.backgroundBlendMode = 'difference';
    }else if (selectorFondo.value == 'Luminucidad'){
        imagenMeme.style.backgroundBlendMode = 'luminosity';
    }else if (selectorFondo.value == 'Multiplicar'){
        imagenMeme.style.backgroundBlendMode = 'multiply';
    }
     imagenMeme.style.backgroundColor = color.value;
    };  */

