// Array

//const myArray = [1,"kamaljeet",3,"singh",5,6,7,8,9];
//console.log(myArray[4]);

//const fristArray = ["rom","ram","cddisk","flofidisk","harddisk"];
//const secondArray = ["piral","siah","hello","props"];

//console.log(...secondArray,secondArray);

const another_array = [1,2,3,[4,5,6],7,[8,9,[10,89]]];

const real_another_array =  another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("kamal"));
console.log(Array.from("kamal"));

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
