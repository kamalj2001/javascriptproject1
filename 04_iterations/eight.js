//const myNum = [1, 2, 3];
// const myTotal = myNum.reduce(function (acc , currvalue){
//     console.log(`acc ${acc} and currvalue ${currvalue}`);
//     return acc + currvalue;
// }, 0);
// console.log(myTotal);

// const myTotal = myNum.reduce((acc , currvalue) =>{
//     return acc + currvalue;
// }, 0);

// console.log(myTotal);


const shoppingcart = [
    {
        itemName: "js course",
        price:2999
    },
    {
        itemName: "py course",
        price:5000
    },
    {
        itemName: "data course",
        price:6000
    },
    {
        itemName: "php course",
        price:9000
    },
    {
        itemName: "data science",
        price:15000
    }
]


const newshop = shoppingcart.reduce((acc , item) =>{
    return item.price;
}, 0);

console.log(newshop);
