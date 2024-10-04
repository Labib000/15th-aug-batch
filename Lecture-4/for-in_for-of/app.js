//iterable item(arrays) => for-of
// let arr = [10,20,30,40,50];

// for-of (item = iterator)
// for(let item of arr){
//     console.log(item);
// }

// arr[1] //access array

// ---------------

//obj = non iterable => for-in
let device = {
    charger: "apple",
    wire: true,
    laptop: "macbook air"
}

// device.charger
//itm points to key => 
for(let itm in device){
    console.log(itm);
    // console.log(device.itm); //❌ trying to find itm as the key
    console.log(device[itm]); //✅ trying to find itm as the key
}










