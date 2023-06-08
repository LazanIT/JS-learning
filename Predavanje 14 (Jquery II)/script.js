$(document).ready(function () {
	// console.log("123");

	let username = "admin";
	let password = "1234";

	const btnLogin = $("#btnLogin");

	btnLogin.click(function () {
		let name = $("#username").val();
		let pass = $("#password").val();
		console.log(name, password);

		if (username == name) {
			console.log("Ime je validno ");
		} else {
			alert("Ime ne postoji");
		}
		if (password === pass) {
			console.log("Sifra je validna");
		} else {
			alert("Pogresna sifra");
		}
	});
});
