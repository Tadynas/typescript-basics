"use strict";
var _a;
let sales = 123456789;
let course = 'TypeScript';
let is_published = true;
let level;
function render(document) {
    console.log(document);
}
let numbers = [1, 2, 3];
let anyNumber = [];
anyNumber[0] = 1;
anyNumber[1] = '1';
let user = [1, 'Ted'];
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return (income || 50000) * 1.2;
    }
    else {
        return (income || 50000) * 1.3;
    }
}
calculateTax(10000);
let employee = {
    id: 1,
    name: 'Ted',
    retire: (date) => {
        console.log(date);
    }
};
let employee2 = {
    id: 1,
    name: 'Ted',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs('10kg');
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
function greet(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else {
        console.log('Hola!');
    }
}
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = null;
log === null || log === void 0 ? void 0 : log('a');
let speed = null;
let ride = {
    speed: speed !== null && speed !== void 0 ? speed : 30
};
function render2(document) {
    if (typeof document === 'string') {
        document.toUpperCase();
    }
}
function reject(message) {
    throw new Error(message);
}
function processEvents() {
    while (true) {
    }
}
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount < 0) {
            throw new Error('Invalid amount');
        }
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value < 0) {
            throw new Error('Invalid value');
        }
        this._balance = value;
    }
}
let account = new Account(1, 'Ted', 0);
account.deposit(100);
console.log(account instanceof Account);
console.log(account.balance);
account.balance = 1;
class SeatAssignment {
}
let seats = new SeatAssignment();
seats.A1 = 'Ted';
seats.A2 = 'Bob';
class Ride {
    start() {
        Ride._activeRides++;
    }
    stop() {
        Ride._activeRides--;
    }
    static get activeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log(Ride.activeRides);
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    walk() {
        console.log('Walking');
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log('Taking a test');
    }
}
let student = new Student(1, 'Ted', 'Greek');
class Teacher extends Person {
    get fullName() {
        return 'Professor ' + super.fullName;
    }
}
let teacher = new Teacher('Ted', 'Greek');
console.log(teacher.fullName);
printNames([
    new Student(1, 'Ted', 'Greek'),
    new Teacher('Bob', 'Rob')
]);
function printNames(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
