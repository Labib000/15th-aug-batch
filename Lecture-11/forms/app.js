let formEl = document.querySelector('form');

// formEl.addEventListener('submit' , function(){})

formEl.addEventListener('submit' , function(e){
    console.log(e ,"event");
    e.preventDefault(); //stopping the default nature
    console.log(formEl.children[0].value);
    console.log(formEl.elements[1].value); //only for form
    
})