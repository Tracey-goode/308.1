// Part 1 - Math Probelems

const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// // Example Problem
const isSum50 = (n1 + n2 + n3 + n4) == 50;
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
const isUnder25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
const isValid = isSum50 && isTwoOdd && isUnder25 && isUnique;
console.log(isValid);
// Changed isOver25 - isUnder25 and switched symbols to remove !

const isdivisible = (n1 / 5) && (n2 / 5) && (n3 / 5) && (n4 / 5) >= 1;
console.log(isdivisible);
// true
const isover10 = (n1 > n4);
console.log(isover10)
// true
console.log(((n2 - 1) * n3) % n4);
// -0


// Part 2 - Practical Math

const mile0 = 1500;
const mile1 = 55
const mile2 = 60
const mile3 = 75

let gal1 = "30"
let gal2 = "28"
let gal3 = "23"

const budget = 175;
const cost = 3;

console.log(mile0 / gal1); //50
console.log(mile0 / gal2); //53.57
console.log(mile0 / gal3); //65.21

if (3*(mile0 / gal1)<=175){
  console.log("true")
} else {
  console.log("No")
} // true

if (3*(mile0 / gal2)<=175){
  console.log("true")
} else {
  console.log("No")
} // true

if (3*(mile0 / gal3)<=175){
  console.log("true")
} else {
  console.log("No")
} // no


