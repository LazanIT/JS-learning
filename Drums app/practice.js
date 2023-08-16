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
    Sto znaci da mi funkcije necemo menjati, nego samo sta da funkcija radi unutar sebe 
*/
let clickMeNew = () => {
	let a = 5;
	let b = 10;

	console.log(a + b);
};

clickMeNew();
