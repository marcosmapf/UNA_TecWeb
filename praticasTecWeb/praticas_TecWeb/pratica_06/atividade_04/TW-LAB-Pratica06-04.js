var inputFields;

function chooseOperation() {
	var option = document.getElementById("menuOption").value;

	switch(parseInt(option)){
		case 1: 
			document.getElementById("areaTitle").innerHTML = "Área de um retângulo";
			showInput("firstField");
			document.getElementById("firstField").innerHTML = "Base do retângulo: " + addNumberInput();
			showInput("secondField");
			document.getElementById("secondField").innerHTML = "Altura do retângulo: " + addNumberInput();
			hideInput("thirdField");
			showDiv("resultBox");
			break;
		case 2: 
			document.getElementById("areaTitle").innerHTML = "Área de um triângulo" ;
			showInput("firstField");
			document.getElementById("firstField").innerHTML = "Base do triângulo: " + addNumberInput();
			showInput("secondField"); 
			document.getElementById("secondField").innerHTML = "Altura do triângulo: " + addNumberInput();
			hideInput("thirdField");
			showDiv("resultBox");
			break;
		case 3: 
			document.getElementById("areaTitle").innerHTML = "Área de um circulo"; 
			showInput("firstField");
			document.getElementById("firstField").innerHTML = "Raio do circulo: " + addNumberInput();
			hideInput("secondField");
			hideInput("thirdField");
			showDiv("resultBox");
			break;
		case 4: 
			document.getElementById("areaTitle").innerHTML = "Área de um trapézio"; 
			showInput("firstField");
			document.getElementById("firstField").innerHTML = "Base maior: " + addNumberInput();
			showInput("secondField");
			document.getElementById("secondField").innerHTML = "Base menor: " + addNumberInput();
			showInput("thirdField");
			document.getElementById("thirdField").innerHTML = "Altura: " + addNumberInput();
			showDiv("resultBox");
			break;
		default: 
			document.getElementById("areaTitle").innerHTML = "Você inseriu uma opção incorreta. Tente novamente";
			hideInput("firstField");
			hideInput("secondField");
			hideInput("thirdField");
			hideDiv("resultBox");
	}
	showDiv("calcBox");
}

function calculateArea(){
	menuOption = document.getElementById("areaTitle").innerHTML;
	switch (menuOption){
		case "Área de um retângulo": 
			var n1 = document.getElementById("inputBox1").value;
			var n2 = document.getElementById("inputBox2").value;
			document.getElementById("areaResult").innerHTML = n1*n2;
			break;
		case "Área de um triângulo": 
			var n1 = document.getElementById("inputBox1").value;
			var n2 = document.getElementById("inputBox2").value;
			document.getElementById("areaResult").innerHTML = ((n1*n2)/2);
			break;
		case "Área de um circulo": 
			var n1 = document.getElementById("inputBox1").value;
			document.getElementById("areaResult").innerHTML = (Math.pow(n1,2) * Math.PI);
			break;
		case "Área de um trapézio": 
			var n1 = parseInt(document.	getElementById("inputBox1").value);
			var n2 = parseInt(document.getElementById("inputBox2").value);			
			var n3 = document.getElementById("inputBox3").value;
			document.getElementById("areaResult").innerHTML = (n1+n2)*n3/2;
			break;
		default:
	}
}

function showInput(id) {
   document.getElementById(id).style.display = "block";

   switch (id){
   	case "firstField": inputFields = 1; break;
   	case "secondField": inputFields = 2; break;
   	case "thirdField": inputFields = 3; break;
   }
}

function hideInput(id) {
   document.getElementById(id).style.display = "none";
}

function showDiv(id) {
   document.getElementById(id).style.display = "block";
}

function hideDiv(id) {
   document.getElementById(id).style.display = "none";
}

function addNumberInput(){
	return "<input id=\"inputBox" + inputFields + "\" type=\"number\">"
}