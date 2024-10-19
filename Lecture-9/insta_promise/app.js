
// 4 steps
//selecting image
function step1(){
    console.log(`plzz wait i am selecting image...`);
    
    return new Promise( function( resolve , reject ){
        setTimeout( function(){
            resolve("selected image")
        } , 4000 )
    } )
}

function step2(image){
    console.log(`plzz wait i am applying filter to ${image}`);
    
    return new Promise( function( resolve , reject ){
        setTimeout( function(){
            resolve("filtered image")
        } , 2000 )
    } )
    
}

function step3(filter){
    console.log(`plzz wait adding caption to ${filter}`);
    
    return new Promise( function( resolve , reject ){
        setTimeout( function(){
            resolve("captioned image")
        } , 6000 )
    } )
}

function step4(caption){
    console.log(`plzz wait uploading ${caption}`);
    
    return new Promise( function( resolve , reject ){
        setTimeout( function(){
            resolve("image uploaded")
        } , 5000 )
    } )
}

// pyramid of DOOM ? horizontal growth? ❌

// drawback ? -> .then() chaining => overcome ? => 

step1()
.then( function(image){
    console.log(image);
    return step2(image)
} )
.then( function(filter){
    console.log(filter);
    return step3(filter);
} )
.then(function(caption){
    console.log(caption);
    return step4(caption)
})
.then(function(upload){
    console.log(upload);
})
.catch(function(err){
    console.log(err);
})









