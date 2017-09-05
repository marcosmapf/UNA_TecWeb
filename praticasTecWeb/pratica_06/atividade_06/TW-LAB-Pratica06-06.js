function callPrompt () {
	var i, vetor = new Array (5);
	for (i = 0; i < vetor.length; i++){
		vetor[i] = parseInt(prompt("Informe um número: "));
	}
	for(i = 0; i < vetor.length; i++){
		document.getElementById("arrayValue0" + i).innerHTML = (0.9 * vetor[i]);
	}
	showDiv("results");	
}

function showDiv(id) {
   document.getElementById(id).style.display = "block";
}