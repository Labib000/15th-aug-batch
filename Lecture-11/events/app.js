// function handleClick(){
//     console.log("i am pressed!!");
// }

// // way-2
// let btnEl = document.querySelector('button');
// btnEl.onclick = handleClick;

// ------------------------------

// let divEl = document.querySelector('div');

// function iceCream(){
//     console.log("ice cream"); 
// }
// function rollSpicy(){
//     console.log("spicy roll"); 
// }


// divEl.onclick = iceCream;
// divEl.onclick = rollSpicy; //overriding ptoblem

// till here 1 react at a time
// ------------------------------


// way-3 (solution to the previous problem) -> best way
// eventListeners

// let btnEl = document.querySelector('button');
// // btnEl.addEventListener(event , reaction_fn) -> 2 argms -> (in future 3)
// // btnEl.addEventListener('click' , function(){})

// function iceCream(){
//     console.log("ice cream"); 
// }
// function rollSpicy(){
//     console.log("spicy roll"); 
// }

// btnEl.addEventListener('click' , iceCream)
// btnEl.addEventListener('click' , rollSpicy)


// ------------------------------

// let btn1 = document.querySelector('#one')
// let btn2 = document.querySelector('#two')
// let btn3 = document.querySelector('#three')
// let bodyEl = document.querySelector('body')


// btn1.addEventListener('click' , function(){
//     bodyEl.style.backgroundColor = "red"
// })
// btn2.addEventListener('click' , function(){
//     bodyEl.style.backgroundColor = "blue"
// })
// btn3.addEventListener('click' , function(){
//     bodyEl.style.backgroundColor = "green"
// })

 
// ------------------------------