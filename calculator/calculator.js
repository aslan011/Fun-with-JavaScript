function add (a,b) {
	return a + b;
	
}
function subtract (a,b) {
	return a - b;
	
}
function sum (array) {
	return array.reduce((total, numbers) => total += numbers,0)
	
}

function multiply (array) {
	return array.reduce((total, numbers) => total * numbers,1)

	
}

function power(a, b) {
	return Math.pow(a, b);
	
}

function factorial(number) {
	if (number == 0) return 1;
  	let product = 1;
  	for (let i = number; i > 0; i--) {
    	product *= i;
  	}
  	return product;
}
	
module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}