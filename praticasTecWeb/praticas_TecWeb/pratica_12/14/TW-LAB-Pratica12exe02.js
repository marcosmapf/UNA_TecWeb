function mascaraData (objeto, evento) {
/* O keyCode não é compatível com todos navegadores.
1) Keycode 8: backspace.
2) Key code 46: delete.
*/
	if (evento.keyCode == 8 || evento.keyCode == 46) {
		return true;
	}
	//Key code entre 48 e 57: 0, 1 , 2, 3, 4, 5, 6, 7, 8 e 9.
	if (evento.keyCode < 48 || evento.keyCode > 57) {
		alert ("Informe apenas números!");
		return false;
	}
	
	if (objeto.value.length == 10) {
		return false;
	}

	if ((objeto.value.length == 2) || (objeto.value.length == 5)) {
		objeto.value = objeto.value + '/';
	}
	return true;
}

function mascaraCpf(objeto, evento) {
/* O keyCode não é compatível com todos navegadores.
1) Keycode 8: backspace.
2) Key code 46: delete.
*/
	if (evento.keyCode == 8 || evento.keyCode == 46) {
		return true;
	}
	//Key code entre 48 e 57: 0, 1 , 2, 3, 4, 5, 6, 7, 8 e 9.
	if (evento.keyCode < 48 || evento.keyCode > 57) {
		alert ("Informe apenas números!");
		return false;
	}
	
	if (objeto.value.length == 14) {
		return false;
	}

	if ((objeto.value.length == 3) || (objeto.value.length == 7)) {
		objeto.value = objeto.value + '.';
	} if (objeto.value.length==11) {
			objeto.value = objeto.value + '-';
		}
	return true;
}

function verificarFormulario() {
	var mensagemErro = "";
	if (document.getElementById ("login").value == "") {
		mensagemErro = "Informe o login.";
	}
	if (document.getElementById ("email").value == "") {
		mensagemErro += "\nInforme o email.";
	}
	if (document.getElementById ("datanasc").value == "") {
		mensagemErro += "\nInforme a data de nascimento.";
	}
	if (document.getElementById ("sexo").value == "") {
		mensagemErro += "\nInforme o sexo.";
	}
	if (document.getElementById ("cidade").value == "") {
		mensagemErro = "Informe a cidade.";
	}
	if (document.getElementById ("senha").value == "") {
		mensagemErro = "Informe o senha.";
	}
	if (document.getElementById ("senha").value != document.getElementById ("confirmarSenha").value) {
		mensagemErro = "Senhas não combinam.";
	}
	if (document.getElementById ("homepage").value =="") {
		mensagemErro = "Informe a homepage.";
	}
	var opcoesInteresses = document.getElementsByName("campoInteresses");
	var interessesPreenchido = false;
	for (var i = 0; i < opcoesInteresses.length; i++) {
		if (opcoesInteresses[i].checked) {
			interessesPreenchido = true;
		}
	}

	if (!interessesPreenchido) {
		mensagemErro += "\nInforme o o interesse.";
	}
	if (mensagemErro == "") {
		return true;
	} else {
		alert (mensagemErro);
	return false;
	}
}