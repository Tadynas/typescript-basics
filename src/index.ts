// Types
let sales: number = 123_456_789
let course: string = 'TypeScript'
let is_published: boolean = true

// Any
let level
function render(document: any) {
    console.log(document)
}

// Arrays
let numbers: number[] = [1, 2, 3]

let anyNumber = []
anyNumber[0] = 1
anyNumber[1] = '1'

// Tuples
let user: [number, string] = [1, 'Ted']

// Enums 
// (const will shrink js file size)
const enum Size { Small = 1, Medium, Large }
let mySize: Size = Size.Medium
console.log(mySize)



// Functions
function calculateTax(income?: number, taxYear: number = 2022): number {
    if(taxYear < 2022) {
        return (income || 50_000) * 1.2
    } else {
        return (income || 50_000) * 1.3
    }
}

calculateTax(10_000)

// Objects
let employee: {
    readonly id: number,
    name: string
    retire: (date: Date) => void
} = { 
    id: 1, 
    name: 'Ted',
    retire: (date: Date) => {
        console.log(date)
    }
}

// Type aliases
type Employee = {
    readonly id: number,
    name: string
    retire: (date: Date) => void
}

let employee2: Employee = { 
    id: 1, 
    name: 'Ted',
    retire: (date: Date) => {
        console.log(date)
    }
}

// Union types
function kgToLbs(weight: number | string): number {
    // Narowing
    if(typeof weight === 'number') {
        return weight * 2.2
    } else {
        return parseInt(weight) * 2.2
    }
}

kgToLbs(10)
kgToLbs('10kg')

// Intersection types
type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

// Literal types (exact, specific)
type Quantity = 50 | 100
let quantity: Quantity = 100

type Metric = 'cm' | 'inch'

// Nullable types
function greet(name: string | null | undefined) {
    if (name) {
        console.log(name.toUpperCase())
    } else {
        console.log('Hola!')
    }
}

greet(null)

// Optional chaining
type Customer = {
    birthday?: Date
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() }
}

let customer = getCustomer(0)
// Optional property access operator
console.log(customer?.birthday?.getFullYear())

// Optional element access operator
// customers?.[0]

// Optional call
let log: any = null
log?.('a')



// The Nullish Coaelscing Operator
let speed: number | null = null
let ride = {
    speed: speed ?? 30
}


// Type Assertions
// let phone = document.getElementById('phone') as HTMLInputElement
// let phone2 = <HTMLInputElement>document.getElementById('phone')

// phone.value
// phone2.value


// The unknown type
function render2(document: unknown) {
    // Narrowing
    if (typeof document === 'string') {
        document.toUpperCase()
    }
    // document.move()
    // document.fly()
}

// Never type
function reject(message: string): never {
    throw new Error(message)
}

function processEvents(): never {
    while (true) {
        
    }
}

// reject('...')
// console.log('Hello World')


// Creating class
class Account {
    // readonly id: number  // read-only
    // owner: string
    // private _balance: number // private
    nickname?: string // optional

                // Parameter properties
    constructor(public readonly id: number, public owner: string, private _balance: number) {
        // this.id = id
        // this.owner = owner
        // this._balance = balance
    }

    deposit(amount: number): void {
        if (amount < 0) {
            throw new Error('Invalid amount')
        }

        this._balance += amount
    }

    // private calculateTax() {

    // }

    // Getter
    get balance(): number {
        return this._balance
    }

    // Setter
    set balance(value: number) {
        if (value < 0) {
            throw new Error('Invalid value')
        }

        this._balance = value
    }
}


// Creating objects
let account = new Account(1, 'Ted', 0)
account.deposit(100)
console.log(account instanceof Account)


// Getters and setters
console.log(account.balance)
account.balance = 1



// Index signatures
class SeatAssignment {
    [seatNumber: string]: string
}

let seats = new SeatAssignment()

seats.A1 = 'Ted'
seats.A2 = 'Bob'



// Static members
class Ride {
    private static _activeRides: number = 0

    start() {
        Ride._activeRides++
    }

    stop() {
        Ride._activeRides--
    }

    static get activeRides() {
        return Ride._activeRides
    }
}

let ride1 = new Ride()
ride1.start()

let ride2 = new Ride()
ride2.start()

console.log(Ride.activeRides)


// Inheritance
class Person {
    constructor(public firstName: string, public lastName: string) {}

    get fullName() {
        return this.firstName + ' ' + this.lastName
    }

    // Protected members (can be inherited in sub classes)
    protected walk() {
        console.log('Walking')
    }
}

class Student extends Person {
    constructor(public studentId: number, firstName: string, lastName: string) {
        super(firstName, lastName)
    }

