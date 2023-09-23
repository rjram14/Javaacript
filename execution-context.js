// Execution Context
// Everything in JS happens inside the execution context.
// Assume execution context to be a big box where everything takes place. It has 2 components in it:

// Memory : The place where all the variables and functions are stored as (key:value) pairs. Memory component is also known as variable environment.
// Code : The place where code is executed one line at a time. Code component is also known as Thread of Execution
// JS is a synchronous single-threaded language.
// By single threaded, we mean JS can only run 1 command at a time
// By synchronous single threaded, we mean it can run 1 command at a time, in a specific order

var n = 5;

function square(n) {
  var ans = n * n;
  return ans;
}

var square1 = square(n);
var square2 = square(8);  

console.log(square1)
console.log(square2)