// DECLARACION DE VARIABLES GLOBALES  //


const botonImagen = document.getElementById("panel-img-button");
const botonTexto = document.getElementById("text-panel-button");
const botonDescarga = document.getElementById("boton-descarga-meme")
const botonModo = document.getElementById("round");
const textoMemeSuperior = document.getElementById("texto-superior");
const textoMemeInferior = document.getElementById("texto-inferior");
const contenedorMeme = document.getElementById("contenedor-editor");
const botonesHeader = document.getElementById("botones-header");

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


// boton cambio Modo claro/oscuro pantalla principal

let isDarkMode = true;
function applyDarkMode() {

    if (isDarkMode) {
        document.body.style.backgroundColor = "#140152";
        document.body.style.color = "#ebebeb";
        botonImagen.style.color = "#ebebeb";
        botonTexto.style.color = "#ebebeb";
        botonDescarga.style.color = "#ebebeb";
        botonModo.style.backgroundColor = "#4361ee"
        botonTexto.style.backgroundColor = "#4361ee";
        botonImagen.style.backgroundColor = "#4361ee";
        botonDescarga.style.backgroundColor = "#4361ee";
        textoMemeSuperior.style.backgroundColor = "#0d00a4";
        textoMemeInferior.style.backgroundColor = "#0d00a4";
        contenedorMeme.style.backgroundColor = "#22007c";
        asidePanel.style.backgroundColor = "#140152";
        asidePanel.style.color = "#ebebeb";

        brightnessDeslizante.style.backgroundColor = "#bbd0ff";
        opacityDeslizante.style.backgroundColor = "#bbd0ff";
        contrastDeslizante.style.backgroundColor = "#bbd0ff";
        grayscaleDeslizante.style.backgroundColor = "#bbd0ff";
        sepiaDeslizante.style.backgroundColor = "#bbd0ff";
        blurtDeslizante.style.backgroundColor = "#bbd0ff";
        hueDeslizante.style.backgroundColor = "#bbd0ff";
        saturateDeslizante.style.backgroundColor = "#bbd0ff";
        invertDeslizante.style.backgroundColor = "#bbd0ff";

        botonRestablecer.style.backgroundColor ="#4361ee"
      

    } else {
        document.body.style.backgroundColor = "#FFB5A7";
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
        imagenMeme.style.background = "#F9DCC4";
        contenedorMeme.style.backgroundColor = "#FCD5CE";
        asidePanel.style.color = "#997b66";
        asidePanel.style.backgroundColor = "#ffe3e0";
        selectorFondo.style.color = "#997b66"; 

        brightnessDeslizante.style.backgroundColor = "#FFB5A7";
        opacityDeslizante.style.backgroundColor = "#FFB5A7";
        contrastDeslizante.style.backgroundColor = "#FFB5A7";
        grayscaleDeslizante.style.backgroundColor = "#FFB5A7";
        sepiaDeslizante.style.backgroundColor = "#FFB5A7";
        blurtDeslizante.style.backgroundColor = "#FFB5A7";
        hueDeslizante.style.backgroundColor = "#FFB5A7";
        saturateDeslizante.style.backgroundColor = "#FFB5A7";
        invertDeslizante.style.backgroundColor = "#FFB5A7";
        botonRestablecer.style.backgroundColor = "#FEC89A"
      

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
    asidePanel.style.display = "flex";
    panelImagen.style.display = "block";
    panelTexto.style.display = "none";
    botonCierre.style.display = "block";

});

botonTexto.addEventListener("click", () => {
    asidePanel.style.display = "flex"
    panelImagen.style.display = "none";
    panelTexto.style.display = "block";
    botonCierre.style.display = "block";

   
});  

botonCierre.addEventListener("click", () => {
    botonCierre.style.display = "none";
    asidePanel.style.display = "none";
  
});


/////se da funcionalidad a las opciones de la <seccion "panel-imgen">    /////////
//ingreso de url

document.getElementById("url-img-input").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        cargarImagen();
    }
});

