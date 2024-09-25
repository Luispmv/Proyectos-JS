const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCVRji0T4saBiMfHu763Ifbg&part=snippet%2Cid&order=date&maxResults=9';

const content = document.getElementById("content")
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '8def248eb2msh2560450ba75fe01p10366bjsn318d3ff02799',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options)
    const data = await response.json()
    return data;
}

async function displayContent() {
    try {
        const videos = await fetchData(url);
        if (!content) {
            throw new Error('El elemento de contenido no se encontró');
        }

        let view = `
        ${videos.items.map(video => `
        <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                </h3>
            </div>
        </div>
        `).slice(0, 4).join('')}
        `;
        content.innerHTML = view;
    } catch (error) {
        console.error('Error:', error);
    }
}

// Llamar a la función
displayContent();