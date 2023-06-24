$(document).ready(function () {
	const buyCart = localStorage.getItem("cart");
	const h1 = $("#cart");
	h1.html(buyCart);
});
