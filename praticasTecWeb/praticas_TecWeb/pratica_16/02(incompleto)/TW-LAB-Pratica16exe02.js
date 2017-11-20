function mostrarPF(){
	pf.style.display = "block";
	pj.style.display = "none";
	pe.style.display = "none";

}

function mostrarPE(){
	pe.style.display = "block";
	pf.style.display = "none";
	pj.style.display = "none";

}

function mostrarPJ(){
	pj.style.display = "block";
	pf.style.display = "none";
	pe.style.display = "none";
	
}


class Pessoa {
	constructor (nome,telefone,valor) {
		this.nome = nome;
		this.telefone = telefone;
		this.valor = valor;
	}
	setNome (nome) {this.nome = nome;}
	getNome () {return this.nome;}
	setTelefone (telefone) {this.telefone = telefone;}
	getTelefone () {return this.telefone;}
	setValor (valor) {this.valor = valor;}
	getValor () {return this.valor;}
}
	

class PessoaFisica extends Pessoa {
	constructor (nomepf, cpf, telefone1, valor) {
		super (nomepf,telefone1,valor);
		this.cpf = cpf;
	}
	setCPF (cpf) {this.cpf = cpf;}
	getCPF () {return this.cpf;}
}

class PessoaJuridica extends Pessoa {
	constructor (razao, cnpj, telefone2, valor) {
		super (razao,telefone2,valor);
		this.cnpj = cnpj;
	}
	setCNPJ (cnpj) {this.cnpj = cnpj;}
	getCNPJ () {return this.cnpj;}
}

class PessoaExtrangeira extends Pessoa {
	constructor (nomepe, passaporte, telefone3, valor) {
		super (nomepe,telefone3,valor);
		this.passaporte = passaporte;
	}
	setPASSAPORTE (passaporte) {this.passaporte = passaporte;}
	getPASSAPORTE () {return this.passaporte;}
}


var pessoas = new Array ();
function cadastrarPF() {
	var pf = new PessoaFisica (nomepf.value, cpf.value, telefone1.value, valor1.value);
	pessoas[pessoas.length] = pf;
	limpar ();
	imprimePF();
}

var pessoasPJ = new Array ();
function cadastrarPJ() {
	var pj = new PessoaJuridica(razao.value, cnpj.value, telefone2.value, valor2.value);
	pessoasPJ[pessoasPJ.length] = pj;
	limpar();
	imprimePJ();
}

var pessoasPE = new Array ();
function cadastrarPE() {
	var pe = new PessoaExtrangeira(nomepe.value, passaporte.value, telefone3.value, valor3.value);
	pessoasPE[pessoasPE.length] = pe;
	limpar();
	imprimePE();
}

function limpar(){
	nomepf.value = "";
	razao.value = "";
	nomepe.value = "";
	cpf.value = "";
	cnpj.value = "";
	passaporte.value = "";
	telefone1.value = "";
	telefone2.value = "";
	telefone3.value = "";
	valor1.value = "";
	valor2.value = "";
	valor3.value = "";
}

function imprimePJ () {
	var i;
	cadastro.innerHTML = "";
	for (i = 0; i < pessoasPJ.length; i++)
	cadastro.innerHTML += "<strong>Pessoa jurídica cadastrada.</strong><br/>Dados: " + pessoasPJ[i].getNome () + ", " + pessoasPJ[i].getCNPJ() + ", " + pessoasPJ[i].getTelefone() + ", " + pessoasPJ[i].getValor() + ". <br>";
}


function imprimePF () {
	var i;
	cadastro.innerHTML = "";
	for (i = 0; i < pessoas.length; i++)
	cadastro.innerHTML += "<strong>Pessoa física cadastrada.</strong><br/>Dados: " + pessoas[i].getNome () + ", " + pessoas[i].getCPF() + ", " + pessoas[i].getTelefone() + ", " + pessoas[i].getValor() + ". <br>";
}

function imprimePE () {
	var i;
	cadastro.innerHTML = "";
	for (i = 0; i < pessoas.length; i++)
	cadastro.innerHTML += "<strong>Pessoa estrangeira cadastrada.</strong><br/>Dados: " + pessoas[i].getNome () + ", " + pessoas[i].getPASSAPORTE() + ", " + pessoas[i].getTelefone() + ", " + pessoas[i].getValor() + ". <br>";
}

