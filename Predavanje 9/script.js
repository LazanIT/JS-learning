// console.log("test 123");
const buyButton = document.getElementById("buyBtn");
const paragraph = document.getElementById("paragraphText");
const message = document.getElementById("msg");

buyButton.addEventListener("click", function () {
	let price = document
		.getElementById("priceArticle")
		.getAttribute("data-price"); // Pomocu getAttribute uzimamo atribute koji smo postavili u html-u ( DATA atribut )
	paragraph.innerHTML = price;
	paragraph.style.textAlign = "center";
});

// Testiranje druge vrste for petlje

// Postoji ovakva struktura for petlje : for (let i = 1; i < 100; i++)
// A druga struktura je : for(ime in imena) - for(key in object)

for (let i = 1; i < 101; i++) {
	console.log(i);
}

for (let i = 0; i < 100; i++) {
	message.append("Pozdrav svima\n");
}

// Dodavanje EventListener-a na Class-e
let i = 0;
// Da bi mogli da dodamo EventListener na klasu nekog dugmeta, moramo staviti broj [0,1,2,3] tog elementa
// Zato sto klase moze da ima bilo koji element, a ID je unikatan za odredjeni element
const buttonOne = document.getElementsByClassName("button")[0]; // Ovde smo definisali prvo dugme
const buttonTwo = document.getElementsByClassName("button")[1]; // Ovde smo definisali drugo dugme

// buttonOne.addEventListener("click", function onClick(event) {
// 	console.log("test 123");
// 	this.style.backgroundColor = "blue";
// });

// buttonTwo.addEventListener("mouseover", function mouseover(event) {
// 	console.log("Cao svima");
// 	this.style.backgroundColor = "green";
// });

const buttonsLenght = document.getElementsByClassName("button").length;
for (i = 0; i < buttonsLenght; i++) {
	let buttons = document.getElementsByClassName("button")[i]; // Ovde smo definisali sve dugmice zajedno a dodali smo [i] koji cemo preko petlje ispisivati

	buttons.addEventListener("mouseover", function mouseover() {
		this.style.fontSize = "2rem";
	});
}
