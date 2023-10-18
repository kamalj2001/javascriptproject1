// for of loop

const arr = [1, 2, 3, 4, 5];
for (const arrys of arr) {
    //console.log(arrys);
}

const arr2 = ["apple", "mango", "orange", "graprs"];
for (const fruits of arr2) {
    //console.log(arr2);
}

const sty = "kamal";
for (const frist of sty) {
    //console.log(frist);
}

//Maps

const map = new Map();
map.set('IN' , "India");
map.set('USA' , "United States of America");
map.set('Fr' , "France");
//map.set('IN' , "India");

//console.log(map);


for (const [key , value] of map) {
    console.log(key, ":-", value);
}

const myobject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}
// for of loop not working in object and other mathed use in object
// for (const [key, value] of myobject) {
//     console.log(key, ":-", value);
// }