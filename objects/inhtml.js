var newObject = new Object;

newObject.name = "Ram";
newObject.roll = 32;
newObject.year = 2050;


console.log(newObject.name);


// JavaScript way of creating objects : name value pair

var nvpObject = {name: "Rahim", roll: 33};

console.log(nvpObject.name);

// Object has properties and methods


var nvpObject = {name: "Antoni", roll: 34};
console.log(nvpObject.name);

function processObj () {
	console.log(nvpObject.name + 
		"has a roll number of " + nvpObject.roll);
}

nvpObject.newMeth = processObj;
// use method of nvpObject

nvpObject.newMeth()



