

// accessing a var or a fn even before its declaration

// hosting (2)
// -> var         => general hoisting => undefined
// -> let & const => DEAD TEMPORAL ZONE => err (special err)

// console.log(a); // undefined
// abc(); // i am learning hoisting

// var a = 10;
// function abc(){
//     console.log("i am learning hoisting");
// }

// -----------------------
// special err => Cannot access 'a' before initialization => DTZ

console.log(a); // err
abc(); // i am learning hoisting

var a = 10;
// let a = 10;
function abc(){
    console.log("i am learning hoisting");
}







