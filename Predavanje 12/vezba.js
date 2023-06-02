const text = document.getElementById("text");
let paragraph = document.createElement("h2");
paragraph.innerHTML = prompt("What's your name");
text.appendChild(paragraph);

const button = document.getElementById("btn");
const buttonsShow = document.getElementById("btnShow");
button.addEventListener("click", function click(event) {
	let title = document.createElement("h2");
	title.innerHTML = prompt("Add your city");
	buttonsShow.addEventListener("mouseover", function mouseover() {
		text.appendChild(title);
	});
});
