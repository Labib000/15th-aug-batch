


// function samarth(){

// }
// console.log( samarth() );

// -----------------------------

// constructor functions -> new keyword -> return a new object-> start with Capital letter
// function samarth(){

// }
// console.log( new samarth() );

// --------------------------

// let person = {
//     a: 10,
// }
// you can use equal and semicolon here
// function samarth(brand , rang , price){
//     this.bottle = brand;
//     this.color = rang;
//     this.price = price;
// }

// let sam1 = new samarth('btwin' , 'green' , 99) 
// let sam2 = new samarth('cello' , 'blue' , 100) 
// let sam3 = new samarth('nayasa' , 'red' , 150) 
// let sam4 = new samarth('tupperware' , 'white' , 200) 

// console.log(sam1);
// console.log(sam2);
// console.log(sam3);
// console.log(sam4);



// ------------------
// general function smmaller letter
// function sam(){

// }

// // generally preffered with capital letter
// function Samarth(brand , rang , price){
//     this.bottle = brand;
//     this.color = rang;
//     this.price = price;
// }

// let sam1 = new Samarth('btwin' , 'green' , 99) 
// let sam2 = new Samarth('cello' , 'blue' , 100) 
// let sam3 = new Samarth('nayasa' , 'red' , 150) 
// let sam4 = new Samarth('tupperware' , 'white' , 200) 

// // constructor function only
// // new String()
// // new Array()
// // new Date()

// console.log(sam1);
// console.log(sam2);
// console.log(sam3);
// console.log(sam4);



// -----------------------------------------


// function Sam(naam , umar , rang){
//     this.naam = naam;
//     this.age = umar;
//     this.favColor = rang;
//     this.greeting = function(){
//         console.log(`hi i am ${this.naam}`)
//     }
// }

// let s1 = new Sam("samarth" , 20 , "black");
// let s2 = new Sam("maverick" , 2 , "light brown");
// let s3 = new Sam("simba" , 3 , "black");

// console.log(s1);
// console.log(s2);
// console.log(s3);



function Sam(naam , umar , rang){
    this.naam = naam;
    this.age = umar;
    this.favColor = rang;
    // this.greeting = function(){
    //     console.log(`hi i am ${this.naam}`)
    // }
}
// dender proto => s1.__proto__ => Sam.prototype
Sam.prototype.greeting = function(){
    console.log(`hi i am ${this.naam}`)
}


let s1 = new Sam("samarth" , 20 , "black");
let s2 = new Sam("maverick" , 2 , "light brown");
let s3 = new Sam("simba" , 3 , "black");

console.log(s1);
console.log(s2);
console.log(s3);







