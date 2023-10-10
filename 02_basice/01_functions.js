// const name = "kamal";
// const email = "kamaljeet@gmail.com";

// function myFun() {
//     return name + email;
// }
// console.log(myFun());

// function addTwoNumber(number1,number2) {
//     console.log(number1 + number2);    
// }

function addTwoNumber(number1,number2) {
    //let result = number1 + number2;
    //return result; 

    return number1 + number2;
}
// addTwoNumber(2,4);
// addTwoNumber(2,null);
// addTwoNumber(2,"3");

//const result = typeof(addTwoNumber(2,4));
const result = addTwoNumber(2,4);

//console.log(result);

function loginUserMassage(username) {
    if(username === undefined){
        console.log("please enter a value");
        return;
    }
    return `${username} just logged in`;
}


//console.log(loginUserMassage("kamaljeet"));

function calclulateCartValue(...num1) {
    return num1;    
}
//console.log(calclulateCartValue(100, 200, 300, 400, 500, 600));


const user = {
    usename : 'kiran',
    price : '123'
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.usename} and price is ${anyobject.price}`)
}

//handleObject(user);

handleObject({
    usename:"komaldeep kour",
    price: "234"
});

const myNewArray = [100,300,600,900,1100,1300,1500];

function returnewArray(...newdata) {
    return newdata;
}

console.log(returnewArray(myNewArray));

