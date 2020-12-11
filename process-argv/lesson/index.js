/*
	If your command in the terminal is "node index.js"
	process.argv is an array that will look like this ["/path/to/node", "/path/to/index.js"]
*/
console.log("this is an array that maps the terminal command that you ran")
console.log(process.argv);

/*
	If you include another command after that, i.e. node index.js hello
	process.argv will look like this ["/path/to/node", "/path/to/index.js", "hello"]
*/
console.log(process.argv);
var argThree = process.argv[2];
console.log("argument three below is the extra argument that you added after 'node index.js'")
console.log("argument Three: " + argThree);

/*
	If you include another command after that, i.e. node index.js hello again
	process.argv will look like this ["/path/to/node", "/path/to/index.js", "hello", "again"]
*/
 var argFour = process.argv[3];
 console.log("argument four below is the extra argument that you added after 'node index.js <third argument>'")
 console.log("argument Four: " + argFour);

//writing a function that adds the two arguments together, but only if they're both integers
function addThese(numOne, numTwo){
  // when you type in numbers on the terminal, the server reads it as a string
  // that is why we must convert those strings to numbers using parseInt
	// converting the extra arguments to numbers
	var argumentOne = parseInt(numOne);
	var argumentTwo = parseInt(numTwo);
	console.log("argument Three: " + argumentOne);
	console.log("argument Four: " + argumentTwo);
	//if they're both integers, then do the addition
	if(Number.isInteger(argumentOne) && Number.isInteger(argumentTwo)){
    console.log("this is the returned value of the addThese function")
		return argumentOne + " + " + argumentTwo + " = " + (argumentOne + argumentTwo);
	} else {
		//if not, then print the instructions
    console.log("this is the returned value of the addThese function")
		return "Numbers only as arguments"
	}
}

//logging the value of the function when called
console.log(addThese(argThree, argFour));
