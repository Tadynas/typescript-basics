"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
        this.walk;
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
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log('Rendering a circle');
    }
}
class GoogleCalendar {
    constructor(name) {
        this.name = name;
    }
    addEvent() {
        throw new Error("Method not implemented.");
    }
    removeEvent() {
        throw new Error("Method not implemented.");
    }
}
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair = new KeyValuePair('1', 2);
pair.key;
class ArrayUtils {
    static wrapInArray(value) {
        return [value];
    }
}
let num = ArrayUtils.wrapInArray('1');
function fetch() {
    return { data: null, error: null };
}
let result1 = fetch();
let result2 = fetch();
function echo1(value) {
    return value;
}
function echo2(value) {
    return value;
}
function echo3(value) {
    return value;
}
function echo4(value) {
    return value;
}
echo1('a');
echo2({ name: 'a' });
echo3({ name: 'a' });
echo4(new Teacher('a', 'b'));
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
    find(property, value) {
        return this._objects.find(obj => obj[property] === value);
    }
}
class CompressibleStore extends Store {
    compress() { }
}
let store = new CompressibleStore();
store.compress();
class ProductStore extends Store {
    filterByCategory(category) {
        category;
        return [];
    }
}
let store2 = new Store();
store2.add({ name: 'a', price: 1 });
store2.find('name', 'a');
store2.find('price', 1);
let product = {
    name: 'a',
    price: 1
};
function Component(constructor) {
    console.log('Component decorator called');
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
        console.log('Inserting the component in the DOM');
    };
}
function Component2(options) {
    return (constructor) => {
        console.log('Component decorator called');
        constructor.prototype.options = options;
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.insertInDOM = () => {
            console.log('Inserting the component in the DOM');
        };
    };
}
function Pipe(constructor) {
    console.log('Pipe decorator called');
    constructor.prototype.pipe = true;
}
let ProfileComponent = class ProfileComponent {
};
ProfileComponent = __decorate([
    Component2({ selector: '#form' }),
    Pipe
], ProfileComponent);
function Log(target, methodName, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (message) {
        console.log('Before');
        original.call(this, message);
        console.log('After');
    };
}
class Person2 {
    say(message) {
        console.log('Person says ' + message);
    }
}
__decorate([
    Log
], Person2.prototype, "say", null);
let person = new Person2();
person.say('Hello');
