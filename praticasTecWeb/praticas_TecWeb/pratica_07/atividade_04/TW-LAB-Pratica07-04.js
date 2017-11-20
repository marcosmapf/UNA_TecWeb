window.onload = function () {
	clearScreen();
    requestUserData();
}

function requestUserData() {
   var aluno = new Object();

   aluno.nome = window.prompt("Informe o nome do aluno"); 
   aluno.telefone = window.prompt("Informe o telefone do aluno");
   aluno.matricula = window.prompt("Informe o número de matrícula do aluno");
   
   aluno.curso = new Object();

   aluno.curso.nome = window.prompt("Informe o nome do curso");
   aluno.curso.campus = window.prompt("Informe o campus do curso");
   aluno.curso.turno = window.prompt("Informe o turno do curso");

   document.write (	"Aluno: " + aluno.nome + "<br/>" + 
   					"Telefone: " + aluno.telefone + "<br/>" + 
   					"Matrícula: " + aluno.matricula + "<br/>" + 
   					"Curso: " + aluno.curso.nome + "<br/>" + 
   					"Campus: " + aluno.curso.campus + "<br/>" + 
   					"Turno: " + aluno.curso.turno +"<br/>"
   					);
}

function clearScreen(){document.body.innerHTML = "";}