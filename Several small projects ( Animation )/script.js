// Animated Text
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

// Border Line animation
let borderLine = document.querySelector(".border-line");

let animationWidth = 0;
let Images = document.querySelectorAll(".images img");

let oldScroll = 0; // Store the old scroll position

window.onscroll = () => {
  // Get the current scroll position
  let scrollY = window.scrollY;

  if (oldScroll > scrollY) {
    animationWidth -= 1.7;
  } else {
    animationWidth += 1.7;
  }

  if (animationWidth >= 100) {
    animationWidth = 100;
  }

  if (animationWidth <= 0) {
    animationWidth = 0;
  }

  borderLine.style.width = animationWidth + "%";

  oldScroll = scrollY;

  ImageAnimation();
};

const ImageAnimation = () => {
  let sectionForAnimation = document.querySelector(".section2 .images");
  let sectionPosition = sectionForAnimation.getBoundingClientRect().top;
  let screenPosition = window.innerHeight / 1.32;
  // Animated Images (Fade In effect)
  if (sectionPosition < screenPosition) {
    Images.forEach((image) => {
      image.classList.add("animated");
    });
  }
};
