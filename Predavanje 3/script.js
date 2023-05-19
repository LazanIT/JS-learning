document.getElementById("naslovSajta").innerHTML = "Ovo je naslov iz JS";
document.getElementById("naslovSajta").style.color = "#FFA500";

// Isto odradjeno kao i u gornjem primeru samo uz varijablu
var title = document.getElementById("naslovSajta");
title.style.fontSize = "5rem";

/* Kada koristimo getElemenetsByClassName:
 * On nama vraca array
 * Mi moramo u varijabli staviti na koji element se to odnosi
 * Elementi krecu od 0
 */
var text = document.getElementsByClassName("textSajta")[0];
text.style.color = "green";
