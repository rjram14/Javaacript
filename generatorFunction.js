function * createIterator(){
    let friends = ['Pranav', 'Sachin', 'Panam', 'Yogesh', 'Abhilash'];
    for(let i = 0; i < friends.length; i++){
      yield friends[i];
    } 
 }
 
 let iterator = createIterator();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());



let friends = {
    createIterator: function *(items) {
        for (let i = 0; i < items.length; i++) {
            yield items[i];
        }
    },

    *createIterator2(items){
        for (let i = 0; i < items.length; i++) {
            yield items[i];
        }
    }
};

let iterator1 = friends.createIterator(['Pranav', 'Sachin', 'Panam', 'Yogesh', 'Abhilash']);

console.log(iterator1.next());
//{value: 'Pranav', done: false}

console.log(iterator1.next());
//{value: 'Sachin', done: false}

let iterator2 = friends.createIterator2(['goku', 'krillin', 'vegeta']);

console.log(iterator2.next());
//{value: 'goku', done: false}

console.log(iterator2.next());
//{value: 'krillin', done: false}