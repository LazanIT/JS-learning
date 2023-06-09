$(document).ready(function () {
	let username = "admin";
	let password = "1234";

	const btnLogin = $("#btnLogin");

	btnLogin.click(function () {
		let name = $("#username").val();
		let pass = $("#password").val();

		if (name === username) {
			$("#wrongUsername").removeClass("d-flex").addClass("d-none");
		} else {
			$("#wrongUsername")
				.removeClass("d-none")
				.addClass("d-flex")
				.text("Pogresno ime");
		}

		if (password === pass) {
			$("#wrongPassword").removeClass("d-flex").addClass("d-none");
			$("#loginForm").addClass("d-none");
			$("#loginSuccess")
				.removeClass("d-none")
				.addClass("d-flex")
				.text("Uspesno ste se ulogovali");
		} else if (pass == "") {
			alert("Ne moze biti prazno polje");
		} else {
			$("#wrongPassword")
				.removeClass("d-none")
				.addClass("d-block")
				.text("Pogresna sifra");
		}
	});
});
