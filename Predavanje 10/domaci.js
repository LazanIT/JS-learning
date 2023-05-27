// console.log(1234);
const buttonBuy = document.getElementById("btnBuy");
const buyPrice = document.getElementById("price");
let price = buyPrice.getAttribute("data-price");
// console.log(price);

function calculation(finalPrice) {
	finalPrice = price * (20 / 100);
	let totalPrice = parseInt(price) + finalPrice;
	alert("Cena sa PDV-om je" + "\n" + totalPrice);
}
buttonBuy.addEventListener("click", calculation);
