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

const balance = 1000;

if (balance < 500) {
    console.log("red");
}else if (balance <= 500) {
    console.log("green");
} else if (balance === 500) {
    console.log("yellow");
}else if (balance >= 500) {
    console.log("pink");
}else if (balance > 500) {
    console.log("orange");
}else{
    console.log("errror");
}