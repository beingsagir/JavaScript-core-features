function newFunction(argumentOne, ArgumentTwo){

	//this function has two arguments
	var variable = argumentOne + ArgumentTwo;
	return (variable);
}

// direct call

newFunction(1, 2); 
console.log(newFunction(34, 87));

// call with receiving values

var received = newFunction(133, 22); 
console.log(received);
