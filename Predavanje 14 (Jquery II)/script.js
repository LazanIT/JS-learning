$(document).ready(function () {
	// console.log("123");

	let username = "admin";
	let password = "1234";

	const btnLogin = $("#btnLogin");

	btnLogin.click(function () {
		let name = $("#username").val();
		let password = $("#password").val();
		console.log(name, password);
	});
});
