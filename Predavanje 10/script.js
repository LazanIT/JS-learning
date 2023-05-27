// console.log("test 123");
const button = document.getElementById("btn");

button.addEventListener("click", function OnClick(event) {
	// I ovde mi pozivamo funkcije, ali su to anonimne funkcije
	console.log("test");
	button.style.border = "4px double red";
});

// Functions
// Uloga funkcije je da grupise neku celinu koda koja treba da se izvrsi
function sayHello() {
	let name = prompt("Tell me your name");
	alert(name);
}
