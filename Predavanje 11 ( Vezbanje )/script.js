// console.log("123"); // Testing

let i = 0;
let numberImg = document.getElementsByClassName("img").length;
for (i = 0; i < 3; i++) {
	const img = document.getElementsByClassName("img")[i];
	img.addEventListener("click", function click(event) {
		console.log("radi");
		this.style.transform = "scale(1.1)";
	});
}
console.log(numberImg);
