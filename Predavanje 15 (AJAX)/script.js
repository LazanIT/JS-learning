// For loading html ready file

$(document).ready(function () {
	// Koriscenje AJAX-a :
	$.ajax({
		url: "https://reqres.in/api/users?page=2",
		method: "GET",
		success: function (informations) {
			console.log(informations);
		},
	});
});
