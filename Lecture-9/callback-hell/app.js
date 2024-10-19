

// WRONG WAY ❌

//image selection
// function step1(){
//     console.log("plzz wait i am selecting image...");
    
//     setTimeout(function(){
//         return 'selected image'
//     } , 4000)
// }

//adding filter
// function step2(image){
//     console.log(`plzz wait i am applying filter ${image}`);
    
//     setTimeout(function(){
//         return 'filtered image'
//     } , 2000) 
// }

// let selectedImage = step1();
// console.log(selectedImage);
// let filteredImage = step2(selectedImage);
// console.log(filteredImage);


// ------------------------------------------------

// RIGHT WAY ✅
//SELECTING IMAGE


function step1(fn){
    console.log("plzz wait i am selecting image...");
    setTimeout(function(){
        console.log("i have selected the images");
        fn("selected image");
    } , 4000)
}

function step2(image , fn){
    console.log(`plzz wait i am applying filter to the ${image}...`);
    setTimeout(function(){
        console.log("i have applied the filter");
        fn("filtered image");
    } , 2000)
}

function step3(filter , fn){
    console.log(`plzz wait adding caption to the ${filter}... `);
    setTimeout(function(){
        console.log("i have added the caption");
        fn("captioned image")
    } , 6000)
    
}
function step4(caption){
    console.log(`plz wait uploading the ${caption}...`);
    setTimeout(function(){
        console.log("image finally uploaded");
    } , 5000)
    
}


// callback hell or pyramid of DOOM
step1( function(image){
    step2(image , function(filter){
        step3(filter , function(caption){
            step4(caption)
        } )
    } );
} );















//adding caption
// function step3(){

// }

// actually uploading
// function step4(){

// }







