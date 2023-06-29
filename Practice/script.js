const ColorOne = "#026873";
const ColorTwo = "#F29484";

let containerElement = document.getElementById("main-container");
let button = document.getElementById("btn");

button.addEventListener("click", changeBackground);

let counter = 0;

function changeBackground(param) {
	counter++;

	if (counter % 2 == 1) {
		containerElement.style.backgroundColor = ColorOne;
	} else {
		containerElement.style.backgroundColor = ColorTwo;
	}
}
