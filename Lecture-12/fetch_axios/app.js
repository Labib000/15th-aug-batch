

// api -> url/link -> end point

// tvmaze api (search) -> https://api.tvmaze.com/search/shows?q=girls

//fetch -> JS ❌ -> WEB API -> BELONGS TO BROWSER -> RETURNS PROMISE -> accepts string
// -> JSON() TO GET THE ENTIRE DATA, THAT ALSO RETURNS A PROMISE



// fetch().then().catch()


// ---------- WAY-1 -----------
// FETCH AND PROMISE

// fetch("https://api.tvmaze.com/search/shows?q=girls")
// .then( (data)=>{
//     return data.json();  //returns a promise
// } )
// .then((resp)=>{
//     console.log(resp , "real entire data");
// })
// .catch((err)=>{
//     console.log(err , "err");
// })


// ---------- WAY-2 -----------
// FETCH AND AASYNC AWAIT

// async function callApi(){
//     let dataPartial = await fetch("https://api.tvmaze.com/search/shows?q=girls");
//     let finalData = await dataPartial.json();
//     console.log(finalData , "final"); 
// }

// callApi()



// ------------------------------------------
// AXIOS -> JS ❌ -> 3RD PARTY LIBRARY -> EXTERANALLY AVAILABLE, I HAVE TO INSTALL/CDN OF IT -> It also returns a promise -> 
//CDN -> CONTENT DELIVERY NETWORK -> WHERE GOOD/FINAL CODES ARE STORED
// gives you the entire data at once

// way-1 (promise & axios)
// axios.get("https://api.tvmaze.com/search/shows?q=girls")
// .then(function(resp){
//     console.log(resp.data , "data"); // .json() ❌
// })
// .catch(function(err){
//     console.log(err , "err"); 
// })


// ------------------------------------------

// way-2 (async & axios)

// async function callAsyncFun(){
//     let resp = await axios.get("https://api.tvmaze.com/search/shows?q=girls");
//     console.log(resp.data);
// }
// callAsyncFun()



