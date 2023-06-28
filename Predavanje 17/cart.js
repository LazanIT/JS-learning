$(document).ready(function () {
	const buyCart = localStorage.getItem("cart");
	const h1 = $("#cart");
	// U slucaju da je korpa prazna:
	if (buyCart === null) {
		h1.html("Nemate nista u korpi");
	} else {
		h1.html(buyCart);
	}

	const btnClear = $("#clearBtn");
	$(btnClear).click(function () {
		localStorage.removeItem("cart");
		h1.html("Korpa je prazna");
	});
});
