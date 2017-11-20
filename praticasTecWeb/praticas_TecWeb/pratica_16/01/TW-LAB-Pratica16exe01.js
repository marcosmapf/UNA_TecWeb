class Pessoa {
	constructor (nome) {
	this.nome = nome;
}
	setNome (nome) {this.nome = nome;}
	getNome () {return this.nome;}
}

class PessoaFisica extends Pessoa {
	constructor (nome, cpf) {
	super(nome);
	this.cpf = cpf;
}
setCPF (cpf) {this.cpf = cpf;}
getCPF () {return this.cpf;}
}

var pessoas = new Array ();

function cadastrar () {
var pf = new PessoaFisica (nome.value, cpf.value);
pessoas[pessoas.length] = pf;
rodape.innerHTML = "Pessoa cadastrada: " + pf.getNome() + ", " + pf.getCPF
() + ".";
limpar ();
imprime ();
}

function limpar () {
nome.value = "";
cpf.value = "";
nome.focus ();
}

function imprime () {
var i;
cadastro.innerHTML = "";
for (i = 0; i < pessoas.length; i++)
cadastro.innerHTML += pessoas[i].getNome () + ", " + pessoas[i].getCPF
() + ". <br>";
}