function verifyParity() {
	var n1 = document.getElementById("oddOrEven").value;
	document.getElementById("parityResult").innerHTML = (n1%2 ==0)? "Par":"Impar";
}