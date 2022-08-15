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