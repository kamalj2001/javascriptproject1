// Immediately Invoked Function Expressions (IIFE) in JavaScript

//simple function
// function chai() {
//    console.log("test@gmail.com"); 
// }
// chai();

//iife use function
// name iife
(function chai() {
    console.log("test@gmail.com"); 
 })();

//arrow function
// simple iife
((name)=> {
    console.log(`my name ${name}`); 
 })("kamaljeet singh");