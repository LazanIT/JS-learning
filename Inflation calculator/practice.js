// Nacini ispisivanja text-a
// 1: Ispis iz konzole:
console.log("Pozdrav svima");
// A: Takodje postoji i error
console.error("Pozdrav iz konzole");
// B: Postoji i warn
console.warn("Pozdrav iz konzole");
// 2: Ispis na stranici
document.write("Pozdrav sa stranice");
// 3: Alert ispis
// window.alert("Pozdrav iz Popup-a"); // Radi na principu tako sto ispise prvo alert a tek onda load celu stranicu
// window.open(); // Na refresh dobijamo novi tab
// Pored toga sto mozemo ispisivati neki tekst na vise nacina, mozemo raditi i matematicke operacije :
console.log(5 + 5);
// A takodje i proveravati da li je vrednost jednaka drugoj vrednosti :
console.log(5 === 5); // True / False

// Najbitnije od svega toga nam je DOCUMENT :

// Ispis Text-a u HTML dokument
const messageDiv = document.getElementById("msg");
messageDiv.innerText = "Pozdrav";

/* Komentar u vise redova
    ..
    ..
    ..
*/

// Deklarisanje varijabli :
/* 
Varijable koje postoje :
1: LET
2: CONST 
3: VAR - koji se slabo koristi danas i bas je redak
 */

let test;
// Dodaljivanje vrednosti varijabli :
test = "Pozdrav svima testiram varijable"; // Inicijalizacija
/*Takodje sve to mozemo raditi u jednom redu :
 let test = "Pozdrav svima testiram varijablu";
*/
console.log(test);

let years = 5; // integer
console.log(years);

let number = 5.1; // float
let rezultat = years + number;
console.log(rezultat);

// Da bi dobili kojeg su tipa nase varijable koristimo  :
console.log(typeof number);

// Nekad ce se desiti da cemo broj dobiti pod navodnicima ( " 5 " )
// Da bi pretvorili string u integer koristimo parseInt funkciju
// Primer :

let numberOne = 5; // Integer
let numberTwo = "5"; // String
numberTwo = parseInt(numberTwo); // Pomocu ove linije smo ga pretvorili u integer
let addition = numberOne + numberTwo;
console.log(addition);

// Deklaracija pomocu CONST
// Const je ustvari konstanta, i ne mozemo da je zovemo varijabla zato sto nije promenljiva
// Ako ne planiramo da menjamo nas kod i znamo da ce ostati takav onda koristimo CONST

/* Pravila kada dajemo imena varijablama :
    1: Ne sme da bude odvojeno
    2: Moze da ima donju crtu ili crticu
    3: Ne sme da pocinje sa brojem 
    4: Mozemo sa $
    5: Unutar varijable mozemo da imamo brojeve ili znakove 
    6: Osetljive su na velika i mala slova 
    7: Davati logican naziv kako bi posle mogli da ih razumemo, ili neko drugi ko bude radio na nasem kodu
*/

// Primer ispisivanja recenice pomocu varijabli
let ime = "Laza";
let prezime = "Maza";
let godine = 11;

console.log(
	"Moje ime je " +
		ime +
		" " +
		"Prezivam se " +
		prezime +
		" " +
		"i imam " +
		godine
);
// + je nadodavanje kada su string i number, a kada su number i number onda je sabiranje
// Takodje sve to mi mozemo staviti samo u jednu varijablu i posle console.log tu varijablu

godine++; // Pomocu ove linije povecavamo godine za 1 ( godine + 1 )
godine--; // Pomocu ove linije smanjujemo godine za 1 ( godine - 1 )

/*
    Pomocu -= smanjujemo za neki broj
    Pomocu *= mnozimo za neki broj
    Pomocu += uvecavamo za neki broj
    Primer:
    godine += 2 --> Uvecali smo godine za 2 
*/

// Drugi nacin na koji mozemo pisati recenice a da ne moramo da izlazimo iz navodnika i dodajemo svaki put + je pomocu backtikova :

