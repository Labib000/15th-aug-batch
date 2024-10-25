// ways of selection:
// 1. getElementsByTagName()

// document.getElementsByTagName()
// let allH1 = document.getElementsByTagName("h1"); //array 

// console.log(allH1);
// console.log(allH1[0]);
// console.log(allH1[1]);

// WET (WRITE EVERYTHING TWICE)
// allH1[0].style.color = "red"
// allH1[0].style.backgroundColor = "yellow"
// allH1[0].style.fontSize = "100px"

// DRY (DONOT REPEAT YOURSELF)
// allH1[0].style.cssText =`
//                           color:red;
//                           background-color:green;
//                           font-size:100px;
//                         `

// --------------------------
// 2. getElementById() -> first-occurance
// let idSelect = document.getElementById('sam'); //element

// console.log(idSelect);

// idSelect.style.color = "orange"
// idSelect.style.cssText = `color:orange;background-color:green;`


// --------------------------
// 3. getElementsByClassName()


// let classEle = document.getElementsByClassName('vohra'); //array

// console.log(classEle);
// // each one of them
// // classEle[0].style.color = "red"
// // classEle[1].style.color = "red"
// // classEle[2].style.color = "red"

// // alternative

// for(let item of classEle){
//     item.style.cssText = `color:red; font-size:50px;text-decoration:line-through;`
// }


// --------------------------
// 4. querySelector() -> singular (only first occurance)
// let selector1 = document.querySelector('h1') //tagname
// let selector2 = document.querySelector('#sam') //classname
// let selector3 = document.querySelector('.vohra') //id
// console.log(selector1 , selector2 , selector3);


// --------------------------
// 5. querySelectorAll() -> plural (all the occurances)
// let selector1 = document.querySelectorAll('h1') //tagname
// let selector2 = document.querySelectorAll('#sam') //classname
// let selector3 = document.querySelectorAll('.vohra') //id
// console.log(selector1 , selector2 , selector3);