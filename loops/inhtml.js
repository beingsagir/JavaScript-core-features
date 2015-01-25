function forLoop(k){
	console.log("value now" + k);
	for (var i = 0; i <5; i++) {
		console.log("value now" + k+i);
	};
}

function whileLoop(k){
	console.log("value now" + k);
	var i=0;
	while(i<5){
		console.log("value now" + k + i);
		i++;
	}
}


function dowhileLoop(k){
	console.log("value now"  + k);
	var i= 100;
	do{
		console.log("value now" + k + i);
		i++;
	}while(i<5);
}

forLoop(2);
whileLoop(4);
dowhileLoop(2);