// alert("Js radi");

function addToCart(event) {
	let input = event.previousElementSibling.value;

	let mainElement = event.closest(".single-item");

	// querySelector - mi ne moramo raditi samo na document, nego mozemo raditi na celom skupu HTML elemenata
	let price = mainElement.querySelector(".price").innerText; // Pomocu innerText izvlacimo cenu

	let name = mainElement.querySelector("h3").innerText;

	let quantity = mainElement.querySelector("input").value;

	let cartItems = document.querySelector(".cart-items");

	// Ubacujemo podatke u CART

	if (parseInt(quantity) > 0) {
		cartItems.innerHTML += "Dodato : " + name + "<br>";
	} else {
		alert("Odaberi kolicinu");
		return;
	}

	console.log(quantity);
}
