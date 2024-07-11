// DECLARACION DE VARIABLES GLOBALES  //


const botonImagen = document.getElementById("panel-img-button");
const botonTexto = document.getElementById("text-panel-button");
const botonModo = document.getElementById("round");
const textoMemeSuperior = document.getElementById("texto-superior");
const textoMemeInferior = document.getElementById("texto-inferior");
const contenedorMeme = document.getElementById("contenedor-editor");
const memeCompleto = document.getElementById("contenedor-meme");
const botonDescarga = document.getElementById("boton-descarga-meme");

const botonesHeader = document.getElementById("botones-header");

//variables botones Imagen y Texto de pantalla principal

const panelImagen = document.getElementById("panel-imgen");
const panelTexto = document.getElementById("panel-text");

const botonCierre = document.getElementById("boton-cierre-panel");
const asidePanel = document.getElementById("panel");

const selectorFondo = document.getElementById("selector-fondo");
const PanelImagen = document.getElementById("panel-imgen")

const imagenMeme = document.getElementById("imagen-meme");//// Se obtiene el elemento con el ID q es el contenedor donde se mostrará la imagen cargada.


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


const modoColorInput =document.getElementById("modo-color-input")
const modoColorInicio = document.getElementById("modo-color-inicio");

const sinContorno = document.getElementById("texto-sin-contorno");
const claroContorno = document.getElementById("texto-contorno-claro");
const oscuroContorno = document.getElementById("texto-contorno-oscuro");

const botonAlineacionIzq = document.getElementById("boton-alineacion-izq");
const botonAlineacionCen = document.getElementById("boton-alineacion-cen");
const botonAlineacionDer = document.getElementById("boton-alineacion-der");

const textoContornoClaro = document.getElementById("texto-contorno-claro");
const textoContornoOscuro = document.getElementById("texto-contorno-oscuro");
const textoSinContorno = document.getElementById("texto-sin-contorno");


// boton cambio Modo claro/oscuro pantalla principal

