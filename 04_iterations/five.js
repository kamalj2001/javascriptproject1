const codding = ["js", "ruby", "java", "pyton", "php"];
// codding.forEach(function (val){
//     console.log(val);
// });

codding.forEach( (val) =>{
    //console.log(val);
});

function printMe(item) {
    //console.log('====================================');
    //console.log(item);
    //console.log('====================================');
}

codding.forEach(printMe);

codding.forEach((item, index, arr) =>{
    //console.log(item, index, arr);
});


const myCodding = [
    {
        languagename : "hyper text markup lanuage",
        shortname : 'html'
    },
    {
        languagename : "case cadding style seet",
        shortname : 'css'
    },
    {
        languagename : "java script",
        shortname : 'js'
    }
]

myCodding.forEach((key , value) =>{
        //console.log('====================================');
        //console.log(key , value);
        //console.log('====================================');
        console.log(key.languagename);
});