var content = (document.getElementById("contentHolder").innerHTML =
	"<p>Test 123</p>");

var firstParagraph = document.createElement("p");
firstParagraph.innerHTML = "Prvi JS paragraf";
firstParagraph.style.color = "blue";

document.getElementById("contentHolder").appendChild(firstParagraph);
// Pomocu appendChild mi postavljam varijablu u HTML div
var linkYoutube = document.createElement("a"); // Sa document create element pravimo element koji ce se zvati kao u html h1, h2, p, img...
linkYoutube.setAttribute("href", "https://www.youtube.com/");
linkYoutube.innerHTML = "Link do youtube";
linkYoutube.style.fontSize = "5rem";
linkYoutube.style.textDecoration = "none";

document.getElementById("contentHolder").appendChild(linkYoutube);
// Vezba
var Image = document.createElement("img");
Image.setAttribute(
	"src",
	"https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone-14-pro-max-colors.png"
);
document.getElementById("contentHolder").appendChild(Image);
Image.setAttribute("class", "image"); // Pomocu ove linije koda tacnije setAttribute i class dodajemo klasu iz css-a na ovu sliku
// Pomocu classList sacuva trenutnu klasu i dodaje sledecu na nju
//Primer :
Image.classList.add("border");
