// For loading html ready file

$(document).ready(function () {
	// Koriscenje AJAX-a :
	// API radi po sistemu asinhronosti
	// To znaci da on poziva API, ali ne ceka odgovor odma nego iscitava sve ostale podatke van ajax-a koje smo napravili/ispisali
	$.ajax({
		url: "https://reqres.in/api/users?page=2",
		method: "GET",
		success: function (informations) {
			console.log(informations["total_pages"]);
			// Ispisivanje korisnika ili odredjenih zahteva u vezi korisnika
			console.log(informations["data"][1]["email"]); // Pomocu ove linije koda mi smo ispisali mail od prvog korisnika
			console.log(informations["data"]); // A pomocu ove linije ispisali smo korisnike iz array-a korisnika

			for (let info in informations["data"]) {
				console.log(informations["data"][info]);
				const paragraph = $("#paragraph");
				paragraph.append(informations["data"][info]["email"]);
			}
		},
	});
	// Exercise one
	$.ajax({
		url: "https://reqres.in/api/users/2",
		method: "GET",
		success: function (singleInformation) {
			console.log(singleInformation["data"]);
		},
	});

	// Homework :
	$.ajax({
		url: "https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0",
		method: "GET",
		success: function (weather) {
			console.log(weather);
			const weatherHTML = $("#weather");
			weatherHTML.text(JSON.stringify(weather["dataseries"]));
		},
	});
});
