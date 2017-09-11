window.onload = function () {
    document.getElementById("convertButton").onclick = function () {
        'Use strict'
        var celsius = parseInt(document.getElementById("tempInput").value);

        if (isNaN(celsius)){
            document.getElementById("tempResult").innerHTML = "Por favor, insira um valor válido";
        }
        else {
            document.getElementById("tempResult").innerHTML = (((celsius * 9/5) + 32) + "ºF");
        }
        showDiv("results");
    };
}

function showDiv(id) {
   document.getElementById(id).style.display = "block";
}