// for

// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     console.log(element);
// }

// for (let i = 0; i <= 10; i++) {
//     for (let j = 0; j <= 10; j++) {
//         console.log(i + "*" + j  +" = "+  i*j);
//     }
// }

// const myArray = ["Apple" , 'Tiger', 'Yellow', "Monkay", "Orange", "Big", "Elements"];
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }

for (let index = 0; index <= 20; index++) {
    if (index == 5) {
        console.log(`Deceted 5`);
        break;
    }
    console.log(`Value is ${index}`);
}

for (let index = 0; index <= 20; index++) {
    if (index == 5) {
        console.log(`Deceted 5`);
        continue;
    }
    console.log(`Value is ${index}`);
}