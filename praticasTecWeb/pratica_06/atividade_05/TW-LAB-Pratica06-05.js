function sumBetweenLimits(){
	var n1 = parseInt(document.getElementById("lowerLimitInput").value);
	var n2 = parseInt(document.getElementById("upperLimitInput").value);
	var result = 0;

	if (isNaN(n1) || isNaN(n2)){
		document.getElementById("sumResult").innerHTML = "ERRO: Digite limites válidos para o cálculo."
	}
	else if (n1 > n2){
		document.getElementById("sumResult").innerHTML = "ERRO: O limite superior deve ser maior que o limite inferior."
	}
	else {

		for (n2; n2>=n1; n2--) {
			result += n2;
		}

		document.getElementById("sumResult").innerHTML = result;
	}

	showDiv("results");
}

function showDiv(id) {
   document.getElementById(id).style.display = "block";
}