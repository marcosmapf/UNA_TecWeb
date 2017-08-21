function customLog() {
	var n1 = document.getElementById("logNumber").value;
	var n2 = document.getElementById("baseNumber").value;
	document.getElementById("logResult").innerHTML = Math.log(n1) / Math.log(n2);
}