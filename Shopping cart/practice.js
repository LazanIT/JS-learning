function pokreniMe(element) {
	let nazivDugmeta = element.innerText;

	console.log("Kliknuo si me");
	let message = document.querySelector("#kliknutoDugme");
	message.innerText = nazivDugmeta;
	console.log(message);
}
