window.onload = function() {
  init();
};

function init() {
  setPremiacao(20000000)
  pushTitle();
  createInputFields();
  createResultsArea();
}

function setPremiacao(value){
  premiacao = value;
}

/* Generate Game description and fields */

function pushTitle(){
  document.body.innerHTML = "<main><h2>Faça sua aposta!</h2><h3>Premiação: " + premiacao + "</h3><h4>Preencha os campos abaixo com os números de sua aposta, entre 1 a 100</h4></main>"
}

function createInputFields(){
  inputs = 5;

  for (var i = 1; i <= inputs; i++){
    document.body.innerHTML += "<p><span><input id='inputField0" + i + "' class='center-text' name='inputField01' type='number' placeholder='Primeiro número'></span></p>"
  }
   document.body.innerHTML += "<button onClick='validateBet()' value='teste'>Enviar aposta</button>"
}

/*Validade bet, generate results and verifyBet*/

function validateBet(){

  betNumbers = new Array(inputs);

  for (var i = 1; i <= inputs; i++){
    if (document.getElementById("inputField0" + i).value == ""){
      window.alert("Um dos campos foi preenchido incorretamente");
      return;
    }
    else {
      betNumbers[i-1] = document.getElementById("inputField0" + i).value;
    }
  }
  generateBetResults();
}

function generateBetResults(){
  gameNumbers = new Array(inputs);

  for (var i = 0; i < inputs; i++){
    gameNumbers[i] = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  }
  logResults();
  verifyBetNumbers();
}

function logResults(){
  for (var i = 0; i < inputs; i++){
    console.log(gameNumbers[i]);
  }
}

function verifyBetNumbers(){
  acertos = 0;

  for  (var i = 0; i < inputs; i++){
    for (var j = 0; j < inputs; j++){
      if (betNumbers[i] == gameNumbers[j]){
      acertos++;
      gameNumbers[j] = "";
      break;
    }
  }
}
presentResults();
}

function presentResults(){

  showResultsArea();
  var resultsBox = document.getElementById("resultsBox");


  switch (acertos){
    case 0: resultsBox.innerHTML = "Resultado: Você não acertou nada.<br>Premiação: " + 0; break;
    case 1: resultsBox.innerHTML = "Resultado: Você só acertou um número.<br>Premiação: " + 0; break;
    case 2: resultsBox.innerHTML = "Resultado: Você só acertou dois números.<br>Premiação: " + 0; break;
    case 3: resultsBox.innerHTML = "Resultado: Parabéns! Você acertou 3 números!<br>Sua premiação é de " + (premiacao * 0.5); break;
    case 4: resultsBox.innerHTML = "Resultado: Parabéns! Você acertou 4 números!<br>Sua premiação é de " + premiacao * 0.75; break;
    case 5: resultsBox.innerHTML = "Resultado: Parabéns! Você acertou todos os números!<br>Sua premiação é de " + premiacao; break;
  }
}

function showResultsArea(){
  document.getElementById("resultsBox").classList.remove('not-visible');
  document.getElementById("resultsBox").classList.add('visible');
}

function createResultsArea(){
  document.body.innerHTML += "<div id='resultsBox' class='standard-padding standard-margin bordered-box not-visible'></div>"
}