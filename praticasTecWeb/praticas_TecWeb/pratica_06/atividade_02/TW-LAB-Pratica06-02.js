function findSmallerEvenNumbers() {
	var n1 = document.getElementById("smallerEven").value;
	var result = "";

	if (n1 < 0) {
		result = "Digite um valor maior que zero (0)"
		document.GetElementById("smallerEvenResult").innerHTML = result;
	}
	else {
		if (n1%2 == 1){
			n1--;
		}
		for (var i = n1; i >= 0; i -= 2){
			result += i + "<br>";
		}
		document.getElementById("smallerEvenResult").innerHTML = result;
	}
}
		