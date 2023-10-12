//const userEmail = "kamaljeet.ai";
const userEmail = [];

// if (userEmail) {
//     console.log("got user email");
// }else{
//     console.log("error");
// }

//falsy value

//false, -0, 0, undefined, null, NaN, BigInt 0n, ""

//truty value

// "0" , "false", " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array Is Empty");
// }

const emptyobject = {};
if (Object.keys(emptyobject).length === 0) {
     console.log("Object Is Empty");
}

//Nullish Coalescing Operator (??) : null & undefined

let val1;
//val1 = 15 ?? 10
//val1 = null ?? 10;
//val1 = null ?? undefined;
//val1 = 10 ?? undefined;
//val1 = undefined ?? 109;
val1   =  null ?? 123 ?? 90;
console.log(val1);

//Terniary operator

//condition ? true : false

const iceTeaprice = 100;
iceTeaprice <= 80 ? console.log("less then 80") : console.log("more then 80");