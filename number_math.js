const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.2345;
console.log(otherNumber.toPrecision(5));

const test1 = 123456798;
console.log(test1.toLocaleString("en-in"));

console.log(Math);
console.log(Math.abs(-1));
console.log(Math.round(4.9));
console.log(Math.ceil(3.9));
console.log(Math.floor(4.1));
console.log(Math.min(4,2,3,4,5,6,1,0));
console.log(Math.max(4,2,3,4,5,6,1,0));
console.log(Math.random());
console.log((Math.random()*100) + 1);
console.log((Math.random()*100) + 1);
 
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);