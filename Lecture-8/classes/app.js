

//constructor
// function Person1(naam , umar , rang){
//     this.namee = naam;
//     this.age = umar;
//     this.favColor = rang;
   
// }

// Person1.prototype.fn = function(){
//     return `hi i am ${this.namee}`
// }
// let p3 = new Person1("Maverick" , 2 , "brown")
// let p4 = new Person1("Samarth" , 99 , "black")

// ---------------------------------------------
// inheritance
//class
// class Person{
//     constructor(naam , umar , rang){
//         this.namee = naam;
//         this.age = umar;
//         this.favColor = rang;
//     }
//     // methods
//     fn(){
//         return `${this.namee} , ${this.age} , ${this.favColor}`
//     }
// }

// class Student extends Person{} //give you Student with all the person proerties

// let p1 = new Person("Maverick" , 2 , "brown")
// let p2 = new Person("Samarth" , 99 , "black")
// let p5 = new Student("samm" , 222 , "brown")
// let p6 = new Student("kashish" , 999 , "black")


// ------------------
// inheritance

class Person{
    constructor(naam , umar , rang){
        this.namee = naam;
        this.age = umar;
        this.favColor = rang;
    }
    // methods
    fn(){
        return `${this.namee} , ${this.age} , ${this.favColor}`
    }
}

class Student extends Person{
    constructor(naam , umar , rang , rollNum){
        super(naam , umar , rang);
        this.rollNumber = rollNum;
    }
    fn(){
        return `hello ${this.namee} , ${this.age} , ${this.favColor}`
    }
} 

let p1 = new Person("Maverick" , 2 , "brown")
let p2 = new Person("Samarth" , 99 , "black")
let p5 = new Student("samm" , 222 , "brown" , 8)
let p6 = new Student("kashish" , 999 , "black" , 7)
