//if

// < , > , == , === , >= , <= , != , !==

// if (2 === "2") {
//     console.log("success");
// }else{
//     console.log("error");
// }


// if (2 != 2) {
//     console.log("success");
// }else{
//     console.log("error");
//}

// const balance = 1000;

// if (balance < 500) {
//     console.log("red");
// }else if (balance <= 500) {
//     console.log("green");
// } else if (balance === 500) {
//     console.log("yellow");
// }else if (balance >= 500) {
//     console.log("pink");
// }else if (balance > 500) {
//     console.log("orange");
// }else{
//     console.log("errror");
// }


const isLoginuser = true;
const isLoginusergooleaccount = true;
const isuserCartAdd = true;

if (isLoginuser == true && isLoginusergooleaccount == true && isuserCartAdd == true) {
    console.log("User is login");
}

const userlogin = true;
const usercartadd = true;

if (userlogin == false || usercartadd == false) {
    console.log("User is login");
}else{
    console.log("Error");
}