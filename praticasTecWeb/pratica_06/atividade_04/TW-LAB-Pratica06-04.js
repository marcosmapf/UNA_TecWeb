function chooseOperation() {
	var option = document.getElementById("menuOption").value;

	switch(parseInt(option)){
		case 1: 
			document.getElementById("areaTitle").innerHTML = "Área de um retângulo";
			showDiv("firstField");
			document.getElementById("firstField").innerHTML = "Base do retângulo: " + addNumberInput();
			showDiv("secondField");
			document.getElementById("secondField").innerHTML = "Altura do retângulo: " + addNumberInput();
			hideDiv("thirdField");
			break;
		case 2: 
			document.getElementById("areaTitle").innerHTML = "Área de um triângulo" ;
			showDiv("firstField");
			document.getElementById("firstField").innerHTML = "Base do triângulo: " + addNumberInput();
			showDiv("secondField"); 
			document.getElementById("secondField").innerHTML = "Altura do triângulo: " + addNumberInput();
			hideDiv("thirdField");
			break;
		case 3: 
			document.getElementById("areaTitle").innerHTML = "Área de um circulo"; 
			showDiv("firstField");
			document.getElementById("firstField").innerHTML = "Raio do circulo: " + addNumberInput();
			hideDiv("secondField");
			hideDiv("thirdField");
			break;
		case 4: 
			document.getElementById("areaTitle").innerHTML = "Área de um trapézio"; 
			showDiv("firstField");
			document.getElementById("firstField").innerHTML = "Base maior: " + addNumberInput();
			showDiv("secondField");
			document.getElementById("secondField").innerHTML = "Base menor: " + addNumberInput();
			showDiv("thirdField");
			document.getElementById("thirdField").innerHTML = "Altura: " + addNumberInput();
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

function addNumberInput(){
	return "<input type=\"number\">"
}