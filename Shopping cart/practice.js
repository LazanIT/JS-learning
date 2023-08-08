// Prva vezba
function pokreniMe(element) {
	let nazivDugmeta = element.innerText;
	let klasaDugmeta = element.className;
	console.log("Kliknuo si me");
	let message = document.querySelector("#kliknutoDugme");
	message.innerText = nazivDugmeta + " - " + klasaDugmeta;
	console.log(message);
}
// Druga vezba
// Selektovanje elemenata po dubini se vrsi kao u CSS-u
// Najveca poenta ovog primera je pokazati kako se sve mogu selektovati elementi preko querySelector-a
function testing() {
	let linkovi = document.querySelectorAll("section .moj-link"); // Isto kao u css section .moj-link
	console.log(linkovi);
}

// Dobijanje ostalih linkova na osnovu jednog : Primer :
function testingDva() {
	let link2 = document.querySelector(".drugi-link");
	console.log(link2);
	// To mozemo uraditi pomocu funkcije nextElementSibling :
	console.log(link2.nextElementSibling);
	// Takodje mozemo dobiti i prethodni element previousElementSibling :
	console.log(link2.previousElementSibling);

	// Sada cemo to staviti u varijable kako bi izgledalo lepse i jasnije :

	let link1 = link2.previousElementSibling;
	let link3 = link2.nextElementSibling;

	console.log(link1.innerText);
	console.log(link2.innerText);
	console.log(link3.innerText);

	// Dobijanje najblizeg elementa na osnovu datog :
	let text = document.querySelector(".text");

	console.log(text.closest("div"));

	// Funkcija " closest  " radi tako sto daje najblizi element naseg datog elementa
	// A takodje moze dati i najblizi element sa odredjenom klasom
}