    takeTest() {
        this.walk
        console.log('Taking a test')
    }
}

let student = new Student(1, 'Ted', 'Greek')

// Method overriding
class Teacher extends Person {
    override get fullName() {
        return 'Professor ' + super.fullName
    }
}

let teacher = new Teacher('Ted', 'Greek')

console.log(teacher.fullName)


// Polymorphism 
printNames([
    new Student(1, 'Ted', 'Greek'),
    new Teacher('Bob', 'Rob')
])

function printNames(people: Person[]) {
    for (let person of people) {
        console.log(person.fullName)
    }
}

// Abstract classes and methods 
abstract class Shape {
    constructor(public color: string) {}

    abstract render(): void
}

class Circle extends Shape {
    constructor(public radius: number, color: string) {
        super(color)
    }

    override render(): void {
        console.log('Rendering a circle')
    }
}

// let shape = new Shape('red')
// shape.render()



// Interfaces
interface ICalendar {
    name: string
    addEvent(): void
    removeEvent(): void
}

interface ICloudCalendar extends ICalendar {
    sync(): void
}

class GoogleCalendar implements ICalendar {
    constructor(public name: string) {}

    addEvent(): void {
        throw new Error("Method not implemented.")
    }

    removeEvent(): void {
        throw new Error("Method not implemented.")
    }

}

// Generic classes 
class KeyValuePair<K, V> {
    constructor(public key: K, public value: V) {}
}

let pair = new KeyValuePair('1', 2)
pair.key


// Generic functions
class ArrayUtils {
    static wrapInArray<T>(value: T) {
        return [value]
    }
}

let num = ArrayUtils.wrapInArray('1')


// Generic interfaces
interface IResult<T> {
    data: T | null
    error: string | null
}

function fetch<T>(): IResult<T> {
    return { data: null, error: null }
}

interface IUser {
    username: string
}

interface IProduct {
    title: string
}
let result1 = fetch<IUser>()
let result2 = fetch<IProduct>()

// Generic constrain 
function echo1<T extends number | string>(value: T): T {
    return value
}

function echo2<T extends { name: string }>(value: T): T {
    return value
}

interface IPerson {
    name: string
}

function echo3<T extends IPerson>(value: T): T {
    return value
}

function echo4<T extends Person>(value: T): T {
    return value
}


echo1('a')
echo2({ name: 'a' })
echo3({ name: 'a' })
echo4(new Teacher('a', 'b'))


// Extending generic classes
interface IProduct2 {
    name: string
    price: number
}

class Store<T> {
    protected _objects: T[] = []

    add(obj: T): void {
        this._objects.push(obj)
    }

    // keyof operator
    // T is Product => keyof T == 'name' | 'price'
    find(property: keyof T, value: unknown): T | undefined {
        return this._objects.find(obj => obj[property] === value)
    }
}

class CompressibleStore<T> extends Store<T> {
    compress() {}
}

let store = new CompressibleStore<IProduct>()
store.compress()

// Restricting the generic type parameter
// class SearchableStore<T extends { name: string }> extends Store<T> {
//     find(name: string): T | undefined {
//         return this._objects.find(obj => obj.name === name)
//     }
// }

// Fix the generic type parameter
class ProductStore extends Store<IProduct> {
    filterByCategory(category: string): IProduct[] {
        category // To disable warning
        return []
    }
}

// Keyof operator
let store2 = new Store<IProduct2>()
store2.add({ name: 'a', price: 1 })
store2.find('name', 'a')
store2.find('price', 1)
// store2.find('nonExisting', 1)

// Type mapping
type ReadOnly<T> = {
    // Index signature
    // keyof
    readonly [K in keyof T]: T[K]
}

type Optional<T> = {
    [K in keyof T]? : T[K]
}

let product: ReadOnly<IProduct2> = {
    name: 'a',
    price: 1
}



// Class decorators
function Component(constructor: Function) {
    console.log('Component decorator called')
    constructor.prototype.uniqueId = Date.now()
    constructor.prototype.insertInDOM = () => {
        console.log('Inserting the component in the DOM')
    }
}

type ComponentOptions = {
    selector: string
}

// Parameterized Decorators
// Decorator factory
function Component2(options: ComponentOptions) {
    return (constructor: Function) => {
        console.log('Component decorator called')
        constructor.prototype.options = options
        constructor.prototype.uniqueId = Date.now()
        constructor.prototype.insertInDOM = () => {
            console.log('Inserting the component in the DOM')
        }
    }
}

@Component2({ selector: '#form' })
class ProfileComponent {

}