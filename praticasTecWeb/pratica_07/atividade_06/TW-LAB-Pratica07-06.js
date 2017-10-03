var supplierArray = new Array();
var contador = 0;

window.onload = function () {
    'Use strict'
    clearScreen();
    requestSupplierAmmount();     
}

function requestSupplierAmmount(){
    
    var j = parseInt(window.prompt("Insira o número de fornecedores a serem adicionados"));
    if (isNaN(j)){
        window.alert("Insira um valor válido");
        requestSupplierAmmount();
    }
    else if (j == 0){
        printSuppliers(contador);
    }
    else{
        for (var i = 0; i < j; i ++){
            var supplier = new Object();
            supplier.nome = window.prompt("Nome");
            supplier.telefone = window.prompt("Telefone");
            supplier.cnpj = window.prompt("CNPJ");
            supplierArray[contador] = supplier;
            contador++;
        }
        requestSupplierAmmount();
    }
}

function clearScreen(){document.body.innerHTML = "";}

function printSuppliers(j){
    for (var i = 0; i < j; i++){
        document.write (    
            "Fornecedor: " + supplierArray[i].nome + "<br/>" + 
            "Telefone: " + supplierArray[i].telefone + "<br/>" + 
            "CNPJ: " + supplierArray[i].cnpj + "<br/>" +
            "----------------------<br/>" 
        );
    }
}