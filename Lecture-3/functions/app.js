

// function anything(){}


//call -> name

// --------------------------

//level-1
// function samarthBhaiya(){
//     let out = 1 + 1;
//     console.log(out);
//     console.log("i am bhaiya");
// }

// calling multiple times
// samarthBhaiya()
// samarthBhaiya()
// samarthBhaiya()


// -------------------------

//
// function samarthBhaiya(){
//     let out = 1 + 1;
//     console.log(out);
//     console.log("i am bhaiya"); 
    //nothing is returned
// }

// console.log( samarthBhaiya() );


// -------------------------

// function samarthBhaiya(){
//     let out = 1 + 1;
//     console.log(out);
//     console.log("i am bhaiya"); 
//     return "lolipop"
//     // return 20
//     // return true
// }
//                                  //after being called
// console.log( samarthBhaiya() ); //===> console.log(lolipop);


// samarthBhaiya()


// -------------------------

//function defination
// function samarthBhaiya(){ //general function
//     let out = 1 + 1;
//     console.log(out);
//     console.log("i am bhaiya"); 
//     return "lolipop"
// }
           //function calling
// console.log( samarthBhaiya() );


// ---------------------------
// parameterised function


// arguments , parameter
// function samarthBhaiya(let a , let b){ //parameter ❌

// function samarthBhaiya(a , b){            //parameter ✅
//     console.log(a+b);
//     return 10; //return something
// }

// // samarthBhaiya(10 , 20)                 //argument      -> 30
// console.log( samarthBhaiya(10 , 20) ); //args = arguments -> 30  
// console.log( 10 ); //args = arguments -> 30  
// console.log( samarthBhaiya(10 , 20) ); //args = arguments -> 30  , 10


// ---------------------------

//default parameterised function
// let a = 10;
// let b; //js engine trying => undefined -> (something)

// function samarthBhaiya(a , b){           
//     console.log(a , b);// 10 , undefined
//     console.log(a + b); //NaN (not a number)

//     console.log(typeof(NaN)); //number
//     console.log(typeof(Infinity)); //number
//     console.log(typeof(-Infinity)); //number
//     console.log(typeof(NaN)); //number
    
//     return 10; 
// }

// console.log( samarthBhaiya(10) ); 


// // ---------------------------


// function samarthBhaiya(a , b){           
//     console.log(a , b);// 10 , null -> (nothing)
//     console.log(a + b); // 10
    
//     return 10; 
// }

// console.log( samarthBhaiya(10 , null) ); 

// ---------------------------


// function samarthBhaiya(a , b = 50){           
//     console.log(a , b);// 10 , 50
//     console.log(a + b); // 60
    
//     return 10; 
// }

// console.log( samarthBhaiya(10) ); 

// ----------------------------
// //defult paramaters
// function samarthBhaiya(a = 100 , b = 50){     //overrident by 10 instead of 100     
//     console.log(a , b);// 10 , 50
//     console.log(a + b); // 60/150 ?
    
//     return 10; 
// }

// console.log( samarthBhaiya() );   //150
// console.log( samarthBhaiya(10) ); // 10 + 50 =  60

// -----------------


// function samarthBhaiya(a , b = 50){     
    // function samarthBhaiya(a = 100 , b = 50){     
// function samarthBhaiya(a=100 , b = 20){   //10 , 50  
//     console.log(a , b);
//     console.log(a + b);
    
//     return 10; 
// }

// console.log( samarthBhaiya() );   //0 args
// console.log( samarthBhaiya(10) );     // 1 args
// console.log( samarthBhaiya(10 , 50) ); // 2 args