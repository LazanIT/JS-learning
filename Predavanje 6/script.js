var proizvodi = ["Audi", "Mercedes", "BMW"];
console.log(proizvodi[1]);

// Imamo 3 vrste petlje :
// 1: FOR
// 2: FOREACH
// 3: WHILE

// FOR petlja  :
for (var proizvod in proizvodi) {
	console.log(proizvodi[proizvod]);
}

// Testiranje i primer:

// var brojJedan = 1;
// console.log(proizvodi[brojJedan]);

// Postupak po kom radi :

// var jedanProizvod = 0; // Prvo ce u ovu varijablu upisati nula
// proizvodi[jedanProizvod];

// Zatim ce varijabla jedanProizvod dobiti vrednost 1 :

// var jedanProizvod = 1;
// proizvodi[jedanProizvod];

// var jedanProizvod = 2;
// proizvod[jedanProizvod];

//  I to se zovu iteracija ( ponavljanja )

// ISPISIVANJE PODATAKA U HTML-U

var lista = document.getElementById("list");
lista.innerHTML = "Pozdrav";
lista.innerHTML += "<h2>Pozdrav Lazo </h2>"; // Pomocu " + " nadodajemo na postojeci ispisan text

var paragraph = document.createElement("p");
for (var proizvod in proizvodi) {
	paragraph.innerHTML += proizvodi[proizvod] + " <br> "; // Pomocu "  + i ' '  " dodajemo nesto na te elemente ( moze biti nesto iz html-a ili neki tekst)
	lista.appendChild(paragraph);
}
