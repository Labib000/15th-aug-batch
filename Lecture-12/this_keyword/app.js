// ```this keyword depends on how it is being called upon``` ?

// 1. direct calling       -> window 
// 2. method calling       -> object inside which the method is available
// 3. constructor calling  -> newly created object
// 4. indirect calling     -> CHANGES THE REFERENCE OF THIS POINTER
// 5. arrow fn calling     -> depends on the parent's this value


// ----------------------------------
// 1. direct calling ✅
// function sam(){
//     console.log(this); //window
// }

// sam(); //how -> direct calling


// ----------------------------------
// 2. mathod calling ✅

// let obj = {
//     a: 10,
//     fn: function(){
//         console.log(this); //obj ->  this keyword depends on how it is being called upon
//     }
// }

// obj.fn() //method calling


// ----------------------------------
// 3. constructor calling ✅

// function Sam(){
//     this.naam = "sam";
//     this.age = 11;
// }

// let s1 = new Sam(); //s1
// let s2 = new Sam(); //s2



// ----------------------------------
// 4. indirect calling ✅ (CALL , APPLY , BIND)

// let obj1 = {
//     a:50
// }
// let obj2 = {
//     a:10,
//     fn:function(x,y,z){
//         console.log(this.a , x+y+z);  // this -> obj2
//     }
// }
//changing the binding/reference/pointer of this keyword -> call , apply , bind
// obj1.fn() //?  ❌
// obj2.fn() //? ✅

//accepts new refeence of this keyword -> obj1 => it executes/runs
// obj2.fn.call(obj1,11,22,33)       //=> pass arguments comma seperated
// obj2.fn.apply(obj1,[111,222,333]) //=>pass arguments in array 

// ---
//accepts new refeence of this keyword -> obj1
// bind creates a copy and does not calls it

// let obj1 = {
//     a:50
// }
// let obj2 = {
//     a:10,
//     fn:function(x,y,z){
//         console.log(this.a , x+y+z);  // this -> obj2
//     }
// }

// obj2.fn.call(obj1,11,22,33)    //EXECUTES
// obj2.fn.apply(obj1,[11,22,33])  //EXECUTES

// let newFn = obj2.fn.bind(obj1,1,2,3) //COPY
// newFn()


// ----------------------------------
// 5. arrow fn calling ✅

// let obj = {
//     a: 10,
//     fn : ()=>{
//         console.log(this);  //window -> depends on the parent
//     }
// }
// obj.fn();

// --------------------

// let obj = {
//     a: 10,
//     fn : ()=>{
//         console.log(this);   //window
//         let ans = ()=>{
//             console.log(this);     //window
//         }
//         ans()
//     }
// }
// obj.fn();

// --------------------

// let obj = {
//     a: 10,
//     fn : function(){
//         console.log(this);  //obj
//         let ans = ()=>{
//             console.log(this); //obj    
//         }
//         ans()
//     }
// }
// obj.fn(); //method calling



// -----------------------------------

// eg:
// let sqr = (n)=>{return n*n}
// let sqr = (n)=> n*n
// let sqr = n => n*n
// console.log( sqr(6) );


// ---------------------------------------------

// eg: 
// let obj = {
//     a: 10 ,
//     fn: function(){
//         console.log(this); //obj
//     }
// }

// obj.fn(); //method
// // -------------------------------------
// let obj = {
//     a: 10 ,
//     fn: function(){
//         console.log(this); //obj
//         let sam = function(){
//             console.log(this); //window
//         }
//         sam() //directly 
//     }
// }

// obj.fn(); //method calling


// -------------------------------------
// let obj = {
//     a: 10 ,
//     fn: function(){
//         console.log(this); //window
//         let sam = function(){
//             console.log(this); //window
//         }
//         sam()  //direct
//     }
// }

// let samm = obj.fn;
// samm(); //directly
