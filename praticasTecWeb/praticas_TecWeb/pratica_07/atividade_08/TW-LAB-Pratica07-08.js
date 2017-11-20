var vehicleArray = new Array();
var vehicle = 0;

window.onload = function () {
    'Use strict'
    clearScreen();  
    addVehicle('Fiat', 2015, 30000);
    addVehicle('Chevrolet', 2017, 42500);
    addVehicle('Renault', 2014, 22300);
    addVehicle('Audi', 2017, 68700);
    printValues();
}

function addVehicle(marca, ano, preco){
    alocarMemoria();
    vehicleArray[vehicle][0] = marca;
    vehicleArray[vehicle][1] = ano;
    vehicleArray[vehicle][2] = preco;
    vehicle++;
}

function alocarMemoria () {
    vehicleArray[vehicle] = new Array();
}

function printValues(){
    for (var i = 0; i < vehicle; i++){
        document.write (  
            "Carro " + i + "<br/>" + 
            "----------------------<br/>" +   
            "Marca: " + vehicleArray[i][0] + "<br/>" + 
            "Ano: " + vehicleArray[i][1] + "<br/>" + 
            "Preço: " + vehicleArray[2] + "<br/>" +
            "----------------------<br/><br/>" 
        );
    }
}

function clearScreen(){document.body.innerHTML = "";}
