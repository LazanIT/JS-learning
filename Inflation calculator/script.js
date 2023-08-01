let inflationRate = document.querySelector("#inflationRate");
let money = document.querySelector("#money");
inflationRate = parseFloat(inflationRate);
money = parseFloat(money);
function inflationCalculator() {
	// console.log("RADI");

	console.log(inflationRate.value);
	// Za DIV smo imali .innerText a posto je ovo input imamo value
	console.log(money.value);

	console.log(inflationRate.value + money.value);
}
