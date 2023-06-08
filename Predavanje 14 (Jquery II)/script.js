$(document).ready(function () {
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
			return;
		}

		if (password == pass) {
			console.log("Sifra je validna");
			$("#loginForm").addClass("d-none");
			$("#loginSuccess")
				.removeClass("d-none")
				.addClass("d-block")
				.text("Uspesno ste se ulogovali");
		} else {
			alert("Pogresna sifra");
			return;
		}
	});
});
