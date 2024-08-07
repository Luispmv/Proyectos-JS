const main = document.querySelector("main")
const botonNewTask = document.querySelector("#btn-new-task")
const barra_lateral = document.querySelector(".nav-toggle")
const close = document.getElementById("close-aside")
const nav = document.querySelector("nav")
const tareas_completas = []
const tareas_eliminadas = []

const deletePop = document.querySelector(".deleted-task")
const completedPop = document.querySelector(".completed-task")

const formularioCrear = FormularioCrearTarea()
const formularioEditar = FormularioEditarTarea()

function abrirBarraLateral(){
    barra_lateral.append(formularioCrear, formularioEditar)
    barra_lateral.classList.toggle("hidden")

    formularioCrear.classList.remove("hidden")
    formularioEditar.classList.add("hidden")
}

function cerrarBarraLateral(){
    barra_lateral.classList.toggle("hidden")
}

botonNewTask.addEventListener("click", abrirBarraLateral)
close.addEventListener("click", cerrarBarraLateral)

function FormularioCrearTarea(){
    const nuevo_formulario = crearFormulario("Crear nueva Tarea", "Crear tarea")
    nuevo_formulario.className = "create"
    const barra_lateral = document.querySelector(".nav-toggle")
    const tituloTarea = nuevo_formulario.querySelector("input")
    const textArea = nuevo_formulario.querySelector("textarea")
  

    const new_todo_container = document.querySelector(".nuevo-todo-container")
    nuevo_formulario.addEventListener("submit", (event)=>{
        event.preventDefault()
        const nuevaTarea = contenedorTarea(tituloTarea.value, textArea.value)
        // main.append(nuevaTarea)
        // almacenarLocalmente(nuevaTarea)
        main.insertBefore(nuevaTarea, new_todo_container.nextSibling)
        // main.append(nuevaTarea)
        barra_lateral.classList.toggle("hidden")
        nuevo_formulario.reset()
    })
    return nuevo_formulario
}

function FormularioEditarTarea(){
    const nuevo_formulario = crearFormulario("Editar Tarea", "Editar tarea")
    nuevo_formulario.className = "edit"
    //Elementos del formulario
    const input = nuevo_formulario.querySelector("input")
    const textarea = nuevo_formulario.querySelector("textarea")

    nuevo_formulario.addEventListener("submit", (event)=>{
        //Elementos del contenedor a cambiar 
        const container = document.querySelector(".task-container")
        const tituloTask = container.querySelector("h1")
        const descriptionTask = container.querySelector("textarea")

        tituloTask.textContent = input.value
        descriptionTask.textContent = textarea.value

        event.preventDefault()
        // console.log(event.target)
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

    //Creando popovers
    const completePop = document.createElement("section")
    const deletePop = document.createElement("section")
    completePop.className = "complete-pop"
    deletePop.className = "delete-pop"

    const checkImage = crearImagen("./images/complete.svg")
    const deleteImage = crearImagen("./images/delete.svg")

    completePop.append(checkImage)
    deletePop.append(deleteImage)

    //Creando popovers

    const options = document.createElement("div")
    options.className = "options"

    const editButton = document.createElement("button")
    const checkButton = document.createElement("button")
    const deleteButton = document.createElement("button")

    editButton.name = "edit"
    checkButton.name = "complete"
    deleteButton.name = "delete"

    editButton.className = "edit"
    checkButton.className = "complete"
    deleteButton.className = "delete"

    const editButtonImage = crearImagen("./images/pencil.svg")
    const checkButtonImage = crearImagen("./images/complete.svg")
    const deleteButtonImage = crearImagen("./images/delete.svg")

    editButton.append(editButtonImage)
    checkButton.append(checkButtonImage)
    deleteButton.append(deleteButtonImage)

    // editButton.addEventListener("click" ,toggleBarraLateral())

    editButton.addEventListener("click", ()=>{
        console.log(editButton.name)
        const barra_lateral = document.querySelector(".nav-toggle")
        barra_lateral.classList.toggle("hidden")
        // barra_lateral.removeChild(barra_lateral.children[1])
        // console.dir(barra_lateral.children[1])
        if (barra_lateral.children[1].classList.contains("create")){
            barra_lateral.children[2].classList.remove("hidden")
            barra_lateral.children[1].classList.add("hidden")
        }
    })

    checkButton.addEventListener("click",()=>{
        console.log(checkButton.name)     
        showCompletePop()
    })

    deleteButton.addEventListener("click", ()=>{
        console.log(deleteButton.name)
        showDeletedPop()
    })

    options.append(editButton, checkButton, deleteButton)

    headerTask.append(tituloTarea, options)

    taskContainer.append(headerTask, textArea, completePop, deletePop)


    return taskContainer
}

function showCompletePop(){
    const task = document.querySelector(".task-container")
    const completePop = document.querySelector(".complete-pop")
    completePop.style.display = "flex"
    setTimeout(() => {
        completePop.style.display = "none"
        task.remove()
    }, 1000);
    // task.remove()
    tareas_completas.push(task)
    console.log(tareas_completas)
}

function showDeletedPop(){
    const task = document.querySelector(".task-container")
    const deletePop = document.querySelector(".delete-pop")
    deletePop.style.display = "flex"
    setTimeout(() => {
        deletePop.style.display = "none"
        task.remove()
    }, 1000);
    tareas_eliminadas.push(task)
    console.log(tareas_eliminadas)
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
    div2.className = "container-text"
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
