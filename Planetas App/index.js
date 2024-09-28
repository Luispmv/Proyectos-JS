// Ejemplo de como consumiremos la api de planetas para poder mostrarlo en un layout
const planeta = 7
const url = `https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/${planeta}`

const main = document.getElementById("content")


const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '8def248eb2msh2560450ba75fe01p10366bjsn318d3ff02799',
		'x-rapidapi-host': 'planets-info-by-newbapi.p.rapidapi.com'
	}
};

async function obtenerDatos(urlApi, metodo) {
    const response = await fetch(urlApi, metodo)
    const datos = await response.json()
    return datos
}

function planetItem(source){
    image = document.createElement("img")
    image.src = source
    return image
}

let nombre, description, imgsrc, imgalt
obtenerDatos(url, options)
    .then(datos => {
        nombre = datos["name"]
        description = datos["description"]
        imgsrc = datos["imgSrc"]["img"]
        imgalt = datos["imgSrc"]["imgDescription"]
        return datos
    })
    .then(()=>{
        let call = planetItem(imgsrc)
        main.append(call)
    })
    .catch(error => console.log(error))
