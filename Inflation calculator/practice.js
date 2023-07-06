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
