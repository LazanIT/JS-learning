$(document).ready(function () {
	$("#additionNumbers").click(function () {
		let numberOne = parseFloat($("#numberOne").val());
		let numberTwo = parseFloat($("#numberTwo").val());
		let addition = numberOne + numberTwo;
		alert(addition);
	});
	$("#subtractionNumbers").click(function () {
		let numberOne = parseFloat($("#numberOne").val());
		let numberTwo = parseFloat($("#numberTwo").val());
		let subtraction = numberOne - numberTwo;
		if (numberOne < numberTwo) {
			alert("Broj jedan ne moze biti manji od broja 2 ");
		} else {
			alert(subtraction);
		}
	});
	$("#multiplicationNumbers").click(function () {
		let numberOne = parseFloat($("#numberOne").val());
		let numberTwo = parseFloat($("#numberTwo").val());
		let multiplication = numberOne * numberTwo;
		alert(multiplication);
	});
	$("#dividingNumbers").click(function () {
		let numberOne = parseFloat($("#numberOne").val());
		let numberTwo = parseFloat($("#numberTwo").val());
		let dividing = numberOne / numberTwo;
		alert(dividing);
	});
});
