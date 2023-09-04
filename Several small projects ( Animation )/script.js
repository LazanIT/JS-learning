let textTag = document.querySelector(".section h1");

let text = textTag.textContent;

let splittedText = text.split("");

textTag.innerHTML = "";

for (let i = 0; i < splittedText.length; i++) {
	textTag.innerHTML += `<span>${splittedText[i]}</span>`;
}

let k = 0;
setInterval(() => {
	let singleSpan = document.querySelectorAll(".section h1 span");

	console.log(singleSpan);

	k++;
}, 2000);
