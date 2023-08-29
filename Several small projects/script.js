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
let pictures = document.querySelectorAll(".slider-images img");

let imgNumber = 0;

const moveRight = () => {
	displayNone(pictures);
	imgNumber++;

	if (imgNumber === pictures.length) {
		imgNumber = 0;
	}
	pictures[imgNumber].style.display = "block";
};

const moveLeft = () => {
	displayNone(pictures);

	imgNumber--;

	if (imgNumber === -1) {
		imgNumber = pictures.length - 1;
	}
	pictures[imgNumber].style.display = "block";
};

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);

// Ova funckija ce da sakrije sve slike
const displayNone = () => {
	pictures.forEach((img) => {
		img.style.display = "none";
	});
};
