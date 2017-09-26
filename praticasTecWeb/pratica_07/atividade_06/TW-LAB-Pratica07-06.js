window.onload = function () {
    'Use strict'

    clearScreen();
    var i = requestSupplierAmmount();     
    alert(i);
}

function requestSupplierAmmount(){
    
    var j = parseInt(window.prompt("Insira o número de fornecedores a serem adicionados"));
    if (isNaN(j)){
        window.alert("Insira um valor válido");
        //setTimeout(requestSupplierAmmount, 1000);
    }
    else{
        return j;
    }
}

function clearScreen(){document.body.innerHTML = "";}