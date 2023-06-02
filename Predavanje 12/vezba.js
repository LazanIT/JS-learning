const text = document.getElementById("text");
let paragraph = document.createElement("h2");
paragraph.innerHTML = prompt("What's your name");
text.appendChild(paragraph);

const button = document.getElementById("btn");

button.addEventListener("click", function click(event) {
	let title = document.createElement("h2");
	title.innerHTML = prompt("Add your city");
	text.appendChild(title);
});
