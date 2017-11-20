function calcVolume(){
	'Use strict'
	var radius = parseInt(document.getElementById("radiusInput").value);
	document.getElementById("volumeResult").innerHTML =
		((4 * Math.PI * Math.pow(radius, 3)/3)).toFixed(2);

	showDiv("results");
}

function showDiv(id) {
   document.getElementById(id).style.display = "block";
}