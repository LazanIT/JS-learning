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

window.onscroll(() => {
  let borderLine = document.querySelector(".border-line");
  console.log(borderLine);
  if (borderLine == true) {
  }
});
