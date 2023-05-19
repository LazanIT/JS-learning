let naziv = prompt("Kako se zovete?");
naziv = naziv.toLowerCase();

let imena = ["toma", "laza"];

for (let ime in imena) {
	let  korisnici = imena[ime];
	if (naziv == korisnici) {
		console.log("Dobrodosli korisnice");
	} else {
		console.log("Korisnik ne postoji");
	}
}
