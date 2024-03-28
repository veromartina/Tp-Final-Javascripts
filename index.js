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

const modoColorInput =document.getElementById("modo-color-input")
const modoColorInicio = document.getElementById("modo-color-inicio");


const controlesDeslizantesImagen = document.getElementsByClassName("control-deslizante");



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

modoColorInput.addEventListener("input", ()=>{
    modoColorInicio.textContent = modoColorInput.value;
    aplyBlendMode();
});//se activará cada vez que el valor del input cambie. Cuando se dispare el evento "input", se actualiza el contenido de modoColorInicio con el valor del input modoColorInput.value, y luego se llama a la función aplyBlendMode()


selectorFondo.addEventListener("change", ()=>{
    imagenMeme.style.backgroundImage = aplyBlendMode();
}); //se añade un event listener al elemento selectorFondo que escucha el evento "change", el cual se activa cuando el valor del selector cambia. Cuando esto sucede, se establece la propiedad backgroundImage del elemento imagenMeme con el resultado de llamar a la función aplyBlendMode().

function aplyBlendMode() {
    if (selectorFondo.value == 'ninguno'){
     imagenMeme.style.backgroundBlendMode = 'normal';
    } else if (selectorFondo.value == 'aclarar'){
      imagenMeme.style.backgroundBlendMode = 'lighten';
    } else if (selectorFondo.value == 'oscurecer'){
      imagenMeme.style.backgroundBlendMode = 'darken';
    } else if (selectorFondo.value == 'diferencia'){
      imagenMeme.style.backgroundBlendMode = 'difference';
    } else if (selectorFondo.value == 'luminucidad'){
      imagenMeme.style.backgroundBlendMode = 'luminosity';
    } else if (selectorFondo.value == 'multiplicar'){
      imagenMeme.style.backgroundBlendMode = 'multiply';
    }
  
    imagenMeme.style.backgroundColor = modoColorInput.value;
  };
  

// Filtros

const brightnessDeslizante = document.getElementById('brightness-deslizante');
const opacityDeslizante = document.getElementById('opacity-deslizante');
const contrastDeslizante = document.getElementById('contrast-deslizante');
const blurtDeslizante = document.getElementById('blur-deslizante');
const grayscaleDeslizante = document.getElementById('grayscale-deslizante');
const sepiaDeslizante = document.getElementById('sepia-deslizante');
const hueDeslizante = document.getElementById('hue-deslizante');
const saturateDeslizante = document.getElementById('saturate-deslizante');
const invertDeslizante = document.getElementById('invert-deslizante');

const botonRestablecer = document.getElementById('boton-restablecer-filtros');

// Event listeners para los Deslizantes

brightnessDeslizante.addEventListener('input',() => {aplicarFiltros();});
opacityDeslizante.addEventListener('input',() => {aplicarFiltros();});
contrastDeslizante.addEventListener('input',() => {aplicarFiltros();});
blurtDeslizante.addEventListener('input',() => {aplicarFiltros();});
grayscaleDeslizante.addEventListener('input',() => {aplicarFiltros();});
sepiaDeslizante.addEventListener('input',() => {aplicarFiltros();});
hueDeslizante.addEventListener('input',() => {aplicarFiltros();});
saturateDeslizante.addEventListener('input',() => {aplicarFiltros();});
invertDeslizante.addEventListener('input',() => {aplicarFiltros();});

// Función para aplicar los filtros


function aplicarFiltros() {
    sumtoriaFiltros = ` brightness(${brightnessDeslizante.value}%)`;
    sumtoriaFiltros += ` opacity(${opacityDeslizante.value}%)`;
    sumtoriaFiltros += ` contrast(${contrastDeslizante.value}%)`;
    sumtoriaFiltros += ` blur(${blurtDeslizante.value}px)`;
    sumtoriaFiltros += ` grayscale(${grayscaleDeslizante.value}%)`;
    sumtoriaFiltros += ` sepia(${sepiaDeslizante.value}%)`;
    sumtoriaFiltros += ` hue-rotate(${hueDeslizante.value}deg)`;
    sumtoriaFiltros += ` invert(${invertDeslizante.value}%)`;
    sumtoriaFiltros += ` saturate(${saturateDeslizante.value}%)`;
  
    imagenMeme.style.filter = sumtoriaFiltros;
  };


// Event listener para el botón de restablecimiento

botonRestablecer.addEventListener('click', () => {
  // Restablecer los valores de los Deslizantes
  brightnessDeslizante.value = 100;
  opacityDeslizante.value = 100;
  contrastDeslizante.value = 100;
  blurtDeslizante.value = 0;
  grayscaleDeslizante.value = 0;
  sepiaDeslizante.value = 0;
  hueDeslizante.value = 0;
  saturateDeslizante.value = 100;
  invertDeslizante.value = 0;

  aplicarFiltros();  // Aplico los filtros con los valores restablecidos
});   


