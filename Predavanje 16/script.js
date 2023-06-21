$(document).ready(function () {
	$.ajax({
		method: "GET",
		url: "http://api.weatherapi.com/v1/current.json?key=410dcd3850ec4b00a26194551232106 &q=Belgrade&aqi=yes",
		success: function (response) {
			console.log(response);
		},
	});
});
