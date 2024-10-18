
// constructor
// function Sam(){

// }
// // console.log(sam()); //undef
// console.log(new Sam()); //{} //empty object -> constructor -> (convention)=Capital letter


// ------------------

function Person(naam , umar , rang){
    this.namee = naam;
    this.age = umar;
    this.favColor = rang;
    // method
    // this.fn = function(){
    //     return `hi i am ${this.namee}`
    // }
}

Person.prototype.fn = function(){
    return `hi i am ${this.namee}`
}

let p1 = new Person("Maverick" , 2 , "brown")
let p2 = new Person("Samarth" , 99 , "black")










