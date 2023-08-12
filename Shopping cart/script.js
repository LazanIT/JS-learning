// alert("Js radi");

function addToCart(event) {
	let input = event.previousElementSibling.value;

	let mainElement = event.closest(".single-item");

	// querySelector - mi ne moramo raditi samo na document, nego mozemo raditi na celom skupu HTML elemenata
	let price = mainElement.querySelector(".price").innerText; // Pomocu innerText izvlacimo cenu

	console.log(price.value);
}
