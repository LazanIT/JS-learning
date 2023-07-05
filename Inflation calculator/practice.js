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
