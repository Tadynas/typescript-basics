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
