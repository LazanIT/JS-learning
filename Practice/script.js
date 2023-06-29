// Definisanje varijabli za boje
const ColorOne = "#026873";
const ColorTwo = "#F29484";

// Uzimanje ID elemenata iz html-a
let containerElement = document.getElementById("main-container");
let button = document.getElementById("btn");

// Na dugme smo dodali eventListener click, koji pokrece funkciju changeBackground
button.addEventListener("click", changeBackground);

// Definisali smo brojac koji ce nam sluziti za bojenje pozadinje
let counter = 0;

// Funckcija za menjanje boje
function changeBackground(param) {
	// Na samom pocetku povecavamo brojac za 1, kako bi postavio main boju
	counter++;

	// Ako je brojac jednako jedan menjamo boju u boju dva i sledecim klikom u boju jedan
	if (counter % 2 == 1) {
		containerElement.style.backgroundColor = ColorOne;
	} else {
		containerElement.style.backgroundColor = ColorTwo;
	}
}
