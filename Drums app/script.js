let crashRide = document.querySelector("#crash-ride");
let hiHatTop = document.querySelector("#hihat-top");

const animateCrashOrRide = () => {
	crashRide.style.transform = "rotate(0deg) scale(1.5)";
};

const animateHiHatClose = () => {
	hiHatTop.style.top = "171px";
};

window.addEventListener("keydown", (event) => {
	let code = event.keyCode;

	let keyElement = document.querySelector(`div[data-key="${code}"]`);

	if (keyElement != null) {
		let audio = document.querySelector(`audio[data-key='${code}'`);
		audio.currentTime = 0;
		audio.play();
	} else {
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

let removeCrashRideTransition = (e) => {
	if (e.propertyName !== "transform") {
		return;
	} else {
		e.target.style.transform = "rotate(-7.2deg) scale(1.5)";
	}
};

let removeHiHatTopTransition = (e) => {
	if (e.propertyName !== "top") {
		return;
	} else {
		e.target.classList.remove("playing");
	}
};

crashRide.addEventListener("transitionend", removeCrashRideTransition);
hiHatTop.addEventListener("transitionend", removeHiHatTopTransition);
