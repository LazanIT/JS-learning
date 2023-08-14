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
		price = price.substring(1);

		price = parseInt(price);

		quantity = parseInt(quantity);

		let total = price * quantity;
		console.log(total);

		cartItems.innerHTML += `<div class="cart-single-item"Proizvod: ${name} <br> Cena: ${price} <br> Kolicina: ${quantity} <br> Total: ${total} <br> <hr> </div>`;
		event.innerText = "Dodato";
		event.setAttribute("disabled", "true");
		event.classList.remove("hover");
	} else {
		alert("Odaberi kolicinu");
		return;
	}
}