console.log(`Moje ime je ${ime} i imam ${godine} godina`); // = console.log("Moje ime je " + ime + " " + "Prezivam se " + prezime + " " + "i imam " + godine

// I to je najprakticniji nacin koji se koristi

// Logicki operatori : <, >, ==, &&, ||

// Uslovi : if, switch

let number_One = 5;
let number_Two = 10;

if (number_One < number_Two) {
	console.log("Prvi broj je manji od drugog broja");
} else {
	console.log("Prvi broj je veci");
}

// Drugi primer :
let time = 20;

if (time < 11) {
	console.log("Dobro Jutro");
} else if (time < 20 && time > 10) {
	console.log("Dobar dan");
} else {
	console.log("Dobro vece");
}

// Mnogo je losa praksa kada imamo mnogo else if, tacnije onda znamo da ne radimo nesto dobro
// U tom slucaju kada treba da se proveri vise uslova koristimo switch

let month = 6;
switch (month) {
	case 1:
		console.log("Januar");
		break;
	case 2:
		console.log("Februar");
		break;
	case 3:
		console.log("Mart");
		break;
	case 4:
		console.log("April");
		break;
	case 5:
		console.log("Maj");
		break;
	case 6:
		console.log("Jun");
		break;
	case 7:
		console.log("Jul");
		break;
	case 8:
		console.log("Avgust");
		break;
	case 9:
		console.log("Septembar");
		break;
	case 10:
		console.log("Oktobar");
		break;
	case 11:
		console.log("Novembar");
		break;
	case 12:
		console.log("Decembar");
		break;
}

// LOOPS - Petlje
// One sluze da se odredjeni deo koda ponavlja sve dok se njihovi uslovi ne ispune
// Primer : Brojac novcanica :

let dolar = 25; // 25 dolara
let dolar_value = 10; // 10 dolara
let counter = 0;
let countedDolar = 0;

// WHILE loop :
while (counter < 25) {
	countedDolar++;

	counter++;
	console.log(countedDolar);
}

// Petlje i nizovi

let money = [10, 5, 20, 50, 5, 10, 100, 20, 50, 5, 10, 100];
let countedArray = 0;
while (countedArray < money.length) {
	// Pomocu lenght uzimamo duzinu niza
	countedArray++;
}
console.log(`Broj izbrojanih novcanica je ${countedArray}`);

// Pristupanje indexima niza:

console.log(money[1]); // Pomocu ove linije koda pristupili smo clanu koji nosi index-ni broj 1

// Ispisivanje clanova niza
// FOR loop:

let sumOfMoney = 0;

for (let i = 0; i < money.length; i++) {
	// Prvi nacin FOR petlje

	console.log(`Novcanica na poziciji ${i} : ${money[i]}`);

	sumOfMoney = sumOfMoney + money[i];
}

console.log(`Ukupno imamo: ${sumOfMoney} dolara`);

// Drugi nacin FOR petlje :

console.log("###############");

for (let dolar in money) {
	console.log(`Novcanica na poziciji ${dolar} : ${money[dolar]}`);

	sumOfMoney = sumOfMoney + money[dolar];
}
console.log(`Ukupno imamo: ${sumOfMoney} dolara`);

// Ovde imamo identican kod samo na dva razlicita nacina

// Ova druga petlja se moze napisati na jos jednostavniji nacin :

for (let euro of money) {
	console.log(euro); // Ovde ispisujemo vrednost niza na jos prostiji nacin
}

// Primer broj 2 :

let cars = ["AUDI", "BMW", "GOLF"];

for (let car of cars) {
	console.warn(car);
}

// ForEach loop :

cars.forEach(function (car) {
	console.error(car);
});

// Object & Loops
// Razlika Objekata u odnosu na nizove je u zagradama
// Objekat {} ---- Niz []
let carModel = {
	// Da bi stavili vise informacija za svaki auto napravimo niz :
	audi: ["70000", "A4", "2018"],
	bmw: ["50000", "f30", "2020"],
	golf: ["100000", "7.5", "2016"],
};

