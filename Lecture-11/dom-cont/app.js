

// selection
let h1 = document.querySelector('h1')
let h2 = document.querySelector('h2')
let h3 = document.querySelector('h3')

// manipulation ->
// setAttribute ->(not much preffered especially with classes)
// h1.setAttribute('class' , 'sam')
// h2.setAttribute('class' , 'sam')
// h3.setAttribute('class' , 'sam')

// classList (only class)
h1.classList.add("vohra" , "size")
// h1.classList.remove("sam" , "size" , "vohra")
// h1.classList.toggle("sam")
console.log( h1.classList.contains('sam') );










