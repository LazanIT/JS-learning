// console.log("test 123");
const button = document.getElementById("btn");
const buttonAge = document.getElementById("btnAge");
const buttonSplit = document.getElementById("splitBtn");

button.addEventListener("click", function OnClick(event) {
	// I ovde mi pozivamo funkcije, ali su to anonimne funkcije
	console.log("test");
	button.style.border = "4px double red";
});
buttonAge.addEventListener("click", age);

buttonSplit.addEventListener("mouseover", split);

// Functions
// Uloga funkcije je da grupise neku celinu koda koja treba da se izvrsi
// Samim tim izbegavamo ponavljanje tog koda

// Prva vezba
function sayHello() {
	let name = prompt("Tell me your name");
	alert(name);
}

// Druga vezba
function age(yearOld) {
	let birthday = prompt("tell me your age");
	if (yearOld < 18) {
		alert("You have under 18");
	} else if (yearOld == 18) {
		alert("You have 18");
	} else if (yearOld > 18) {
		alert("You have more than 18");
	} else {
		alert("You have not entered an age");
	}
}

// Treca vezba
function split(numberOne, numberTwo) {
	numberOne = prompt("First number");
	numberTwo = prompt("Second number");
	if (numberTwo == 0) {
		alert("Number can't be zero");
	}
	alert(numberOne / numberTwo);
}
