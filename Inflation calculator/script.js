let inflationRate = document.querySelector("#inflationRate");
let money = document.querySelector("#money");

function inflationCalculator() {
	inflationRate = parseFloat(inflationRate.value);
	money = parseFloat(money.value);
	// console.log("RADI");

	console.log(typeof inflationRate); // Proveravmao kod su sada tiba da li smo ih sada pretvorili

	// console.log(inflationRate.value);
	// Za DIV smo imali .innerText a posto je ovo input imamo value
	// console.log(money.value);

	console.log(inflationRate + money);
}
