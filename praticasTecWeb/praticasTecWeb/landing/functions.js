function addNumbers() {
	var n1 = document.getElementById("firstNumber").value;
	var n2 = document.getElementById("secondNumber").value;
	var soma = parseInt(n1) + parseInt(n2);
	document.getElementById("sum").innerHTML = soma;
}

function verifyParity() {
	var n1 = document.getElementById("oddOrEven").value;
	document.getElementById("parityResult").innerHTML = (n1%2 ==0)? "Par":"Impar";
}

function findSmallerEvenNumbers() {
	var n1 = document.getElementById("smallerEven").value;
	var result = "";

	for (var i = n1; i >= 0; i -= 2){
		result += i + "<br>";
	}

	document.getElementById("smallerEvenResult").innerHTML = result;
}