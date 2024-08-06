
# Proyectos en Javascript

Este repositorio contiene una colección de proyectos desarrollados en JavaScript. Cada proyecto está diseñado para abordar diferentes aspectos y niveles de complejidad en el desarrollo con JavaScript.

# Calculador de IMC
Este proyecto fue creado para practicar conocimientos sobre manipulacion del DOM en Javascript.

## Vista del proyecto

![App Screenshot](https://i.imgur.com/0AoENJU.png)

## Codigo JS --> Calculador de IMC

```javascript
//Funcion para crear una nueva imagen tomando la ruta de la imagen y el ancho de la imagen como parametro.
function createNewImage(path, width){
    nueva_imagen = document.createElement("img")
    nueva_imagen.src = path
    nueva_imagen.style.width = width
    return nueva_imagen
}
```

```javascript
//Funcion para crear una nav-bar
function nav_bar(){
    barra_navegacion = document.createElement("nav")

    logo_anchor = document.createElement("a")
    logo_anchor.setAttribute("href", "#")
    logo_anchor.textContent = "Calculadora IMC"

    logo_img = createNewImage("./images/weight.svg")

    barra_navegacion.append(logo_anchor)
    barra_navegacion.append(logo_img)

    return barra_navegacion
}

```

```javascript
//Funcion para crear un formulario
function form(){
    formulario = document.createElement("form")
    labelPeso = document.createElement("label")
    inputPeso = document.createElement("input")
    labelAltura = document.createElement("label")
    inputAltura = document.createElement("input")
    botonEnviar = document.createElement("button")
    image_weight = weightImg()
    image_weight.className = "form-image"

    labelPeso.setAttribute("for", "inputPeso")
    inputPeso.setAttribute("id", "inputPeso")
    inputPeso.setAttribute("placeholder", "Inserta tu peso en Kg")
    inputPeso.autocomplete = "off"
    labelAltura.setAttribute("for", "inputlAltura")
    inputAltura.setAttribute("id", "inputAltura")
    inputAltura.setAttribute("placeholder", "Inserta tu altura en m")
    inputAltura.autocomplete = "off"
    inputPeso.setAttribute("type", "text")
    labelAltura.setAttribute("type", "text")
    botonEnviar.setAttribute("type","submit")
    botonEnviar.textContent = "Enviar"


    formulario.append(labelPeso, inputPeso, labelAltura, inputAltura, botonEnviar, image_weight)
    return formulario
}
```

```javascript
//Funcion para crear una imagen en especifico
function weightImg(){
    const imagen = createNewImage("./images/weight.svg")
    imagen.className = "weightMain"
    return imagen
}
```

```javascript
//Funcion para crear un contenedor con la etiqueta main
function container(){
    const mainContainer = document.createElement("main")
    const formulario = form()
    const bottomImage = weightImg()
    mainContainer.append(formulario, bottomImage)
    return mainContainer
}
```

```javascript
//Funcion para crear el contenedor de resultados
function resultsContainer(){
    const div_container = document.createElement("div")
    div_container.className = "results-container"
    contenedor_header = document.createElement("header")
    contenedor_footer = document.createElement("footer")
    left = document.createElement("p")
    right = document.createElement("p")
    footer_text = document.createElement("span")
    left.textContent = "itemRight"
    right.textContent = "itemLeft"
    footer_text.textContent = "Label text"
    
    contenedor_header.append(left, right)
    contenedor_footer.append(footer_text)

    emoji = createNewImage("./images/error-emoji.svg","250px")
    emoji.className = "emoji"

    div_container.append(contenedor_header, emoji,contenedor_footer)
    return div_container
}
```

```javascript
//Funcion que inicializa el template de la aplicacion
function template(){
    const plantilla  = document.querySelector("body")
    
    plantilla.append(nav_bar())
    plantilla.append(container())
    escucharEvento()
    return plantilla
}

template()
```

```javascript
//Funcion que agrega evento tipo submit al formulario
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

```

```javascript
//Funcion que obtiene los resultados y los plasma en el contenedor de resultados
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
    const span = document.querySelector("span")

    const imagen = document.querySelector(".emoji")
    secondElement.textContent = imc + "kg"
    firstElement.textContent = inputAltura + "m"

    if (imc<18.5){
        console.log("Bajo peso")
        imagen.src = "./images/bajo-peso.svg"
        span.textContent = `Bajo peso: ${imc}`
    }else if(imc>=18.5 && imc<=24.9){
        console.log("Saludable")
        imagen.src = "./images/saludable.svg"
        span.textContent = `Saludable: ${imc}`
    }else if(imc>=25 && imc<=29.9){
        console.log("Sobrepeso")
        imagen.src = "./images/sobrepeso.svg"
        span.textContent = `Sobrepeso: ${imc}`
    }else if(imc>30){
        console.log("obesidad")
        imagen.src = "./images/obesidad.svg"
        span.textContent = `Obesidad: ${imc}`
    }else{
        console.log("error")
        firstElement.textContent = "Error"
        imagen.src = "./images/error-emoji.svg"
        span.textContent = "No enviado"
    }


    return results_contenedor
}

```

