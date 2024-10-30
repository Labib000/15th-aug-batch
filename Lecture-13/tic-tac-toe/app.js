let cellElements = document.querySelectorAll('.cell');

console.log(cellElements);

for(let item of cellElements){
    item.addEventListener('click' , handleClick)
}
