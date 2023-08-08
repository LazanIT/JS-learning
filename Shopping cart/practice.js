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
