$(document).ready(function () {
	let username = "admin";
	let password = "1234";

	const btnLogin = $("#btnLogin");

	btnLogin.click(function () {
		let name = $("#username").val();
		let pass = $("#password").val();

		if (name === username) {
			console.log("Ime je validno ");
		} else {
			$("#wrongUsername")
				.removeClass("d-none")
				.addClass("d-flex")
				.text("Pogresno ime");
		}

		if (pass === password) {
			console.log("Sifra je validna");
			$("#loginForm").addClass("d-none");
			$("#loginSuccess")
				.removeClass("d-none")
				.addClass("d-flex")
				.text("Uspesno ste se ulogovali");
		} else {
			$("#wrongPassword")
				.removeClass("d-none")
				.addClass("d-block")
				.text("Pogresna sifra");
		}
	});
});