let isDarkMode = true;
function applyDarkMode() {

    if (isDarkMode) {
        document.body.style.backgroundColor = "var(--color-fondo)";
        document.body.style.color = "var(--color-letras)";
        botonImagen.style.color = "var(--color-letras)";
        botonTexto.style.color = "var(--color-letras)";
        botonDescarga.style.color = "var(--color-letras)";
        botonModo.style.backgroundColor = "var(--background-botones)";
        botonTexto.style.backgroundColor = "var(--background-botones)";
        botonImagen.style.backgroundColor = "var(--background-botones)";
        botonDescarga.style.backgroundColor = "var(--background-botones)";
        textoMemeSuperior.style.backgroundColor = "var(--background-botones)";
        textoMemeInferior.style.backgroundColor = "var(--background-botones)";
        contenedorMeme.style.backgroundColor = "var(--background-editor-meme)";
        asidePanel.style.backgroundColor = "var(--color-fondo)";
        asidePanel.style.color = "var(--color-letras)";
        imagenMeme.style.backgroundColor = "var(--background-imagen)";

        brightnessDeslizante.style.backgroundColor = "var(--background-filtros)";
        opacityDeslizante.style.backgroundColor = "var(--background-filtros)";
        contrastDeslizante.style.backgroundColor = "var(--background-filtros)";
        grayscaleDeslizante.style.backgroundColor = "var(--background-filtros)";
        sepiaDeslizante.style.backgroundColor = "var(--background-filtros)";
        blurtDeslizante.style.backgroundColor = "var(--background-filtros)";
        hueDeslizante.style.backgroundColor = "var(--background-filtros)";
        saturateDeslizante.style.backgroundColor = "var(--background-filtros)";
        invertDeslizante.style.backgroundColor = "var(--background-filtros)";
        botonRestablecer.style.backgroundColor = "var(--background-botones)";

        botonAlineacionIzq.style.backgroundColor = "var(--background-botones)";
        botonAlineacionCen.style.backgroundColor = "var(--background-botones)";
        botonAlineacionDer.style.backgroundColor = "var(--background-botones)";

        textoContornoClaro.style.backgroundColor = "var(--background-botones)";
        textoContornoOscuro.style.backgroundColor = "var(--background-botones)";
        textoSinContorno.style.backgroundColor = "var(--background-botones)";
        

    } else {
        document.body.style.backgroundColor = "var(--color-fondo1)";
        document.body.style.color = "var(--color-letras1)";
        botonImagen.style.color = "var(--color-letras1)";
        botonTexto.style.color = "var(--color-letras1)";
        botonTexto.style.backgroundColor = "var(--background-botones1)";
        botonImagen.style.backgroundColor = "var(--background-botones1)";
        botonDescarga.style.backgroundColor = "var(--background-botones1)";
        botonDescarga.style.color = "var(--color-letras1)";
        botonModo.style.backgroundColor = "var(--background-botones1)";
        textoMemeSuperior.style.backgroundColor = "var(--background-botones1)";
        textoMemeInferior.style.backgroundColor = "var(--background-botones1)";
        imagenMeme.style.background = "var(--background-imagen1)";
        contenedorMeme.style.backgroundColor = "var(--background-editor-meme1)";
        asidePanel.style.color = "var(--color-letras1)";
        asidePanel.style.backgroundColor = "var(--color-fondo1)";
        selectorFondo.style.color = "var(--color-letras1)"; 

        brightnessDeslizante.style.backgroundColor = "var( --color-letras1)";
        opacityDeslizante.style.backgroundColor = "var( --color-letras1)";
        contrastDeslizante.style.backgroundColor = "var( --color-letras1)";
        grayscaleDeslizante.style.backgroundColor = "var( --color-letras1)";
        sepiaDeslizante.style.backgroundColor = "var( --color-letras1)";
        blurtDeslizante.style.backgroundColor = "var( --color-letras1)";
        hueDeslizante.style.backgroundColor = "var( --color-letras1)";
        saturateDeslizante.style.backgroundColor = "var( --color-letras1)";
        invertDeslizante.style.backgroundColor = "var( --color-letras1)";
        botonRestablecer.style.backgroundColor = "var( --background-botones1)";
        botonRestablecer.style.color = "var(--color-letras1)";

        botonAlineacionIzq.style.backgroundColor = "var(--background-botones1 )";
        botonAlineacionCen.style.backgroundColor = "var(--background-botones1)";
        botonAlineacionDer.style.backgroundColor = "var(--background-botones1)";

        textoContornoClaro.style.backgroundColor = "var(--background-botones1)";
        textoContornoOscuro.style.backgroundColor = "var(--background-botones1)";
        textoSinContorno.style.backgroundColor = "var(--background-botones1)";
        
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

document.getElementById("url-img-input").addEventListener("change", () => {
        cargarImagen();
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
    if (selectorFondo.value == "ninguno"){
     imagenMeme.style.backgroundBlendMode = "normal";
    } else if (selectorFondo.value == "aclarar"){
      imagenMeme.style.backgroundBlendMode = "lighten";
    } else if (selectorFondo.value == "oscurecer"){
      imagenMeme.style.backgroundBlendMode = "darken";
    } else if (selectorFondo.value == "diferencia"){
      imagenMeme.style.backgroundBlendMode = "difference";
    } else if (selectorFondo.value == "luminucidad"){
      imagenMeme.style.backgroundBlendMode = "luminosity";
    } else if (selectorFondo.value == "multiplicar"){
      imagenMeme.style.backgroundBlendMode = "multiply";
    }
  
    imagenMeme.style.backgroundColor = modoColorInput.value;
  };
  

// Event listeners para los Deslizantes

brightnessDeslizante.addEventListener("input",() => {aplicarFiltros();});
opacityDeslizante.addEventListener("input",() => {aplicarFiltros();});
contrastDeslizante.addEventListener("input",() => {aplicarFiltros();});
blurtDeslizante.addEventListener("input",() => {aplicarFiltros();});
grayscaleDeslizante.addEventListener("input",() => {aplicarFiltros();});
sepiaDeslizante.addEventListener("input",() => {aplicarFiltros();});
hueDeslizante.addEventListener("input",() => {aplicarFiltros();});
saturateDeslizante.addEventListener("input",() => {aplicarFiltros();});
invertDeslizante.addEventListener("input",() => {aplicarFiltros();});

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


// botón de restablecimiento

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

const textoSuperiorInput = document.getElementById("texto-superior-input");
const textoInferiorInput = document.getElementById("texto-inferior-input");
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
    textoArriba.style.fontSize = tamanioFuente.value + "px" ;
    textoAbajo.style.fontSize = tamanioFuente.value +"px";
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
    }else {
        applyDarkMode()
    
    }

});

