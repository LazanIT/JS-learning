var delovi = ["Maticna ploca", "Ram", "GPU"];

// console.log(delovi);

for (var deo in delovi) {
	console.log(deo, delovi[deo]);
}
// Kada imamo strukturu (deo, delovi[deo]) - Onda ispisuje i index-ni broj (0,1,2)
// A kada imamo ( delovi[deo] ) - Onda ispisuje samo elemente iz array-a ( niza )

var PC = document.getElementById("computer");
// PC.innerHTML = "test";
var title = document.createElement("h4");
for (var deo in delovi) {
	// console.log(delovi[deo]);
	title.innerHTML += "<h4>" + delovi[deo] + "</h4>";
	PC.appendChild(title);
}
