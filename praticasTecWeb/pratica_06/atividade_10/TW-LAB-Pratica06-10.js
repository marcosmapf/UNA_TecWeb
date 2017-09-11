window.onload = function () {
    document.getElementById("avgButton").onclick = function () {
        'Use strict'
        var firstNumber = parseInt(document.getElementById("firstNumber").value);
        var secondNumber = parseInt(document.getElementById("secondNumber").value);
        var thirdNumber = parseInt(document.getElementById("thirdNumber").value);

		if (isNaN(firstNumber) || isNaN(secondNumber) || isNaN(thirdNumber)){
        	document.getElementById("avgResult").innerHTML = "Pelo menos um dos campos encontra-se vazio.";
        }
        else {
	        document.getElementById("avgResult").innerHTML = ((firstNumber + secondNumber + thirdNumber)/3);
    	}
    	showDiv("result");
    };
}

function showDiv(id) {
   document.getElementById(id).style.display = "block";
}