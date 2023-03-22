const text = document.querySelector('[data-para]');
const but = document.querySelector('[data-btn]');

function renderInfo(response){
    text.innerText= response?.line
}

but.addEventListener("click" , ()=> {

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a741ee1738mshdfedc00eb834b55p1eba56jsn128f4b9a81ee',
		'X-RapidAPI-Host': 'pickup-lines-api.p.rapidapi.com'
	}
};

fetch('https://pickup-lines-api.p.rapidapi.com/pickupline', options)
	.then(response => response.json())
	.then(response => renderInfo(response))
	.catch(err => console.error(err));
})
