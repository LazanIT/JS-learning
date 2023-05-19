let i;
for (i = 0; i <= 200; i++) {
	let div = document.createElement("div");

	if (i % 2 == 0) {
		div.className = "square redSquare";
	} else {
		div.className = "square yellowSquare";
	}

	document.getElementById("blockHolder").append(div);
}

let squareNumber = document.getElementsByClassName("square").length;
for (let i = 0; i <= squareNumber; i++) {
	let squareChange = document.getElementsByClassName("square")[i];
	squareChange.addEventListener("mouseover", function mouseover(event) {
		this.style.backgroundColor = "green";
	});
}
