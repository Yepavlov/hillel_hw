"use strict";

const people = [
    {name: "Anna", age: 22},
    {name: "Oleg", age: 31},
    {name: "Maria", age: 27}
];

const firstPersonName = people[0].age;

console.log(firstPersonName);

let oldest = null;

if (people[0].age >= people[1].age && people[0].age >= people[2].age) {
    oldest = people[0];
} else if (people[1].age >= people[0].age && people[1].age >= people[2].age) {
    oldest = people[1];
} else {
    oldest = people[2];
}
console.log(oldest);

const totalAge = people[0].age + people[1].age + people[2].age;
const ageSummary = {
    total: totalAge,
    average: Math.round(totalAge / 3)
};
console.log(ageSummary);