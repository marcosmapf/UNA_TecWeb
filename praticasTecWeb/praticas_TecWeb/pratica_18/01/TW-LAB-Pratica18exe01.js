function limpar_formulario_cep () {
	// Limpa valores do formulário de CEP.
	$("#rua").val ("");
	$("#bairro").val ("");
	$("#cidade").val ("");
	$("#uf").val ("");
	$("#ibge").val ("");
	$("#msg").html ("").hide ();
}

function aguardar_preenchimento_formulario_cep () {
//Preenche os campos do formulário de CEP com "...", enquanto consulta o Webservice.
	$("#rua").val ("...");
	$("#bairro").val ("...");
	$("#cidade").val ("...");
	$("#uf").val ("...");
	$("#ibge").val ("...");
}

/*
https://viacep.com.br/
*/
function busca_dados_via_cep (cep) {
//Expressão regular para validar o CEP.
	var validacep = /^[0-9]{8}$/;
//Valida o formato do CEP.
	if (validacep.test (cep)) {
//Preenche os campos do furmulário de CEP com "...", enquanto consulta o Webservice.
		aguardar_preenchimento_formulario_cep ();
		//Consulta o Webservice viacep.com.br/
		$.getJSON ("https://viacep.com.br/ws/" + cep + "/json/?callback=?",
		function (dados) {
		if (!("erro" in dados)) {
			$("#msg").html ("").hide ();
			//Atualiza os campos do formulário de CEP com os valores retornadospela consulta.
			$("#rua").val (dados.logradouro);
			$("#bairro").val (dados.bairro);
			$("#cidade").val (dados.localidade);
			$("#uf").val (dados.uf);
			$("#ibge").val (dados.ibge);
		} //end if.
			else {
			//CEP pesquisado não foi encontrado.
			limpar_formulario_cep ();
			$("#msg").html ("CEP não encontrado.").show ();
		}
		});
	} //end if.
			else {
			//cep é inválido.
			limpar_formulario_cep ();
			$("#msg").html ("Formato de CEP inválido.").show ();
			}
	} //end if.
			$(document).ready (function () {
			//Coloca o foco no campo CEP.
			$("#cep").focus ();

			//Quando o campo CEP perde o foco.
			$("#cep").blur (function () {
			//Nova variável "cep" somente com dígitos.
			var cep = $(this).val ().replace (/\D/g, ''); /*OBS: 1) O "\D" é um
			metacaracter
			usado para
			encontrar caracteres

			diferentes de

			dígitos.
			2) O "g" é usado
			para indicar
			busca global.
			Assim, a busca aplica

			o critério de

			pesquisa em todos os

			caracteres do

			string. Caso o "g" não

			seja usado, a

			busca termina ao
			encontrar o
			primeiro caracter que casa
			com o critério
			de busca.
			*/

			//Verifica se campo CEP possui valor informado.
	if (cep != "") {
		//Busca os dados referentes ao CEP informado no Web Service.
		busca_dados_via_cep (cep);
	} else {
		//CEP sem valor, limpa formulário.
		limpar_formulario_cep ();
		$("#msg").html ("CEP não informado.").show ();
	}
	});
});