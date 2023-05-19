var prognoza = {
	Beograd: 30,
	"Novi Sad": 25,
	Subotica: 27,
};
var city = document.getElementById("gradovi");

city.innerHTML = "<p>" + "Beograd:" + prognoza["Beograd"] + "</p>";
city.innerHTML += "<p>" + "Novi Sad:" + prognoza["Novi Sad"] + "</p>";
city.innerHTML += "<p>" + "Subotica:" + prognoza["Subotica"] + "</p>";
