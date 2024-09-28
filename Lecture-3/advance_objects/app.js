
let obj = {
    light: true, //properties x 4
    pen: true,
    money: 200,
    whatGivesLight: "ring light" ,
    // fun: function naaaam(){
    fun: function(){
        console.log("i am bhaiya ji");
        // return undefined; //❌
    }
}

console.log(obj["whatGivesLight"]); //prop
console.log(obj.whatGivesLight); //prop
console.log(obj.fun); //method/funtions -> compulsion to call a fn
//obj.naaaam() ❌
obj.fun()
// console.log(obj.fun()); //method/funtions -> compulsion to call a fn












