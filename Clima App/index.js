// Obtener el clima actual mediante el nombre de la ciudad

// Obtenemos la informacion climatica de una ciudad mediante la modificacion de esta url

//Ejemplo de una respuesta 
// {
//     coord: { lon: -99.1277, lat: 19.4285 },
//     weather: [
//       {
//         id: 501,
//         main: 'Rain',
//         description: 'lluvia moderada',
//         icon: '10d'
//       }
//     ],
//     base: 'stations',
//     main: {
//       temp: 59.95,
//       feels_like: 59.74,
//       temp_min: 59.95,
//       temp_max: 62.11,
//       pressure: 1013,
//       humidity: 87,
//       sea_level: 1013,
//       grnd_level: 761
//     },
//     visibility: 8047,
//     wind: { speed: 8.05, deg: 80 },
//     rain: { '1h': 0.51 },
//     clouds: { all: 100 },
//     dt: 1727377957,
//     sys: {
//       type: 2,
//       id: 47729,
//       country: 'MX',
//       sunrise: 1727353574,
//       sunset: 1727396940
//     },
//     timezone: -21600,
//     id: 3530597,
//     name: 'Mexico City',
//     cod: 200
//   }



const ciudad = "Vancouver"
const url = `https://open-weather13.p.rapidapi.com/city/${ciudad}/ES/`
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
    .then(datos => {
        console.log(datos["coord"])
        console.log(datos["weather"])
        console.log(datos["main"])
        console.log(datos["name"])
        console.log(datos["sys"]["country"])
    })
    .catch(error => console.log(error))



// Aqui utilizaremos la API de Google imagenes para traernos las banderas de los paises