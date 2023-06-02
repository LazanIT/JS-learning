const cities = document.getElementById("cities");
const addButton = document.getElementById("addCity");
const showAllCities = document.getElementById("showAllCities");

let objects = [];
addButton.addEventListener("click", function click() {
	let title = document.createElement("h4");
	title.style.color = "purple";
	title.style.fontSize = "3rem";
	title.innerHTML = prompt("Add your city and temperature");
	showAllCities.addEventListener("click", function click() {
		cities.appendChild(title);
	});
});
