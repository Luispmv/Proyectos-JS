const boton = document.querySelector("#btn-new-task")
const main = document.querySelector("main")

console.dir(boton)

boton.addEventListener("click", (event)=>{
    console.log("Hola")
    main.append(nueva_tarea())
})


function nueva_tarea(){
    const taskContainer = document.createElement("div")
    taskContainer.className = "task-container"
    const headerTask = document.createElement("header")
    const tituloTarea = document.createElement("h1")
    tituloTarea.textContent = "titulo tarea"
    const options = document.createElement("div")
    options.className = "options"

    const editButton = document.createElement("button")
    const checkButton = document.createElement("button")
    const deleteButton = document.createElement("button")

    const editButtonImage = crearImagen("./images/pencil.svg")
    const checkButtonImage = crearImagen("./images/complete.svg")
    const deleteButtonImage = crearImagen("./images/delete.svg")

    editButton.append(editButtonImage)
    checkButton.append(checkButtonImage)
    deleteButton.append(deleteButtonImage)

    options.append(editButton, checkButton, deleteButton)

    headerTask.append(tituloTarea, options)

    const textArea = document.createElement("textarea")

    taskContainer.append(headerTask, textArea)


    return taskContainer
}

function crearImagen(path){
    nueva_imagen = document.createElement("img")
    nueva_imagen.src = path
    return nueva_imagen
}

const template = `
<div class="task-container">
<header>
    <h1>Titulo tarea</h1>
    <div class="options">
        <button><img src="./images/pencil.svg" alt="edit"></button>
        <button><img src="./images/complete.svg" alt="complete"></button>
        <button><img src="./images/delete.svg" alt="delete"></button>
    </div>
</header>
<textarea name="" id=""></textarea>
</div>
`