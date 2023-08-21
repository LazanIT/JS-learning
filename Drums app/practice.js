// alert("testing javascript");

// Stari nacin
function clickMe() {
	let a = 5;
	let b = 10;

	console.log(a + b);
}

clickMe();
// -----------------------------------
// Novi nacin
// Arrow function
// Kod arrow funkcija se koristi const ( Konstante koje se ne menjaju )
/*
    Sto znaci da mi funkcije necemo menjati, nego samo sta ta funkcija radi unutar sebe, tacnije njen sadrzaj
*/
const clickMeNew = (a, b) => {
	console.log(a + b);
};

clickMeNew(20, 30);

// Kada u zagradama imamo samo jedan argument, mozemo da napisemo funkciju bez zagrada () :

const clickMeNewTwo = (b) => {
	let a = 10;
	console.log(a + b);
};
clickMeNewTwo(100);

// Takodje kada imamo samo jednu liniju koda u funkciji, onda mozemo pisati bez viticastih zagrada { }
const clickMeNewThird = (a, b) => console.log(a + b);

clickMeNewThird(100, 500);

// EventListener's start

let btns = document.querySelectorAll("button");

btns.forEach((btn) => {
	// Event Listener koji ceka za klik, za svako dugme
	btn.addEventListener("click", (event) => {
		let clickedBtn = event.target; // Pomocu targeta dobijamo tacno koji je element kliknut

		console.log(clickedBtn.innerText);
	});
});

let googleLink = document.querySelector("#link");

googleLink.addEventListener("click", (event) => {
	event.preventDefault(); // Koristi nam da prekinemo prvobitnu funkciju ako je to moguce
	console.log(event.target);
});

// Primer preventDefaulta :

let forma = document.querySelector("form");

forma.addEventListener("submit", (event) => {
	event.preventDefault();
});

// Za select html element koristimo eventListener pod nazivom Change :

let opcije = document.querySelector("select");

opcije.addEventListener("change", (event) => {
	console.log(event.target.value);
});
