// alert("testing javascript");

// Stari nacin
function clickMe() {
	let a = 5;
	let b = 10;

	console.log(a + b);
}

clickMe();
// -----------------------------------
// Novi nacin
// Arrow function
// Kod arrow funkcija se koristi const ( Konstante koje se ne menjaju )
/*
    Sto znaci da mi funkcije necemo menjati, nego samo sta ta funkcija radi unutar sebe, tacnije njen sadrzaj
*/
const clickMeNew = (a, b) => {
	console.log(a + b);
};

clickMeNew(20, 30);

// Kada u zagradama imamo samo jedan argument, mozemo da napisemo funkciju bez zagrada () :

const clickMeNewTwo = (b) => {
	let a = 10;
	console.log(a + b);
};
clickMeNewTwo(100);

// Takodje kada imamo samo jednu liniju koda u funkciji, onda mozemo pisati bez viticastih zagrada { }
const clickMeNewThird = (a, b) => console.log(a + b);

clickMeNewThird(100, 500);
