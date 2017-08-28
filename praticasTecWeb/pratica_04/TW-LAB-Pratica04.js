function addNumbers() {
	var n1 = document.getElementById("firstNumber").value;
	var n2 = document.getElementById("secondNumber").value;
	document.getElementById("sum").innerHTML = parseInt(n1) + parseInt(n2);
}