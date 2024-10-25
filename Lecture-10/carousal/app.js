let imgEl = document.querySelector('img');

let arr = [
    'https://images.unsplash.com/photo-1727259066904-a7a1e43c6a5d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D' , 
    'https://images.unsplash.com/photo-1727461895261-9a006b52f342?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D' , 
    'https://images.unsplash.com/photo-1729779831976-e2b762595f5c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D' , 
    'https://images.unsplash.com/photo-1729552048052-24a21a7821ef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8'
]

let num = 0;

let idd  = setInterval( function(){
    imgEl.setAttribute('src' , arr[num]);
    num = ((num+1) % arr.length); 
} , 2000 )

// let idd2  = setInterval( function(){
//     imgEl.setAttribute('src' , arr[num]);
//     num = ((num+1) % arr.length); 
// } , 2000 )

// total 20s
setTimeout( function(){
    clearInterval(idd)
} , 20000 )




