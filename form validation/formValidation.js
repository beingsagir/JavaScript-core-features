function validateForm() {
	var x = document.forms["MyForm"]["email"].value;
	var atok = x.indexOf("@");
	var dotok = x.lastIndexOf(".");
	if(atok<1 || dotok < atok+2 || dotok +2 >= x.length){
		alert("not a valid email adress");
		return false
	}
}

