// Responsive menu
const mobileMenu = () => {
	let menu = document.querySelector(".header ul");
	let btnMenu = document.querySelector(".header button");

	if (btnMenu.innerHTML === "MENU") {
		menu.style.display = "block";
		btnMenu.innerHTML = "CLOSE";
		menu.style.transition = "0.4s linear";
	} else {
		menu.style.display = "none";
		btnMenu.innerHTML = "MENU";
	}
};
// Image slider
let rightBtn = document.querySelector("#right-btn");
let leftBtn = document.querySelector("#left-btn");

rightBtn.addEventListener("click", () => {
	console.log("right");
});
leftBtn.addEventListener("click", () => {
	console.log("left");
});
