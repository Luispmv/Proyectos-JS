const url = `https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/`;

const main = document.getElementById("content");

const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '8def248eb2msh2560450ba75fe01p10366bjsn318d3ff02799',
        'x-rapidapi-host': 'planets-info-by-newbapi.p.rapidapi.com'
    }
};

async function obtenerDatos(urlApi, metodo) {
    const response = await fetch(urlApi, metodo);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const datos = await response.json();
    return datos;
}

function planetItem(source, name, text) {
    const container = document.createElement("div");
    const image = document.createElement("img");
    const h1 = document.createElement("h1");
    const p_label = document.createElement("p");
    const article = document.createElement("article")

    h1.textContent = name;
    image.src = source;
    image.alt = name; 
    p_label.textContent = text;


    container.appendChild(image);
    container.appendChild(h1);
    article.appendChild(p_label);
    container.appendChild(article)

    container.className = "planets";

    return container;
}

obtenerDatos(url, options)
    .then(planets => {
        planets.forEach(planet => {
            const { name, description, imgSrc: { img, imgDescription } } = planet;
            let call = planetItem(img, name, description);
            main.append(call);
        });
    })
    .catch(error => console.log(`Error fetching data: ${error}`));
