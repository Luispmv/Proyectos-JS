const main = document.querySelector("main")

function toggleBarraLateral(){
    const botonNewTask = document.querySelector("#btn-new-task")
    const botonEdit = document.querySelector(".edit")
    const barra_lateral = document.querySelector(".nav-toggle")
    FormularioCrearTarea()
    botonNewTask.addEventListener("click", (event)=>{
        barra_lateral.classList.toggle("hidden")
    })
    const close = document.getElementById("close-aside")
    close.addEventListener("click", ()=>{
        barra_lateral.classList.toggle("hidden")
    })
}
toggleBarraLateral()

function FormularioCrearTarea(){
    const nuevo_formulario = crearFormulario("Crear nueva Tarea", "Crear tarea")
    const barra_lateral = document.querySelector(".nav-toggle")
    barra_lateral.append(nuevo_formulario)
    const tituloTarea = nuevo_formulario.querySelector("input")
    const textArea = nuevo_formulario.querySelector("textarea")
    nuevo_formulario.addEventListener("submit", (event)=>{
        event.preventDefault()
        const nuevaTarea = contenedorTarea(tituloTarea.value, textArea.value)
        main.append(nuevaTarea)
        barra_lateral.classList.toggle("hidden")
        nuevo_formulario.reset()
    })
    return nuevo_formulario
}



function contenedorTarea(value, value2){
    const taskContainer = document.createElement("div")
    taskContainer.className = "task-container"
    const headerTask = document.createElement("header")
    let tituloTarea = document.createElement("h1")
    tituloTarea.textContent = value
    let textArea = document.createElement("textarea")
    textArea.textContent = value2


    const options = document.createElement("div")
    options.className = "options"

    const editButton = document.createElement("button")
    const checkButton = document.createElement("button")
    const deleteButton = document.createElement("button")

    editButton.name = "edit"
    checkButton.name = "complete"
    deleteButton.name = "delete"

    editButton.className = "edit"

    const editButtonImage = crearImagen("./images/pencil.svg")
    const checkButtonImage = crearImagen("./images/complete.svg")
    const deleteButtonImage = crearImagen("./images/delete.svg")

    editButton.append(editButtonImage)
    checkButton.append(checkButtonImage)
    deleteButton.append(deleteButtonImage)

    editButton.addEventListener("click",()=>{
        console.log(editButton.name)
    })

    checkButton.addEventListener("click",()=>{
        console.log(checkButton.name)
    })
    deleteButton.addEventListener("click", ()=>{
        console.log(deleteButton.name)
    })

    options.append(editButton, checkButton, deleteButton)

    headerTask.append(tituloTarea, options)

    taskContainer.append(headerTask, textArea)


    return taskContainer
}


function crearImagen(path){
    nueva_imagen = document.createElement("img")
    nueva_imagen.src = path
    return nueva_imagen
}


function crearFormulario(encabezado, textButton){
    //Creando etiquetas
    const formulario = document.createElement("form")
    const h1 = document.createElement("h1")
    const div1 = document.createElement("div")
    const div2 = document.createElement("div")
    const label_input = document.createElement("label")
    const inputTareaTitle = document.createElement("input")
    const label_text = document.createElement("label")
    const textArea = document.createElement("textarea")
    const submitButton = document.createElement("button")
    

    //Agregando atributos
    label_input.setAttribute("for", "tareaTitle")
    inputTareaTitle.setAttribute("id", "tareaTitle")
    inputTareaTitle.setAttribute("type", "text")
    inputTareaTitle.setAttribute("name", "tareaTitle")
    inputTareaTitle.required = true
    inputTareaTitle.placeholder = "Nombre de la tarea"
    inputTareaTitle.autocomplete = "off"

    label_text.setAttribute("for", "textTarea")
    textArea.id = "textTarea"
    textArea.name = "textTarea"
    textArea.rows = 4
    textArea.required = true

    h1.textContent = encabezado
    submitButton.type = "submit"
    submitButton.textContent = textButton

    //Agregando etiquetas padre e hijo
    div1.append(label_input, inputTareaTitle)
    div2.append(label_text, textArea)

    formulario.append(h1, div1, div2, submitButton)
    return formulario
}