for (model in carModel) {
	let data_car = carModel[model];
	let name_car = model;
	console.log(`Automobil pod nazivom ${name_car} ima podatke ${data_car}`);
}

// Jos jedan primer objekata i pristupanja njegovim podacima :

let osoba = {
	ime: ["Aleksandar"],
	prezime: ["Lazanski"],
	godiste: ["2003"],
};

console.log(
	`Moje ime je : ${osoba.ime} a prezivam se ${osoba.prezime} i rodjen sam ${osoba.godiste} godine`
);

// Funkcije

let nekretnine = {
	stan: 70000,
	kuca: 150000,
	plac: 30000,
};

let mesec = 10 * 12;
let rata = nekretnine.stan / mesec;
rata = rata.toFixed(2); // Pomocu ove linije koda smo zaokruzili na dve decimale

console.log(`Rata za stan ce izaci ${rata} eura na ${mesec} meseci`);
// Kako ne bi ponavljali kod za svaku od nekretnina koristicemo funkciju za izracunavanje
// Jedna veoma bitna stavka je da je objekat iznad same funkcije
// U suprotnom cemo dobijati gresku

/*
	Ova funkcija izracunava mesecnu ratu za odredjenu nekretninu
	Na odredjeni broj godine
*/

function izracunavanjeNekretnina(godineRate, vrstaNekretnine) {
	let meseci = godineRate * 12;
	let rata = nekretnine[vrstaNekretnine] / meseci;

	rata = rata.toFixed(3); // Zaokruzili smo na 3 decimale

	console.log(
		`Rata za ${vrstaNekretnine} ce izaci ${rata} eura na ${mesec} meseci`
	);
	console.log("------------");
}

izracunavanjeNekretnina(15, "stan");
izracunavanjeNekretnina(20, "kuca");
izracunavanjeNekretnina(30, "plac");

// Uzimanje elemenata koji nemaju klasu ili id

let brend = document.getElementsByTagName("span");

console.log(brend[0].innerText);

for (let i = 0; i < brend.length; i++) {
	console.error(brend[i].innerText);
}

for (let marka of brend) {
	console.log(marka.innerText);
}

// Kada ide of kod for petlje onda pisemo samo ono sto smo definisali sa let
// A kada ide in pisemo : brend[marka]

console.log("--------------");

let modelAuta = document.getElementsByClassName("automobil-model");

console.log(modelAuta);

for (let modelKola of modelAuta) {
	console.log(modelKola.innerText);
}

console.log("--------------");

let najbolji = document.getElementById("recenica");

// Kada su ID-jevi u pitanju JS nikad ne pravi niz

console.log(najbolji.innerText);

console.log("--------------");

// Takodje sve ovo mozemo raditi i preko document.querySelector("");
// Za klase u zagradu stavljamo : .
// Za ID u zagradu stavljamo : #
// A za uzimanje elementa (Primer):

let brend_Auta = document.querySelectorAll("span");
for (let modelKola of brend_Auta) {
	console.log(modelKola.innerText);
}

console.log("--------------");

// Primer za klasu :

let model_Auta = document.querySelectorAll(".automobil-model");

for (let marka_Auta of model_Auta) {
	console.log(marka_Auta.innerText);
}

// Kao u CSS-U sto selektujemo klase i id, tako i ovde selektujemo kada koristimo querySelector-e

// Brisanje recenice pomocu JavaScript-e

let najbolja_recenica = document.querySelector("#recenica");

najbolja_recenica.remove();

// Pravljenje novog elementa

let novi_element = document.createElement("h2");

console.log(novi_element);

// Dodavanje klasa elementu :

novi_element.classList = "novi-element";

// Dodavanje texta elementu

novi_element.innerText = "Pozdrav iz novog elementa";

// Implementiranje u html

let body = document.querySelector("body");
body.appendChild(novi_element);
