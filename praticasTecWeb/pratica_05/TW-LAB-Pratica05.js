function addNumbers() {
	var n1 = document.getElementById("firstNumber").value;
	var n2 = document.getElementById("secondNumber").value;
	var soma = parseInt(n1) + parseInt(n2);
	document.getElementById("sum").innerHTML = soma;
}