

// console.log("hello");
// console.log("workout for 5 seconds");
// console.log("bye");


// ----------------------------------
// wait in JS?


// setTimeout()  -> delay -> run once after x amount of time
// setInterval() -> repeat-> repeat after a particular interval


// setTimeout(cb , delay)
// setTimeout(function(){} , 5*1000)

// synchronous -> delay here -> js waits for nobody -> js is sync 
// js is async ❌
// js is sync ✅

// console.log("hello");

// setTimeout(function(){
//     console.log("workout for 5 seconds");
    
// } , 5*1000)

// console.log("bye");

// ----------------------------




// INTERVIEW QUESTIONS


// console.log("HELLO AFTER 1 SEC");  // 1

// setTimeout(function(){
//     console.log("HELLO AFTER 5 SEC"); // 
// } , 3000)

// console.log("HELLO AFTER 10 SEC"); // 2

// total -> 3s

// console.log("HELLO AFTER 1 SEC");  // 1 immidiately

// setTimeout(function(){
//     console.log("HELLO AFTER 4 SEC"); // 4 after 4 secs
// } , 4000)
// setTimeout(function(){
//     console.log("HELLO AFTER 2 SEC"); // 3 after 2 secs
// } , 2000)

// console.log("HELLO AFTER 10 SEC"); // 2 immidiately


// // total time = 4s 

// --------------------------


console.log("HELLO AFTER 1 SEC");  // 1 immidiately

setTimeout(function(){
    console.log("HELLO AFTER 4 SEC"); // 3 0 time
} , 0)

console.log("HELLO AFTER 10 SEC"); // 2 immidaitely


// total time = 