function cargarImagen() { //función que se ejecuta cuando se presiona la tecla "Enter" en el input 

    let imagenUrl = document.getElementById("url-img-input").value; //se obtiene el valor del input

    imagenMeme.style.backgroundImage = "url('" + imagenUrl + "')"; //Se establece la URL de la imagen como fondo del elemento con ID "imagen-meme".
    imagenMeme.style.backgroundSize = "cover";
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


//Texto superior e inferior del meme

/*Input de entrada de texto*/

const textoSuperiorInput = document.getElementById('texto-superior-input');
const textoInferiorInput = document.getElementById('texto-inferior-input');
const textoArriba = document.getElementById("texto-superior");
const textoAbajo = document.getElementById("texto-inferior");

textoSuperiorInput.addEventListener('input', () => {
    if (textoSuperiorInput.value !== ""){
        textoArriba.textContent = textoSuperiorInput.value;
    } else
        textoArriba.textContent = "TEXTO SUPERIOR";
    });

textoInferiorInput.addEventListener('input', () => {
    if (textoInferiorInput.value !== ""){
        textoAbajo.textContent = textoInferiorInput.value;
    } else
        textoAbajo.textContent = "TEXTO INFERIOR";
});


/*tilde superior e inferior*/

const sinTextoSuperior = document.getElementById('sin-texto-superior');
const sinTextoInferior = document.getElementById('sin-texto-inferior');

sinTextoSuperior.addEventListener('click', () => {
    if (sinTextoSuperior.checked){
        textoArriba.style.display = "none";
    } else {
        textoArriba.style.display = "block";
    }
});

sinTextoInferior.addEventListener('click', () => {
    if (sinTextoInferior.checked){
        textoAbajo.style.display = "none";
    } else {
        textoAbajo.style.display = "block";
    }
});


/* cambiar tipo de fuente */

const tiposFuente = document.getElementById('tipos-texto-fuente');

const arial = document.getElementById('arial');
const arialblack = document.getElementById('arialBlack');
const americantypewriter = document.getElementById('americantypewriter');
const andalemono = document.getElementById('andaleMono');
const comicsanMs = document.getElementById('comicSansMs');
const helvetica = document.getElementById('helvetica');
const impact = document.getElementById('impact');
const verdana = document.getElementById('verdana');
const timesnewroman = document.getElementById('timesNewRoman');

tiposFuente.addEventListener('change', () => {
    cambiarFuente(tiposFuente);
});

const cambiarFuente = (tiposFuente) => {
    if (tiposFuente.value === 'arial'){
        textoArriba.style.fontFamily = 'arial';
        textoAbajo.style.fontFamily = 'arial';
    }
    if (tiposFuente.value === 'arial Black'){
        textoArriba.style.fontFamily = 'arial black';
        textoAbajo.style.fontFamily = 'arial black';
    }
    if (tiposFuente.value === 'americantypewriter'){
        textoArriba.style.fontFamily = 'american typewriter';
        textoAbajo.style.fontFamily = 'american typewriter';
    }
    if (tiposFuente.value === 'andalemono'){
        textoAbajo.style.fontFamily = 'andale mono';
        textoAbajo.style.fontFamily = 'andale mono';
    }
    if (tiposFuente.value === 'comicsansMs'){
        textoArriba.style.fontFamily = 'comic sans ms';
        textoAbajo.style.fontFamily = 'comic sans ms';
    }
    if (menuFuente.value === 'helvetica'){
        textoArriba.style.fontFamily = 'helvetica';
        textoAbajo.style.fontFamily = 'helvetica';
    }
    if (menuFuente.value === 'impact'){
        textoArriba.style.fontFamily = 'impact';
        textoAbajo.style.fontFamily = 'impact';
    }
    if (menuFuente.value === 'verdana'){
        textoArriba.style.fontFamily = 'verdana';
        textoAbajo.style.fontFamily = 'verdana';
    }
    if (menuFuente.value === 'timesnewroman'){
        textoArriba.style.fontFamily = 'times new roman';
        textoAbajo.style.fontFamily = 'times new roman';
    }
}

/*Cambiar tamaño de fuente*/

const tamanioFuente = document.getElementById("tamanio-fuente-input");

tamanioFuente.addEventListener('change', () =>{
    textoArriba.style.fontSize = tamanioFuente.value + 'px';
    textoAbajo.style.fontSize = tamanioFuente.value + 'px';
});

/*alineacion de texto*/

//Alineación del texto meme
const botonAlinearIzq = document.getElementById("boton-alineacion-izq");
const botonAlinearCentro = document.getElementById("boton-alineacion-cen");
const botonAlinearDer = document.getElementById("boton-alineacion-der");

botonAlinearIzq.addEventListener('click', ()=>{
    textoArriba.style.textAlign = "left";
    textoAbajo.style.textAlign= "left";
});

botonAlinearCentro.addEventListener('click', ()=>{
    textoArriba.style.textAlign = "center";
    textoAbajo.style.textAlign= "center";
});

botonAlinearDer.addEventListener('click', ()=>{
    textoArriba.style.textAlign = "right";
    textoAbajo.style.textAlign= "right";
});

/*cambiar color del texto*/

const colorTexto = document.getElementById("text-color-input");
colorTexto.addEventListener('change', () => {
    textoArriba.style.color = colorTexto.value;
    textoAbajo.style.color = colorTexto.value;
});

/*cambiar color del fondo texto*/

const colorTextoFondo = document.getElementById("text-background-input");
colorTextoFondo.addEventListener('change', () => {
    textoArriba.style.backgroundColor = colorTextoFondo.value;
    textoAbajo.style.backgroundColor = colorTextoFondo.value;
});


/*tilde fondo transparente */
const textoSinFondo = document.getElementById("tilde-sin-fondo");
textoSinFondo.addEventListener('click', () => {
    if (textoSinFondo.checked){
        textoArriba.style.backgroundColor = "transparent";
        textoAbajo.style.backgroundColor = "transparent";
    }/*else {
        textoArriba.style.backgroundColor = textoArriba.value ;
        textoAbajo.style.backgroundColor = textoAbajo.value;
    } // ver cuando se quita tilde */
});
