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
}
// Dobijanje najblizeg elementa na osnovu datog :
function testingTri() {
	let text = document.querySelector(".text");

	console.log(text.closest("div"));

	// Funkcija " closest  " radi tako sto daje najblizi element naseg datog elementa
	// A takodje moze dati i najblizi element sa odredjenom klasom

	// Takodje sada ovom textu ili bilo kom elementu mozemo dodati jos jednu klasu :
	// Prva stvar koju stavljamo je vrednost sta mu dodajemo a druga stvar je ime te vrednosti
	text.setAttribute("class", "plava-boja");

	// Uzimanje vec postojeceg atributa :
	console.log(text.getAttribute("data-testing"));

	// A da bi sklonili neki atribut koji smo postavili ili koji vise nije potreban :

	text.removeAttribute("class");
}
// Upis HTML elemenata u div
function validacija() {
	let glavniDiv = document.querySelector(".neki-div");

	// glavniDiv.innerHTML = "<hr>"; // Ovo je jedan od losijih nacina koriscenja

	// Pravi nacin za koriscenje je : Primer validacije :

	let input = document.querySelector("#email");
	let valu = input.value;

	if (valu == "") {
		alert("input ne moze biti prazan");
	} else {
		console.log(valu);
	}

	// Pomocu includes proveravamo da li string sadrzi znak, broj...
	if (valu.includes("@") && valu.includes(".")) {
		// Sledece sto radimo je da proveravamo na kojoj se poziciji nalazi " @ " i " . "
		let pozicijaAt = valu.indexOf("@"); // indexOf - nam sluzi da pronadjemo na kojoj je poziciji karakter
		let pozicijaTacke = valu.indexOf(".");

		// Zatim proveravamo sta se nalazi izmedju izmedju njih

		console.log(valu.substring(pozicijaAt, pozicijaTacke + 1)); // substring - sluzi za proveravanje karaktera izmedju 2 pozicije
	} else {
		console.log("Nije validan email");
	}
}
