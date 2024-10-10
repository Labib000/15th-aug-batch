//advance array methods => HOF

// forEach
// map
// filter

//do these from MDN

// reduce
// some
// every
// find

// --------------------------

// // 1. forEach() -> not a loop ❌ , it is a method ✅ -> just used for iteration -> doesnot returns anything
// let arr = [10,20,30,40,50];

// // // arr.forEach( cb ) //calling

// //Hof
// let returnedValue = arr.forEach( function(itm , indx){
//     console.log(itm , indx); 
// } ) 

// console.log(returnedValue); //undefined


// let obj = {
//     //method
//     forEach: function(a){
//         console.log("hii" + a);
        
//     }
// }

// obj.forEach(function(){}) //fn calling

// --------------------------

// // 2. map() -> it is a method ✅ -> returns a newArr ->  length of newArr is same as that of old array

// let arr = [10,20,30,40,50];

// //HOF
// // arr.map( cb )
// let newReturnedArray = arr.map( function(item, index){
//     return item*item //square
//     // return item+item
//     // return item+index
//     // return item-index
// } )
// same length
// console.log(arr);
// console.log(newReturnedArray);


// --------------------------

// // 3. filter() -> it is a method ✅ ->  ->  

let arr = [10,20,30,40,50];

//HOF
// arr.filter( cb )
let newReturnedArray =  arr.filter( function(item , index){  
        if(item >= 30){ 
            return true 
        } 
} )

console.log(arr);
console.log(newReturnedArray);
