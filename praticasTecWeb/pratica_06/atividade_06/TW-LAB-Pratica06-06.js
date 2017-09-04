function callPrompt () {
	var i, vetor = new Array (5);
	for (i = 0; i < vetor.length; i++){
		vetor[i] = parseInt(prompt("Informe um número: "));
	}
	for(i = 0; i < vetor.length; i++){
		document.getElementById("arrayValue01").innerHTML = vetor[i

		];
		alert(vetor[i]);
	}
	showDiv("hiddenBox");	
}

function showDiv(id) {
   document.getElementById(id).style.display = "block";
}


/*

function callPrompt () {
		var i, vetor = new Array (5);
		for (i = 0; i < vetor.length; i++) {
			vetor[i] = prompt ("Informe um número: ");
		}
		for (i = 0; i < vetor.length; i++) {
			document.getElementById("arrayValue01").innerHTML = parseInt(vetor[i].value);
			alert(document.getElementById("arrayValue01")).value;
		}

		showDiv("hiddenBox");	
	}

function showDiv(id) {
   document.getElementById(id).style.display = "block";
}

*/


/*
function callPrompt () {
		var vetor = new Array (1);
		vetor[0] = parseInt(prompt("Informe um número: "));
		document.getElementById("arrayValue01").innerHTML = vetor[0];
		alert(vetor[0]);
		showDiv("hiddenBox");	
	}

	*/