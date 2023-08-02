let inflationRate = document.querySelector("#inflationRate");
let money = document.querySelector("#money");
let years = document.querySelector("#years");

function inflationCalculator() {
	inflationRate = parseFloat(inflationRate.value);
	money = parseFloat(money.value);
	years = parseFloat(years.value);

	console.log(typeof inflationRate); // Proveravmao kod su sada tiba da li smo ih sada pretvorili

	// console.log(inflationRate.value);
	// Za DIV smo imali .innerText a posto je ovo input imamo value
	// console.log(money.value);

	// Formula za izracunavanje inflacije.
	let worth = money + money * (inflationRate / 100);

	for (let i = 1; i < years; i++) {
		worth += worth * (inflationRate / 100);
	}
	worth = worth.toFixed(2);
	console.log(worth);

	let newElement = document.createElement("h5");

	newElement.className = "new-value";

	newElement.innerText = `Danasnjih ${money} eura vredi isto kao ${worth} eura  za ${years} godina!`;

	let container = document.querySelector(".container");

	container.appendChild(newElement);
}
