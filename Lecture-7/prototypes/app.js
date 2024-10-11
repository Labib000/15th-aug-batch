


// let obj = {
//     a: 10,
//     b: 20,
//     fn: function(){
//         console.log("hello from samasrth vohra");
        
//     }
// }


// //properties
// console.log(obj.a); // 10
// console.log(obj.b); // 20
// console.log(obj.c); // undefined -> JS engine -> c not found to JS engine -> undefined

// //methods
// obj.fn()  // hello from samasrth vohra
// obj.sam() // error



// ---------------------


// let obj = {
//     a: 10,
//     b: 20,
//     fn: function(){
//         console.log("hello from samasrth vohra");
        
//     }
// }

// console.log(obj);

// ill directly not be getting any error

// firstly ill check at the prototype =>  Object.prototype

//obj -> parent => Object.prototype // yes
// how can i check the parent? =>  (dender proto) property  => __proto__

// console.log( obj.__proto__ === Object.prototype ); // yes (object)
// console.log( obj.__proto__.__proto__ === Object.prototype ); // no
// console.log( obj.__proto__.__proto__ === null ); // no (object)



// console.log(obj.a); // 10
// console.log(obj.b); // 20
// console.log(obj.d); // undefined
// obj.fn(); // hello from samarth vohra
// console.log(obj.toString()); // error ❌   [object object]

// this could be a part of parent property => 


// -----------------------------

// let arr = [10,20,30,40]








// -----------------------------

//fallback source of obj is ```Object.prototype```
// let obj = {
//     x: 100,
//     sam: function(){
//         console.log("hello sam");
//     }
// }
//parent -> fallback source -> dender proto (__proto__) -> 
// checks the prototype of the obj


// obj.sam(); // hello sam
// obj.samarth(); // error
// console.log( obj.toString() ); // error

// why? (prototype)

// console.log( obj.__proto__ === Object.prototype );
// console.log( obj.__proto__.__proto__ === Object.prototype ); ❌
// console.log( obj.__proto__.__proto__ === null ); //✅


// ----------------------

let arr = [10,20,30,40];
let str = "samarth vohra";

let fun = true;













