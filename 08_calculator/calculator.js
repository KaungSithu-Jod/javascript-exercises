const add = function(int1, int2) {
	return int1 + int2;
};

const subtract = function(int1, int2) {
	return int1 - int2;
};

const sum = function(array) {
  let sum = 0;
  array.forEach(number => {
    sum += number;
  });
	return sum;
};

const multiply = function(array) {
  let product = 1;
  array.forEach(number => {
    product = product * number;
  });
  return product;
};

const power = function(int1, int2) {
	return int1 ** int2;
};

const factorial = function(n) {
	if (n === 0 ) return 1;
  let product = 1;
  for (let i = 1; i <= n; i++) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
