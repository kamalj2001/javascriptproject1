const myNumber = [1,2,3,4,5,6,7,8,9,10];

//const newNumbers = myNumber.map((num) => num + 20);
//console.table(newNumbers);

const tables = [1,2,3,4,5,6,7,8,9,10];
const newTable = tables
                    .map((num) => num * 2)
                    .map((num) => num + 1)
                    .filter((num) => num <= 11);
console.table(newTable);
