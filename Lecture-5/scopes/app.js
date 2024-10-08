// scopes(4)=>
//global   script    functional   block

// {} => swarg ka darwaza === block (technical name)


// independant of block{} (global , script)
// var ->           global
// let or const ->  script
// var a = 10;     //global
// let b = 100;    //script


// dependant of block{} (functional  , block)
// => how is the block encountered (function or not)

// var + block is of a function => functional
// const or let (doesnt matter with any block) => block

// var + block is not from a function => global scope
// function abc(){
    // var c = 100; //functional
    // let d = 20;  //block
// }

// if(true){
//     var c = 100; //global
//     const d = 20;  //block
// }


// ----------------------------

// var a = 10; //global
// const sam = 100000; //script

// if(true){
//     var e = 1;    //global
//     let d = true; //block
// }

// function abc(){
//     var c = 10;    // functional
//     let b = 100;   // block
//     const f = 250; //block
// }
// abc()

// --------------------

// console.log(a);    // hoisting -> undefined
// var a = 10;        // global
// let b = 20;        // script
// console.log(b);    // 20

// bhai();            // hoisting
// function bhai(){
//     var c = 100;      // functional 
//     console.log(c);   // 100
// }
// // it destroys itself/goes out of the callstack

// console.log(c);    // err
// console.log(a);    // 10
// console.log(b);    // 20


//either (fn or block) => no relevance outside the block {}


// // ------------------------------------

// var a = 10;   // global 

// function abc(){
//     console.log(a);  // hoisting -> undefined
//     var a = 1000;    // functional
//     console.log(a);  // 1000
// }

// abc();

// console.log(a); // 10



// ------------------------------------

// var a = 10;   // global 

// function abc(){
//     console.log(a);     // 
//     var a = 1000;    // functional
//     console.log(a);     // 
// }

// abc();

// console.log(a); // 10

// ------------------------------------



// var a = 10;

// function abc(){
//     console.log(a); // undef 
//     var a = 200;
//     console.log(a);  //200  
// }

// console.log(a); //10    
// abc();
// console.log(a); //10    

// ----------------------


// var a = 10; //200

// function abc(){
//     console.log(a);  //  10
//     a = 200;
//     console.log(a);  //  200
// }

// console.log(a); //   10  
// abc();
// console.log(a); //   200


// // ----------------------
// // ans in systematic way (ordered answer)

// let a = 10; //

// function abc(){
//     console.log(a);  // err 
//     let a = 200;
//     console.log(a);  
// }

// console.log(a); //  10   
// abc();
// console.log(a);


// // ----------------------
// // ans in systematic way (ordered answer)

// let a = 10; //200

// function abc(){
//     console.log(a);  //  10
//     a = 200;         //reassign
//     console.log(a);  // 200
// }

// console.log(a); //  10
// abc();
// console.log(a); // 200 


// // ----------------------
// // ans in systematic way (ordered answer)

// let a = 10; // script

// function abc(){
//     const a = 200;   // block
//     console.log(a);  //  200
// }

// console.log(a); //  10
// abc();
// console.log(a); // 10 



// ----------------------
// ans in systematic way (ordered answer)

// const a = 10; // 

// function abc(){
//     a = 200;   // err
//     console.log(a);  // err 200  
// }

// console.log(a); //  10
// abc();
// console.log(a); // 200


// -----------------

var z = 10;
x();
y();
console.log(z);

function x() {
   var z = 20;
  console.log(z);
}

function y() {
   var z = 30;
  console.log(z);
}