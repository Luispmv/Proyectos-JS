function createNewImage(path, width){
    nueva_imagen = document.createElement("img")
    nueva_imagen.src = path
    nueva_imagen.style.width = width
    return nueva_imagen
}


function nav_bar(){
    //Creando una etiqueta nav
    barra_navegacion = document.createElement("nav")

    //Creando un anchor con sus atributos
    logo_anchor = document.createElement("a")
    logo_anchor.setAttribute("href", "#")
    logo_anchor.textContent = "Calculadora IMC"

    //Creando una imagen
    logo_img = createNewImage("./images/weight.svg")
    // logo_img = document.createElement("img")
    // logo_img.setAttribute("alt","hola")
    // logo_img.setAttribute("src", "./images/weight.svg")

    //Colocando anchor e img como hijos de nav
    barra_navegacion.append(logo_anchor)
    barra_navegacion.append(logo_img)

    return barra_navegacion
}

function form(){
    //Creando las etiquetas
    formulario = document.createElement("form")
    labelPeso = document.createElement("label")
    inputPeso = document.createElement("input")
    labelAltura = document.createElement("label")
    inputAltura = document.createElement("input")
    botonEnviar = document.createElement("button")
    image_weight = weightImg("150px")
    image_weight.className = "form-image"

    //Creando los atributos
    labelPeso.setAttribute("for", "inputPeso")
    inputPeso.setAttribute("id", "inputPeso")
    inputPeso.setAttribute("placeholder", "Inserta tu peso en Kg")
    labelAltura.setAttribute("for", "inputlAltura")
    inputAltura.setAttribute("id", "inputAltura")
    inputAltura.setAttribute("placeholder", "Inserta tu altura en m")
    inputPeso.setAttribute("type", "text")
    labelAltura.setAttribute("type", "text")
    botonEnviar.setAttribute("type","submit")
    botonEnviar.textContent = "Enviar"


    //Añadiendo los elementos a form
    formulario.append(labelPeso, inputPeso, labelAltura, inputAltura, botonEnviar, image_weight)
    return formulario
}

function weightImg(width="250px"){
    const imagen = createNewImage("./images/weight.svg")
    imagen.className = "weightMain"
    return imagen
}

function container(){
    const mainContainer = document.createElement("main")
    const formulario = form()
    const bottomImage = weightImg()
    mainContainer.append(formulario, bottomImage)
    return mainContainer
}

function resultsContainer(){
    const div_container = document.createElement("div")
    div_container.className = "results-container"
    // div_container.classList.add("results-container","hidden")
    contenedor_header = document.createElement("header")
    left = document.createElement("p")
    right = document.createElement("p")
    left.textContent = "itemRight"
    right.textContent = "itemLeft"
    
    contenedor_header.append(left, right)

    emoji = createNewImage("./images/error-emoji.svg","250px")
    emoji.className = "emoji"

    div_container.append(contenedor_header, emoji)
    return div_container
}


function template(){
    const plantilla  = document.querySelector("body")
    
    plantilla.append(nav_bar())
    plantilla.append(container())
    escucharEvento()
    return plantilla
}

template()

// function eventoEnviado(){
//     const boton = document.querySelector("button")
//     boton.addEventListener("click",(event)=>{
//         event.preventDefault()
//         get_results()
//     })
// }
function escucharEvento(){
    const form = document.querySelector("form")
    const boton = document.querySelector("button")
    let boton_disabled = boton.disabled
    form.addEventListener("submit",(event)=>{
        event.preventDefault()
        get_results()
        boton.disabled = true
        if (boton.disabled){
            boton.style.opacity = "0.5"
        }
    })
}



function get_results(){ 
    const inputPeso = parseFloat(document.querySelector("#inputPeso").value)
    const inputAltura = parseFloat(document.querySelector("#inputAltura").value)
    
    let imc = (inputPeso / inputAltura **2).toFixed(2)

    image_bottom = document.querySelector(".weightMain")
    const results_contenedor = resultsContainer()
    image_bottom.classList.add("hidden")
    console.log("click")
    main_container = document.querySelector("main")
    main_container.append(results_contenedor)

    const header = document.querySelector("header")
    const firstElement = header.firstElementChild
    const secondElement = header.lastElementChild
    const imagen = document.querySelector(".emoji")
    secondElement.textContent = imc + "kg"

    if (imc<18.5){
        console.log("Bajo peso")
        firstElement.textContent = "Bajo peso"
        imagen.src = "./images/bajo-peso.svg"
    }else if(imc>=18.5 && imc<=24.9){
        console.log("Saludable")
        firstElement.textContent = "Saludable"
        imagen.src = "./images/saludable.svg"
    }else if(imc>=25 && imc<=29.9){
        console.log("Sobrepeso")
        firstElement.textContent = "Sobrepeso"
        imagen.src = "./images/sobrepeso.svg"
    }else{
        console.log("obesidad")
        firstElement.textContent = "Obesidad"
        imagen.src = "./images/obesidad.svg"
    }

    return results_contenedor
}

