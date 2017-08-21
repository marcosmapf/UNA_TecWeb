function chooseOperation() {
	var option = document.getElementById("menuOption").value;

	switch(parseInt(option)){
		case 1: document.getElementById("areaText").innerHTML = "Área de um retângulo"; break;
		case 2: document.getElementById("areaText").innerHTML = "Área de um triângulo"; break;
		case 3: document.getElementById("areaText").innerHTML = "Área de um circulo"; break;
		case 4: document.getElementById("areaText").innerHTML = "Área de um trapézio"; break;
		default: document.getElementById("areaText").innerHTML = "Você inseriu uma opção incorreta. Tente novamente";
	}

	showDiv("calcBox");
}

function showDiv(id) {
   document.getElementById(id).style.display = "block";
}