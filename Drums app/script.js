let crashRide = document.querySelector("#crash-ride");
let hiHatTop = document.querySelector("#hihat-top");

const animateCrashOrRide = () => {
	crashRide.style.transform = "rotate(0deg) scale(1.5)";
};

const animateHiHatClose = () => {
	hiHatTop.style.top = `171px`;
};

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

	switch (code) {
		case 69:
		case 82:
			animateCrashOrRide();
			break;
		case 75:
			animateHiHatClose();
			break;
	}
});
