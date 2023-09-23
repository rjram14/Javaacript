//Sets are unique collection of values of any types, which also includes NaN and undefined
let set = new Set();

console.log(set);
//constructor

//Map
//Just like Sets, Maps are also used to store the unique values except here it is key value pair.

// let map = {};
// map.name = 'Ram';
// let val = map.name;
// console.log(val);

let map = new Map();
map.set(1, 'Ramnewas');
map.set(2, 'anil');
map.set(3, 'Ram');
map.set(4, 'ankit');
map.set(4, 'ankit');   //ignores the duplicate values
map.set('4', 'singh');
map.set('fullname', 'My name is Ramnewas singh');
map.set(undefined, 20);
let key = {a: 0, b: 1};
map.set(key, 25);
let key2 =  function() {};
map.set(key2, 27);
map.set(null, 23);
console.log(map.size); // 10
console.log(map);


map.forEach((value, key, ownerMap) => {
    console.log(key + " =>" + value);
    console.log(ownerMap === map);
})

for(const [key,val] of map){
    console.log(key,val);
  }