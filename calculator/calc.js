const { read } = require('fs');
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var runProgram = true;



reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);
	num3 = Number(tokens[3]);

	if (mathSymbol === "end"){
		console.log("Thanks!");
		runProgram = false;
	}
	if (mathSymbol === "+"){
		console.log(num1 + num2 + num3);
	}
	else if (mathSymbol === "-"){
		console.log(num1 - num2 - num3);
	}
	else if (mathSymbol === "*"){
		console.log(num1 * num2 * num3);
	}
	else if (mathSymbol === "/"){
		console.log(num1 / num2 / num3);
	}
	else if (mathSymbol === "**"){
		console.log(num1 ** num2);
	}
	else if (mathSymbol === "***"){
		console.log(num1 ** 3);
	}
	else if ((mathSymbol === "sqrt") || (mathSymbol === "√")){
		if (num2 == Number){
			console.log(Math.sqrt(num1));
			console.log(Math.sqrt(num2));
		}
		else {
			console.log(Math.sqrt(num1));
		}
	}
	else {
		console.log("Type in the correct thing, jerk!")
	}


	//console.log('mathSymbol - ', mathSymbol);
	//console.log("number 1 - ", num1);
	//console.log("number 2 - ", num2);
	

	// This line closes the connection to the command line interface.


});



