//const tinderUser = new Object(); //singleton
const tinderUser = {}; //nonsingleton
tinderUser.id="123abc"
tinderUser.name="kamal";
tinderUser.isLoginIn = false
//console.log(tinderUser);

const regularUSer = {
    email: "kamaljeet@1234.com",
    fullname :{
        username:{
            fristname:"jashan",
            lastname : "kour",
        }
    }
}
//console.log(regularUSer);
//console.log(regularUSer.fullname.username.fristname);

const obj1 = {1:"a",2:"b"};
const obj2 = {3:"a", 4:"b"};
//const obj3 = {obj1,obj2};
//const obj3 = Object.assign({},obj1,obj2);
const obj3 = {...obj1,...obj2};
//console.log(obj3);

//console.log(tinderUser);
//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(tinderUser.hasOwnProperty('isLoginIn'));
//console.log(tinderUser.hasOwnProperty('isLoinIn'));
//console.log(Object.toString(tinderUser.name));


const course = {
    coursename:"js in hindi",
    price:"999",
    courseInstructor :"kamaljeet singh"
}

//course.courseInstructor;

//                      Array de-Structure                           //

const {courseInstructor:names} = course;
console.log(names);

