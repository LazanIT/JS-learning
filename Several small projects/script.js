const mobileMenu = () => {
	let menu = document.querySelector(".header ul");
	let btnMenu = document.querySelector(".header button");

	if (btnMenu.innerHTML === "MENU") {
		menu.style.display = "block";
		btnMenu.innerHTML = "CLOSE";
	} else {
		menu.style.display = "none";
		btnMenu.innerHTML = "MENU";
	}
};
