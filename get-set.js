class Person {
    constructor(name) {
        this.name = name;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        newName = newName.trim();
        if (newName === '') {
            throw 'The name cannot be empty';
        }
        this._name = newName;
    }
}

const person = new Person('Ram');
console.log(person);



let meeting = {
    attendees: [],
    add(attendee) {
        console.log(`${attendee} joined the meeting.`);
        this.attendees.push(attendee);
        return this;
    },
    get latest() {
        let count = this.attendees.length;
        console.log(count);
        return count == 0 ? undefined : this.attendees[count - 1];
    }
};

meeting.add('Ram').add('Ramnewas').add('RJ');
console.log(`The latest attendee is ${meeting.latest}.`);