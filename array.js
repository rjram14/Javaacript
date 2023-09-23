//Push

let arr = [1, 2, 3, 4];
arr.push(5);

arr.push(6, 7);

// unshift

let arr1 = [2, 3, 4, 5];
arr1.unshift(0, 1);
//[0, 1, 2, 3, 4, 5];

// We can use the Array.splice() method to add the element at specific index in the array.
// Array.splice(start, count) removes all the count of elements from the start index. It mutates the original array
