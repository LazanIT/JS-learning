$(document).ready(function () {
	// First exercise
	const city = $("#City");
	$(city).change(function () {
		let cityValue = $(this).val();
		console.log(cityValue);

		$.ajax({
			method: "GET",
			url: "http://api.weatherapi.com/v1/current.json",
			data: {
				key: "410dcd3850ec4b00a26194551232106",
				q: cityValue,
				aqi: "yes",
			},
			success: function (response) {
				console.log(response);
			},
		});
	});
	// Second exercise
	const btnWeather = $("#btnWeather");
	$(btnWeather).click(function () {
		let cityValue = $(city).val();
		// console.log(cityValue);
		$.ajax({
			method: "GET",
			url: "http://api.weatherapi.com/v1/forecast.json",
			data: {
				key: "410dcd3850ec4b00a26194551232106",
				q: cityValue,
				aqi: "yes",
				alerts: "yes",
				days: "4",
			},
			success: function (response) {
				console.log(response);
			},
		});
	});
});
// Takodje url se moze pisati i na ovaj nacin :
// data :{
//    key: "410dcd3850ec4b00a26194551232106",
//    q: "Belgrade",
//    aqi: "yes"
//}
// I on ce nama napraviti adresu kao sto je u URL
// Exercise 1: ( Select city and call weatherAPI )
