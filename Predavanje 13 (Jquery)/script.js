// console.log("test 123");

// $(document).ready(function () {
// 	alert("Hello, World! We are using jQuery from local machine");   ----> Testing
// });

// Razlike i poredjenja jquery & javascript :
// document.getElementById() in javascript == $(element, element...).ready(function(){}) in jquery
/* 
    I na ovakav nacin : $(document).ready(function () {}); se pise sve u jquery
    A kod se izvrsava tek kada se sve ocita iz HTML-a
*/
$(document).ready(function () {
	$("#btnClick").click(function () {
		console.log("13");
		this.style.backgroundColor = "blue";
	}); // je jednako document.getElementById("btnClick").addEventListener("click", function click(){});

	$(".btn-custom").mouseover(function () {
		$(this).css({ backgroundColor: "blue", color: "black" });
	});

	$("#btnHide").click(function () {
		$("#paragraph").toggle("open"); // pored toggle postoji i slideToggle
	});

	$("#btnChange").click(function () {
		$("#paragraphTwo").animate({ fontSize: "40px" }, 500);
	});

	$("#calculate").click(function () {
		let numberOne = parseFloat(
			$("#numberOne").val()
		); /* Takodje ovo sto smo uradili napisali odma parseInt ili parseFloat je malo teze za pocetnika */
		let numberTwo = parseFloat(
			$("#numberTwo").val()
		); /* Zato je bolje u drugu liniju napisati numberOne = parseFloat(numberOne)  */
		let addition = numberOne + numberTwo;
		alert(addition);
	});
});
// Da bi imali neke animacije postoji jquery UI
// Da bi koristili animacije koje nam nudi jquery potrebno je umesto css pisati animate
// A pre zatvaranja  "  }, 1sekunda );   " poslednje zagrade stavljamo koliko ce animacija trajati
// Primer:
