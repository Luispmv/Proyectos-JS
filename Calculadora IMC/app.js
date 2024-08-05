body = document.querySelector("body")
body.style.display = "flex"
body.style.justifyContent = "center"
body.style.backgroundColor = "#26A9FA"

function nav_bar(){
    //Creando una etiqueta nav
    barra_navegacion = document.createElement("nav")

    //Creando un anchor con sus atributos
    logo_anchor = document.createElement("a")
    logo_anchor.setAttribute("href", "#")
    logo_anchor.textContent = "Calculadora IMC"
    logo_anchor.style.textDecoration = "none"
    logo_anchor.style.color = "white"

    //Creando una imagen
    logo_img = document.createElement("img")
    logo_img.setAttribute("alt","hola")
    logo_img.setAttribute("src", "./images/weight.svg")
    logo_img.style.display = "none"
    logo_img.style.width = "50px"

    //Colocando anchor e img como hijos de nav
    barra_navegacion.append(logo_anchor)
    barra_navegacion.append(logo_img)

    barra_navegacion.style.display = "flex"
    barra_navegacion.style.alignItems = "center"
    barra_navegacion.style.justifyContent = "space-between"
    barra_navegacion.style.padding = "1rem"
    barra_navegacion.style.width = "90%"
    barra_navegacion.style.backgroundColor = "#072259"
    barra_navegacion.style.textAlign = "center"
    barra_navegacion.style.fontSize = "35px"
    barra_navegacion.style.fontFamily = "fantasy"

     //Creando un media querie

    if (window.innerWidth < 768){
        logo_anchor.style.width = "100%"
        logo_anchor.style.textAlign = "center"
    }

    if(window.innerWidth >= 768){
        console.log(window.innerWidth)
        logo_img.style.display = "block"
    }
    
    if (window.innerWidth >= 1500){
        barra_navegacion.style.width = "1400px"    
    }


    return barra_navegacion
}

// function form(){
//     formulario = document.createElement("form")

// }


body.append(nav_bar())