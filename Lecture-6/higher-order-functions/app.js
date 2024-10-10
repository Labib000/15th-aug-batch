

// hof (higher order functions)
// 2 conditions:
// 1. return a fn(smaller) from another fn(bigger) then i can say => bigger fn is HOF

//HOF - 1
// function bigger(){
//     function smaller(){
    
//     }

//     return smaller;
// }

// ----------------

// if i am accepting/passing a function as an argument to another functions => outer fn = HOF
// HOF - 2
// function outer(fn){
//     fn();
// }

// function inner(){

// }
// outer(inner)



// ----------------------------------

//what are callback functions?

// fn as an argument then that particularr fn (inner) is your cb(callback) function

function outer(fn){
    fn();
}

function inner(){

}
outer(inner)




