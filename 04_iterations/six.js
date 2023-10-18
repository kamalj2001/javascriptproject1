// const codding = ["javascript", "php", "python", "css", "html", "react js"];

// const value = codding.forEach((item ,value) =>{
//     //console.log(item , value);
//     return item;
// });
// console.log(value);


// const myNum =[1,2,3,4,5,6,7,8,9,10];
// const newNum = myNum.filter((num) => num > 4);
// console.table(newNum);


// const myNum =[1,2,3,4,5,6,7,8,9,10];
// const newNum = myNum.filter((num) =>{
//     return num > 6;
// });
// console.table(newNum);

// const myNum =[1,2,3,4,5,6,7,8,9,10];

// const newNums = [];

// myNum.forEach((num)=>{
//     if(num > 4){
//         newNums.push(num);
//     }
// })

// console.log(newNums);

const books = [
    {
        title:'Book One',
        genre:'Fiction',
        publish:1990,
        edition:2004
    },
    {
        title:'Book Two',
        genre:'Science',
        publish:1992,
        edition:2005
    },
    {
        title:'Book Three',
        genre:'Phycies',
        publish:1987,
        edition:1994
    },
    {
        title:'Book Four',
        genre:'Chemistry',
        publish:1995,
        edition:2009
    },
    {
        title:'Book Five',
        genre:'Fiction',
        publish:1996,
        edition:2007
    },
    {
        title:'Book Six',
        genre:'Non-Fiction',
        publish:1989,
        edition:2000
    },
    {
        title:'Book Seven',
        genre:'Hindi',
        publish:2005 ,
        edition:2010
    },
]


// const userBooks = books.filter((book_bk) =>{
//     //console.log(book_bk);
//     return book_bk.genre === "Fiction";
// });
// console.table(userBooks);

let userBooks = books.filter((book_bk) => book_bk.genre === "Fiction");
userBooks = books.filter((book_bk) => book_bk.publish >= 2000);
userBooks = books.filter((book_bk) => book_bk.edition >= 2005);
//console.table(userBooks);

const userBooks_02 = books.filter((book_bk) =>{
    return book_bk.genre === "Fiction" && book_bk.edition >= 2000;
});
console.table(userBooks_02);