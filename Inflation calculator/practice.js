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
window.alert("Pozdrav iz Popup-a"); // Radi na principu tako sto ispise prvo alert a tek onda load celu stranicu
window.open(); // Na refresh dobijamo novi tab
// Pored toga sto mozemo ispisivati neki tekst na vise nacina, mozemo raditi i matematicke operacije :
console.log(5 + 5);
// A takodje i proveravati da li je vrednost jednaka drugoj vrednosti :
console.log(5 === 5); // True / False

// Najbitnije od svega toga nam je DOCUMENT :
