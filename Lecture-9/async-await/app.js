
// function sam(){


// }
// console.log( sam() ); //undefined

// -------------------------

// function Sam(){


// }
// console.log( new Sam() ); //{}


// -------------------------

// async function sam(){

//     return 100;
// }
// console.log( sam() ); // promise


// -------------------------
// always returns a promise
// await only works with async fn
// async function sam(){
//     console.log(10);
//     let resp = await fetch('https://api.tvmaze.com/search/shows?q=girls'); //takes time and gives data
//     let data = await resp.json()
//     console.log(data);
    
//     console.log(20);
// }

// console.log(30);

// sam()

// console.log(40);


//old
//30 
//10
//data
//20
//40

// ---------------------------------

async function sam1(){
    console.log(10);
    console.log(20);
    let data = await fetch('https://api.tvmaze.com/search/shows?q=girls')
    console.log(data , "1");
    console.log(30);
    
}
async function sam2(){
    console.log(100);
    let data2 = await fetch('https://api.tvmaze.com/search/shows?q=girls')
    console.log(data2 , "2");
    console.log(200);
}

sam1() 
sam2()


// study arrow fn (before next class)