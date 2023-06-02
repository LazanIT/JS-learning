const cities = document.getElementById("cities");
const cold = document.getElementById("cold");
const warm = document.getElementById("warm");
const coldButton = document.getElementById("coldCities");
const warmButton = document.getElementById("warmCities");
const addButton = document.getElementById("addCity");
const showAllCities = document.getElementById("showAllCities");
const removeButton = document.getElementById("remove");

let objects = [];

addButton.addEventListener("click", function () {
	let title = document.createElement("h4");
	title.style.color = "purple";
	title.style.fontSize = "2rem";
	title.innerHTML = prompt("Add your city and temperature");
	objects.push(title);
});

showAllCities.addEventListener("click", function () {
	cities.innerHTML = "";
	for (let i = 0; i < objects.length; i++) {
		cities.appendChild(objects[i]);
	}
});

coldButton.addEventListener("click", function () {
	cold.innerHTML = "";
	for (let i = 0; i < objects.length; i++) {
		let temperature = parseInt(objects[i].innerHTML.split(" ")[1]);
		if (temperature <= 12) {
			cold.appendChild(objects[i]);
		}
	}
});

warmButton.addEventListener("click", function () {
	warm.innerHTML = "";
	for (let i = 0; i < objects.length; i++) {
		let temperature = parseInt(objects[i].innerHTML.split(" ")[1]);
		if (temperature > 12) {
			warm.appendChild(objects[i]);
		}
	}
});
