"use strict";
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