/*Contorno en el texto */

sinContorno.addEventListener('click', ()=> {
    topText.style.textShadow = "transparent";
    bottomText.style.textShadow = "transparent";
  });
  
  claroContorno.addEventListener('click', ()=> {
    textoArriba.style.textShadow = "1px 1px 5px white";
    textoAbajo.style.textShadow = "1px 1px 5px white";
  });
  
  oscuroContorno.addEventListener('click', ()=> {
    textoArriba.style.textShadow = "1px 1px 5px black"; 
    textoAbajo.style.textShadow = "1px 1px 5px black";
  });

  /*-----------------------------------------------------------------------------*/

/* Texto espaciado */ 
const espaciado = document.getElementById("padding-input");

espaciado.addEventListener("change", () => {
    textoArriba.style.letterSpacing = espaciado.value + "px";
    textoAbajo.style.letterSpacing = espaciado.value + "px" ;
});


/*Menú texto interliniado  */
const interlineado = document.getElementById("interlinea-input");
const ceroPuntoOcho = document.getElementById("0.8");
const uno = document.getElementById("1");
const unoPuntoDos = document.getElementById("1.2");
const unoPuntoCinco = document.getElementById("1.5");
const dos = document.getElementById("2");
const dosPuntoCinco = document.getElementById("2.5");

interlineado.addEventListener('change', () => {
    cambioInterlineado(interlineado);
});

const cambioInterlineado = (interlineado) => {
    if (interlineado.value === "0.8"){
        textoArriba.style.lineHeight  = "0.8";
        textoAbajo.style.lineHeight  = "0.8";
    }
    if (interlineado.value === "1"){
         textoArriba.style.lineHeight  = "1";
        textoAbajo.style.lineHeight  = "1";
    }
    if (interlineado.value === "1.2"){
        textoArriba.style.lineHeight  = "1.2";
        textoAbajo.style.lineHeight  = "1.2";
    }
    if (interlineado.value === "1.5"){
        textoArriba.style.lineHeight  = "1.5";
        textoAbajo.style.lineHeight  = "1.5";
    }
    if (interlineado.value === "2"){
        textoArriba.style.lineHeight  = "2";
        textoAbajo.style.lineHeight  = "2";
    }
    }
    if (interlineado.value === "2.5"){
        textoArriba.style.lineHeight  = "2.5";
        textoAbajo.style.lineHeight  = "2.5";
    }

/* DESCARGAR MEME */

// Selecciona el elemento HTML con el ID 'button-descarga' y lo asigna a la variable 'botonDescarga'

// Selecciona el elemento HTML con el ID 'contenedor-meme' y lo asigna a la variable 'contenedorMeme'

// Declara una función llamada 'descargarMeme'
function descargarMeme () {
    // Utiliza la biblioteca 'domtoimage' para convertir el 'contenedorMeme' en un blob de imagen
    domtoimage.toBlob(memeCompleto).then(function (blob) {
        // Usa la función 'saveAs' para descargar el blob como un archivo PNG llamado 'mi-meme.png'
        saveAs(blob, 'mi-meme.png');
    });
}    
// Agrega un event listener al 'botonDescarga' que llama a la función 'descargarMeme' cuando se hace clic
botonDescarga.addEventListener('click', descargarMeme);


/* Boton Descarga */
/*
botonDescarga.addEventListener("click", () => {
    const contenidoMeme = document.querySelector(".contenedor-meme");
    config = {
      quality: 1, // sin bajar la calidad
    };
  
    if (!contenidoMeme) {
      console.error("Elemento no encontrado");
      return;
    }
  
    domtoimage
      .toBlob(contenidoMeme)
      .then(function (blob) {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.download = "captured.png";
        link.href = url;
        link.click();
        window.URL.revokeObjectURL(url);
      })
      .catch(function (error) {
        console.error("Error al convertir a imagen:", error);
      });
  });
*/