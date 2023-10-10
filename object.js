//singleton constructor use create
//Object.create

//object literals

//const mySymbol = Symbol("logindataid");
const sym1 = Symbol("logindataid");
//console.log(sym1);
const JsUser = {
    name : "kamal",
    "full name" :"kamaljeet singh",
    age  : 20,
    location : "Jaipur",
    email : "kamaljeet@google.com",
    isLoggedIn : false,
    lastLoginDays:["Monday", "Saturday"],
    [sym1] : "loginsuccess"
}

//console.log(JsUser.name);
//console.log(JsUser["full name"]);
//console.log(JsUser.age);
//console.log(JsUser.location);
//console.log(JsUser.email);
//console.log(JsUser.isLoggedIn);
//console.log(JsUser.lastLoginDays);
//console.log(JsUser[sym1]);

//JsUser.email = "signh@google.com";
//Object.freeze(JsUser);
//JsUser.email = "signh123456@google.com";
//console.log(JsUser.email);

JsUser.greeting = function(){
     console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User ${this.name}`);
}
//console.log(JsUser.greeting);
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo());