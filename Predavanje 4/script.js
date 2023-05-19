var titleName = "Prodaja auto delova";

var title = document.getElementById("naslov");
title.innerHTML = titleName;
var titleTwo = document.getElementById("naslovDva");
titleTwo.innerHTML = titleName;

document.getElementById("knjige").innerHTML = "Hari Poter";
document.getElementById("knjige").innerHTML += "Hari poter i kamen mudrosti";
// Pomocu " \n " pravimo razmak u recenici
// A pomocu <br> pravimo novu liniju i ako nije bas najbolji nacin
// Jedan od najboljih nacina je da se doda paragraf unutar linije koda :
document.getElementById("knjige").innerHTML = "<p> Hari Poter </p>";
document.getElementById("knjige").innerHTML +=
	"<p>Hari Poter i kamen mudrosti </p>";

//Takodje sve ovo mozemo raditi i pomocu varijabli :
var ime = "Laza";
var prezime = "Maza";
console.log(ime + prezime);
var recenica = "Ja se zovem " + ime + " prezivam " + prezime;
console.log(recenica);

document.getElementById("ime").innerHTML = recenica;

// Vezba : Ispisati elemente iz arraya u div-u proizvodi
namirnice = ["Hleb", "Mleko", "Jaja"];
var proizvod = document.getElementById("proizvodi");
proizvod.innerHTML = namirnice;
// Drugi nacin :
proizvod.innerHTML = "<p style='color:red;'>" + namirnice[0] + "</p>";
proizvod.innerHTML += "<p style='color:blue;'>" + namirnice[1] + "</p>";
proizvod.innerHTML += "<p style='color:green;'>" + namirnice[2] + "</p>";
