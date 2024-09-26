// Obtener el clima actual mediante el nombre de la ciudad

// Obtenemos la informacion climatica de una ciudad mediante la modificacion de esta url
const url = 'https://open-weather13.p.rapidapi.com/city/Ciudad de Mexico/ES';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '8def248eb2msh2560450ba75fe01p10366bjsn318d3ff02799',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
	}
};

async function obtenerDatos(urlApi, metodo) {
    const response = await fetch(urlApi, metodo)
    const datos = await response.json()
    return datos
}

obtenerDatos(url, options)
    .then(datos => console.log(datos))
    .catch(error => console.log(error))



