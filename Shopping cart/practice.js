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
