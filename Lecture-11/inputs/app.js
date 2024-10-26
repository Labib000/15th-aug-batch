// let inpEl = document.querySelector('input');
// // console.log(inpEl);
// inpEl.addEventListener('input' , function(){
//     console.log('i am pressed'); 
// });



// --------------------

// let inpEl = document.querySelector('input');
// inpEl.addEventListener('input' , function(e){   // => e/event
//     // console.log(e.target); 
//     console.log(e.target.value);  //getter/setter
// });



// --------------------
//keydown , keyup

let inpEl = document.querySelector('input');
inpEl.addEventListener('keydown' , function(e){  
    // console.log(e);
    if(e.which === 13){
        console.log(e.target.value);  
    }
});