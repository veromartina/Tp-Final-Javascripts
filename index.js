// boton cambio Modo claro/oscuro
let isDarkMode = true;

function applyDarkMode() {
    const toggleDarkModeButton = document.getElementById("toggleDarkModeButton");
    const botonText =  document.getElementById("panel-img-button");
    const botonImg =  document.getElementById("text-panel-button");
    const botonDescarga = document.getElementById("boton-descarga-meme")
    const botonModo = document.getElementById("round");
    const textoMemeSuperior = document.getElementById ("texto-superior")
    const textoMemeInferior = document.getElementById ("texto-inferior")
    const contenedorMeme = document.getElementById("contenedor-editor")


    if (isDarkMode){
        document.body.style.backgroundColor = "#140152";
        document.body.style.color = "#ebebeb";
        botonText.style.color = "#ebebeb";
        botonImg.style.color = "#ebebeb";
        botonDescarga.style.color = "#ebebeb";
        botonModo.style.backgroundColor ="#0d00a4"
        botonImg.style.backgroundColor = "#0d00a4";
        botonText.style.backgroundColor = "#0d00a4";
        botonDescarga.style.backgroundColor = "#0d00a4";
        textoMemeSuperior.style.backgroundColor =  "#0d00a4";
        textoMemeInferior.style.backgroundColor = "#0d00a4";
        contenedorMeme.style.backgroundColor = "#22007c";
   
   
    } else {
        document.body.style.backgroundColor = "#ffe3e0";
        document.body.style.color = "#997b66";
        botonText.style.color = "#997b66";
        botonImg.style.color = "#997b66";
        botonImg.style.backgroundColor = "#FEC89A";
        botonText.style.backgroundColor = "#FEC89A";
        botonDescarga.style.backgroundColor = "#FEC89A";
        botonDescarga.style.color = "#997b66";
        botonModo.style.backgroundColor = "#FEC89A";
        textoMemeSuperior.style.backgroundColor = "#FEC89A";
        textoMemeInferior.style.backgroundColor = "#FEC89A";
        contenedorMeme.style.backgroundColor = "#FCD5CE";
   
   
        
    }
}
applyDarkMode(); // apply initial dark mode state

function toggleDarkMode(){
    isDarkMode = !isDarkMode;
    applyDarkMode();
}


