// alert("Js radi");

let allTotal = 0;

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

		allTotal += total;

		let totalDiv = document.querySelector(".total");

		cartItems.innerHTML += `<div class="cart-single-item"> <h3>${name}</h3> <p>$${price} x ${quantity} = $<span>${total}</span> </p> <button type="button" class="remove-item" onclick="removeFromCart(this)"> Remove Item </button> </div>`;
		event.innerText = "Dodato";
		event.setAttribute("disabled", "true");
		event.classList.remove("hover");

		totalDiv.innerHTML = `Ukupna cena je : ${allTotal} dolara`;
	} else {
		alert("Odaberi kolicinu");
		return;
	}
}
function removeFromCart(element) {
	let mainElement = element.closest(".cart-single-item");
	let price = mainElement.querySelector("p span").innerText;
	let name = mainElement.querySelector("h3").innerText;
	let vegetables = document.querySelectorAll(".single-item");
	price = parseInt(price);

	allTotal -= price;
	let totalDiv = document.querySelector(".total");

	totalDiv.innerHTML = `Ukupna cena je : ${allTotal} dolara`;
	mainElement.remove();
}
