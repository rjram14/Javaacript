//Same input always return same output
//No side effect
//pure function = constant results

const pureFunction = (x, y) => {
    
    return x + y;
}

console.log(pureFunction(2, 3));
console.log(pureFunction(2, 3));


// pure inbuild functions
let str = "ram";
console.log(String.prototype.toUpperCase(str));

















