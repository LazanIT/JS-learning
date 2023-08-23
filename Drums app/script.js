let crashRide = document.querySelector("#crash-ride"); // Uzimamo vrednosti iz HTML-a za levi deo
let hiHatTop = document.querySelector("#hihat-top"); // Uzimamo vrednosti iz HTML-a za desni deo

const animateCrashOrRide = () => {
	crashRide.style.transform = "rotate(0deg) scale(1.5)"; // Funkcija za animaciju pomeranja
};

const animateHiHatClose = () => {
	// Funkcija za dodavanje stila
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
	} /* Pomocu eventListenera keydown, proveravamo da li je neko dugme kliknut	
		A zatim uzimamo vrednost tog dugmeta, tacnije njegov keyCode
		Pomocu if-a proveravamo da li je kliknuto dugme koje postoji, ukoliko jeste uzimamo njegov audio i stavljamo da nema delay
		Ukoliko nije ne radi nista
		Pomocu Switcha uzimamo odredjeni code i postavljamo mu animaciju

	  */

	keyElement.classList.add("playing"); // Dodajemo klasu " Playing "
});

const removeCrashRideTransition = (e) => {
	if (e.propertyName !== "transform") {
		return;
	} else {
		e.target.style.transform = "rotate(-7.2deg) scale(1.5)";
	}
};

const removeHiHatTopTransition = (e) => {
	if (e.propertyName !== "top") {
		return;
	} else {
		e.target.style.top = "166px";
	}
};

const removeKeyTransition = (e) => {
	if (e.propertyName !== "transform") {
		return;
	}
	e.target.classList.remove("playing");
};

let drumKeys = document.querySelectorAll(".key");

drumKeys.forEach((key) => {
	key.addEventListener("transitionend", removeKeyTransition);
});

crashRide.addEventListener("transitionend", removeCrashRideTransition);
hiHatTop.addEventListener("transitionend", removeHiHatTopTransition);
