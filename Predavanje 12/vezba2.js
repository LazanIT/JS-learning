const city = document.getElementById("city");
const addCity = document.getElementById("addCity");
const showCity = document.getElementById("showCity");

const cities = [];
addCity.addEventListener("click", function click() {
	var object = prompt("Type here ur city");
	cities.push(object);
});
showCity.addEventListener("click", function click() {
	city.innerHTML = "";

	for (let key in cities) {
		city.innerHTML += cities[key];
	}
});
