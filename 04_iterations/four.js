const myobject = {
    js: 'javascript',
    html:'hyper text markup language',
    css : 'case cadding style seet',
    rb : 'ruby'
}
for (const key in myobject) {
    //console.log(myobject[key]);
    //console.log(`${key} shortcut is for ${myobject[key]}`);
}

const programming = ["html" , "css" , "javascript", "pyton", "reactjs", "ruby"];

for (const key in programming) {
    //console.log(programming[key]);
}

const map = new Map();
map.set('IN' , "India");
map.set('USA' , "United States of America");
map.set('Fr' , "France");

for (const key in map) {
    console.log(map[key]);
}
