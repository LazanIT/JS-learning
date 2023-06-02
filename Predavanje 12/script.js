// console.log("test 123");

document.addEventListener("DOMContentLoaded", function () {
	let cities = [
		{
			name: "Beograd",
			temperature: -2,
			weather: "snowy",
		},
		{
			name: "Novi sad",
			temperature: 5,
			weather: "sunny",
		},
	];

	for (let i = 0; i < cities.length; i++) {
		const cityObject = cities[i];
		let weatherDiv = document.getElementById("weathers");
		let cityHTML = "";

		for (let key in cityObject) {
			cityHTML += `<p>${key}: ${cityObject[key]}</p>`;
		}

		weatherDiv.innerHTML += cityHTML;
	}
});
