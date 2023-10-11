// const user = {
//     username:'kamaljeet',
//     price:'999',
//     welcomeMessage: function(){
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
//     }
// }
// user.welcomeMessage();

// console.log(this);

// function cahi(){
//     console.log(this);
//      const email = "kamjeetsingh@gmail.com";
//     console.log(this.email);     
// }

// cahi();

// const add = (num1, num2) =>{
//     return num1 + num2;
// }
// console.log(add(23,34));

// const add = (num1, num2) => (num1 + num2);
// console.log(add(3,4));

const add = (num1,num2) => ({username:"kamaljeet"});
console.log(add(3,4));