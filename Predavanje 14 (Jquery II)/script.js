$(document).ready(function () {
	let username = "admin";
	let password = "1234";
	let loginAttempts = 0;

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
				.text("Pogrešno ime");
		}

		if (password === pass) {
			$("#wrongPassword").removeClass("d-flex").addClass("d-none");
			$("#loginForm").addClass("d-none");
			$("#loginSuccess")
				.removeClass("d-none")
				.addClass("d-flex")
				.text("Uspješno ste se ulogovali");
		} else if (pass === "") {
			alert("Ne može biti prazno polje");
		} else {
			$("#wrongPassword")
				.removeClass("d-none")
				.addClass("d-block")
				.text("Pogrešna šifra");

			loginAttempts++;

			if (loginAttempts >= 3) {
				$("#username").prop("disabled", true);
				$("#password").prop("disabled", true);
				$("#btnLogin").prop("disabled", true);
				alert("Premašili ste broj dozvoljenih pokušaja. Polja su isključena.");
			}
		}
	});
});
