function chooseOperation() {
	var option = document.getElementById("menuOption").value;

	switch(parseInt(option)){
		case 1: 
			document.getElementById("areaTitle").innerHTML = "Área de um retângulo";
			showDiv("firstField");
			document.getElementById("firstField").innerHTML = "Área de um retângulo";
			showDiv("secondField");
			document.getElementById("secondField").innerHTML = "Área de um retângulo";
			hideDiv("thirdField");
			break;
		case 2: 
			document.getElementById("areaTitle").innerHTML = "Área de um triângulo";
			showDiv("firstField");
			document.getElementById("firstField").innerHTML = "Área de um retângulo";
			showDiv("secondField"); 
			document.getElementById("secondField").innerHTML = "Área de um retângulo";
			hideDiv("thirdField");
			break;
		case 3: 
			document.getElementById("areaTitle").innerHTML = "Área de um circulo"; 
			showDiv("firstField");
			document.getElementById("firstField").innerHTML = "Área de um retângulo";
			hideDiv("secondField");
			hideDiv("thirdField");
			break;
		case 4: 
			document.getElementById("areaTitle").innerHTML = "Área de um trapézio"; 
			showDiv("firstField");
			document.getElementById("firstField").innerHTML = "Área de um retângulo";
			showDiv("secondField");
			document.getElementById("secondField").innerHTML = "Área de um retângulo";
			showDiv("thirdField");
			document.getElementById("thirdField").innerHTML = "Área de um retângulo";
			break;
		default: 
			document.getElementById("areaTitle").innerHTML = "Você inseriu uma opção incorreta. Tente novamente"; 
	}

	showDiv("calcBox");
}

function showDiv(id) {
   document.getElementById(id).style.display = "block";
}

function hideDiv(id) {
   document.getElementById(id).style.display = "none";
}