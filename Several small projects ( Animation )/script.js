const animateText = () => {
  let textTag = document.querySelector(".section h1");

  let text = textTag.textContent;

  let splittedText = text.split("");

  textTag.innerHTML = "";

  for (let i = 0; i < splittedText.length; i++) {
    if (splittedText[i] == " ") {
      splittedText[i] = "&nbsp;";
    }
    textTag.innerHTML += `<span>${splittedText[i]}</span>`;
  }

  let spans = document.querySelectorAll(".section h1 span"); // Postavljamo van setInterval funkcije radi optimizacije kod-a
  let k = 0;
  let timeInterval = setInterval(() => {
    let singleSpan = spans[k];

    singleSpan.classList = "fadeMove";

    k++;

    if (k === spans.length) {
      clearInterval(timeInterval);
      setTimeout(animateText, 2000);
    }
  }, 60);
};

animateText();

let borderLine = document.querySelector(".border-line");
let animationWidth = 0;

window.onscroll = () => {
  // This nam je u ovom slucaju window
  // console.log(this.scrollY); // Uzimamo koliko smo scroll window po Y osi

  if (this.oldScroll > this.scrollY) {
    animationWidth -= 1.5;
  } else {
    animationWidth += 1.5;
  }

  if (animationWidth >= 100) {
    animationWidth = 100;
  }

  if (animationWidth <= 0) {
    animationWidth = 0;
  }
  borderLine.style.width = animationWidth + "%";

  this.oldScroll = this.scrollY;
};
