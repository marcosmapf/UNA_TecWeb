function check(){
				 
	if (document.getElementById("idade").value >= 18) {
		document.getElementById("cidade").disabled =false;
		document.getElementById("estado").disabled =false;
		document.getElementById("pais").disabled =false;
		document.getElementById("submit").disabled =false;

	} else{
			document.getElementById("cidade").disabled =true;
			document.getElementById("estado").disabled =true;
			document.getElementById("pais").disabled =true;
			document.getElementById("submit").disabled =true;
		}

}