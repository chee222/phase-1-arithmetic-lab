// Write your code here
function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}

let num1 = multiply(31, 2);
let num2 = multiply(2, 31);
let multiplied = (multiply = 62 );

console.log(num1); // Output: 62
console.log(num2); // Output: 62
console.log(multiplied); // Output: 62


// Describing the 'random' function
let random = Math.floor(Math.random() * 10) + 1;
console.log(random);


// Describing the 'mod' function
const num3 = 5;
const num4 = 4;
const mod = 4

const remainder = num3 % num4;
console.log(remainder); // Output: 1


// Finding the maximum number
const number= [5, 10, 15, 20];
const max = 20;

const maxNumber = Math.max(...numbers);
console.log(maxNumber); // Output: 20