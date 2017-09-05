function sumMatrix(){

	var i, valores = new Array(8);

	for (i = 0; i < valores.length; i++){
		valores[i] = parseInt(document.getElementById("inputField" + i).value);
	}

	document.getElementById("resultField0").innerHTML = valores[0] + valores[4];
	document.getElementById("resultField1").innerHTML = valores[1] + valores[5];
	document.getElementById("resultField2").innerHTML = valores[2] + valores[6];
	document.getElementById("resultField3").innerHTML = valores[3] + valores[7];

	showDiv("results");
}

function showDiv(id) {
   document.getElementById(id).style.display = "block";
}

