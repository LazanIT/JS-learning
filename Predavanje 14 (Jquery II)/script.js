$(document).ready(function () {
	// First exercise (Login form)
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
			loginAttempts++;
			return;
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

			if (loginAttempts >= 5) {
				$("#username").prop("disabled", true);
				$("#password").prop("disabled", true);
				$("#btnLogin").prop("disabled", true);
				alert("Premašili ste broj dozvoljenih pokušaja. Polja su isključena.");
			}
		}
	});
	// Second exercise (Dimension)
	const btnDimension = $("#btnDimension");
	btnDimension.click(function () {
		let box = $("#box");
		let widthBox = $("#width").val();
		let heightBox = $("#height").val();
		let selectColor = $("#color").val();

		box.css({
			width: widthBox,
			height: heightBox,
			backgroundColor: selectColor,
		});

		$("#color").on("input", function () {
			let secondColor = $(this).val();
			box.css({ backgroundColor: secondColor });
		});
	});
	// Updated version (homework)
	const box = $("#box");
	const widthInput = $("#width");
	const heightInput = $("#height");
	const colorInput = $("#color");
	const borderRadiusInput = $("#borderRadius");

	// Promena boje pri unosu nove vrijednosti u polje za boju
	colorInput.on("input", function () {
		const color = $(this).val();
		box.css("background-color", color);
	});

	// Promena dimenzija pri unosu nove vrijednosti u polja za širinu i visinu
	widthInput.on("input", updateDimensions);
	heightInput.on("input", updateDimensions);

	function updateDimensions() {
		const width = widthInput.val();
		const height = heightInput.val();
		box.css({
			width: width,
			height: height,
		});
	}

	// Promena border radijusa pri unosu nove vrijednosti u polje za border radijus
	borderRadiusInput.on("input", function () {
		const borderRadius = $(this).val() + "%";
		box.css("border-radius", borderRadius);
	});
});
