1. Even or Odd

const value = (numbers) => 
{
    if(numbers % 2 ===0)
    {
    return "Even";
    }
    else
     {
        return "add";
}
}
console.log(value(2));


2. Result Evaluator — Pass or Fail

const blue = (marks) => 
{
    if(marks<0 ,marks>100){
        console.log("Invalid marks");
        return "Null";
    }   
    if(marks>=50){
    return("pass");
    }else
    {  
        return("Fail");        
    }
}
console.log(blue(145));


3) Maximum Finder — Largest of Three Numbers

const largest = (a, b, c) => {
  let max = a;

  if (b > max) max = b;
  if (c > max) max = c;

  return max;
}
console.log(largest(1,2,3));


4) Accumulator — Sum from 1 to N

function sum(n) {
  let value = 0;

  for (let i = 1; i <= n; i++) {
    value += i;
  }

  return value;
}
console.log(sum(10));


5) Multiplication Table Generator

function printTable(number) {
  for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + number * i);
  }
}
printTable(5);


6) Digit Counter — Number Length Finder

function countDigits(number) {
  number = Math.abs(number);
  let count = 0;

  do {
    count++;
    number = Math.floor(number / 10);
  } while (number > 0);

  return count;
}
console.log(countDigits(12345634567890));


7) Number Reverser

function reverseNumber(number) {
  let reversed = 0;

  while (number > 0) {
    let digit = number % 10;
    reversed = reversed * 10 + digit;
    number = Math.floor(number / 10);
  }

  return reversed;
}

console.log(reverseNumber(12345));


8) Factorial Engine

function factorial(number) {
  let result = 1;

  for (let i = 1; i <= number; i++) {
    result = result * i;
  }

  return result;
}
console.log(factorial(10));


9) Prime Validator

function Prime(number) {
  
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(Prime(10));


10) Pattern Builder — Star Triangle

function printStarPattern(number) {
  for (let i = 1; i <= number; i++) {
    let stars = "";

    for (let j = 1; j <= i; j++) {
      stars = stars + "*";
    }

    console.log(stars);
  }
}

printStarPattern(10);
