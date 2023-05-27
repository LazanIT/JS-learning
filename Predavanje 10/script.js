// console.log("test 123");
const button = document.getElementById("btn");
const buttonAge = document.getElementById("btnAge");

button.addEventListener("click", function OnClick(event) {
	// I ovde mi pozivamo funkcije, ali su to anonimne funkcije
	console.log("test");
	button.style.border = "4px double red";
});
buttonAge.addEventListener("click", age);

// Functions
// Uloga funkcije je da grupise neku celinu koda koja treba da se izvrsi
// Samim tim izbegavamo ponavljanje tog koda
function sayHello() {
	let name = prompt("Tell me your name");
	alert(name);
}

function age(yearOld) {
	let birthday = prompt("tell me your age");
	if (yearOld < 18) {
		alert("You have under 18");
	} else if (yearOld == 18) {
		alert("You have 18");
	} else {
		alert("You have more than 18");
	}
}
