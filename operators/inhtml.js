
function equalCheck(firstVariable, secondVariable){
	if (firstVariable == secondVariable) {
		console.log("firstVariable is equal to secondVariable = " + secondVariable);
	}else{
		console.error("firstVariable is not equal to secondVariable = " +firstVariable, secondVariable);
	}
}

function strictEqual(firstVariable, secondVariable){
	if (firstVariable === secondVariable) {
		console.log("firstVariable is equal to secondVariable = " + secondVariable);
	}else{
		console.error("firstVariable is not srtict equal to secondVariable = " +firstVariable, secondVariable);
	}
}

function prefixPostfix(){
	var a = 1;
	console.log("a = " + a);	
	console.log("++a = " + ++a);
	console.log("a = " + a);
	console.log("a++ = " + a++);
	console.log("a = " + a);
}

equalCheck(2, 2);
strictEqual(5, "5");
prefixPostfix();