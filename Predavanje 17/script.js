$(document).ready(function (param) {
	console.log("test");

	const btnCart = $(".add-cart");

	$(btnCart).click(function (param) {
		console.dir("Succes");
		const price = $(this).attr("data-price");
		console.log(price);
		// local Storage
		localStorage.setItem("cart", price);
	});
});
