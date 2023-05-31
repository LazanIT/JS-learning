let numberImg = document.getElementsByClassName("img").length;
for (let i = 0; i < numberImg; i++) {
	document
		.getElementsByClassName("img")
		[i].addEventListener("click", function () {
			this.classList.toggle("zoom");
		});
}
// Jos jedan od nacina da se definise eventListener koji ce biti direktno vezan za odredjeni tekst
const div = document.getElementById("holder");
div.addEventListener("click", function click(e) {
	let event = e.target;
	console.log(event);
});
