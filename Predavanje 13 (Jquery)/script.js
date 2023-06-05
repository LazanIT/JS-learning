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
});
