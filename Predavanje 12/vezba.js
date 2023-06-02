const text = document.getElementById("text");
const city = document.getElementById("arr");
const button = document.getElementById("btn");
const buttonShow = document.getElementById("btnShow");
const buttonAdd = document.getElementById("btnAdd");
const buttonShowCity = document.getElementById("btnShowCity");
// let paragraph = document.createElement("h2");
// paragraph.innerHTML = prompt("What's your name");
// text.appendChild(paragraph);
let cities = [];

// Prvi nacin za upis gradova i kasnije prikazivanje
button.addEventListener("click", function click(event) {
	let title = document.createElement("h2");
	title.innerHTML = prompt("Add your city");
	buttonShow.addEventListener("mouseover", function mouseover() {
		text.appendChild(title);
	});
});
// Drugi nacin za upis gradova i njihovo prikazivanje
// Drugi nacin je preko array, tacnije napravimo array u koji cemo kasnije pushati elemente i na odredjeno dugme ih samo prikazivati
// Drugi nacin koda je mnogo funkcionalniji i optimizaniji u odnosu na prvi kod
buttonAdd.addEventListener("click", function click() {
	let title = document.createElement("h2");
	title.innerHTML = prompt("Add your city");
	cities.push(title);
	buttonShowCity.addEventListener("click", function click() {
		for (let object in cities) {
			city.appendChild(cities[object]);
		}
	});
});
