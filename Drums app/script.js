window.addEventListener("keydown", (event) => {
	let code = event.keyCode;

	let keyElement = document.querySelector(`div[data-key="${code}"]`);

	if (keyElement != null) {
		let audio = document.querySelector(`audio[data-key='${code}'`);
		audio.currentTime = 0;
		audio.play();
	} else {
		alert("Pritisnuli ste taster koji ne postoji ");
		return;
	}
});
