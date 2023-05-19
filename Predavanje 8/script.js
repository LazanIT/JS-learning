const button = document.getElementById("btn");
const askMe = document.getElementById("askButton");
const oneBtn = document.getElementById("oneButton");
const randomButton = document.getElementById("randomButton");

const questions = ["Koliko je 2 + 2", "Glavni grad Srbije?", "Najveca reka?"];

button.addEventListener("click", function onClick(event) {
	button.style.backgroundColor = "red";
	button.style.color = "green";
});
/*  Kombinovanjem petlji, EventListenera i array-eva mozemo napraviti da kada se hover dugme da izbaci pitanja iz array-a i posle da ih ispisemo u konzoli  */
askMe.addEventListener("mouseover", function mouseover(event) {
	askMe.style.backgroundColor = "blue";
	let question;
	for (question in questions) {
		/*  Pomocu ove linije prelazimo preko niza pitanja koja postavljamo  */
		let answer = prompt(
			questions[question]
		); /* Definisemo ispisivanje pitanja pomocu prompt prozora */
		answer =
			answer.toLowerCase(); /* Postavljamo da svaki unet odgovor bude malim slovima */
		console.log(answer); /* Ispisujemo odgovor koji smo uneli  */
	}
});

// Dugme koje izvlaci jedno pitanje iz niza pitanja
oneBtn.addEventListener("click", function onClick(event) {
	oneBtn.style.fontSize = "4rem";
	let odgovor = prompt(questions[1]);
	odgovor = odgovor.toLowerCase();
	console.log(odgovor);
});

// Dugme koje generise nasumican broj, a nakon toga izvlaci pitanje iz niza pitanja, i postavlja ga korisniku
randomButton.addEventListener("click", function onClick(event) {
	randomButton.style.border = "10px solid black";
	let randomQuestion = Math.floor(Math.random() * 3); // Pomocu fukncije math.floor - zaokruzujemo broj na jednu vrednost
	// A pomocu funckije math.random * max ( broj elemenata niza ) - generisemo nasumican broj od 0 - 3
	let randomAnswer = prompt(questions[randomQuestion]);
	randomAnswer = randomAnswer.toLowerCase();
	if (randomAnswer == "beograd") {
		console.log(randomAnswer);
	} else if (randomAnswer == "nisava") {
		console.log(randomAnswer);
	} else if (randomAnswer == 4) {
		console.log(randomAnswer);
	} else {
		console.log("Nije tacan odgovor");
	}
});
