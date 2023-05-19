const btn = document.getElementById("btn");

btn.addEventListener("click", function onClick(event) {
	console.log(event.target);

	let color = prompt("Koju boju zelite");
	color = color.toLowerCase();

	if (color == "crvena") {
		btn.style.backgroundColor = "red";
	} else if (color == "plava") {
		btn.style.backgroundColor = "blue";
	} else {
		btn.style.backgroundColor = "green";
	}

	let colorText = prompt("Koju boju teksta zelite");
	colorText = colorText.toLocaleLowerCase();

	if (colorText == "plava") {
		btn.style.color = "blue";
	} else {
		btn.style.color = "black";
	}

	let width = prompt("Koju sirinu zelite");
	width = width.toLowerCase();
	if (width > 50) {
		btn.style.width = width + "px";
	} else {
		alert("Mora biti vece od 50px");
		exit();
	}

	let height = prompt("Koju visinu zelite");
	height = height.toLowerCase();
	if (height > 80) {
		btn.style.height = height + "px";
	} else {
		alert("Visina mora biti veca od 80px");
		exit();
	}
});

// Takodje toLowerCase(); mozemo pisati i odma kada definisemo varijablu za boju (prompt)
// Primer:
// let color = prompt("Koju boju zelite"); = let color = prompt("Koju boju zelite").toLowerCase();
