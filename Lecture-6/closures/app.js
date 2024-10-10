


// function higherOrder(){

//     let a = 10;
//     let b = 20;

//     function macbook(){
//         console.log(a);
//     }
//     macbook();
// }

// higherOrder();





function higherOrder(){

    let a = 10;
    let b = 20;

    function macbook(){
        console.log(a);
    }
    return macbook;
}

let c = higherOrder();
c();









