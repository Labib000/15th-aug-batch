let cellElements = document.querySelectorAll('.cell');

console.log(cellElements);

let circle_turn = false;
let winning_combinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

for(let item of cellElements){
    item.addEventListener('click' , handleClick , {once:true})
}

function handleClick(e){
    let clickedCell = e.target;
    let currentClass = circle_turn  ? "circle" : "x";
    clickedCell.classList.add(currentClass);

    // check for the win
    if(checkWin(currentClass)){
        document.querySelector('.final-winner').innerHTML = `Winner ${currentClass}`;
        document.querySelector('.final-winner').parentElement.classList.add('show');
    }
    // check draw
    else if(isDraw()){
        document.querySelector('.final-winner').innerHTML = `DRAW`;
        document.querySelector('.final-winner').parentElement.classList.add('show');
    }


    circle_turn = !circle_turn;
}

// draw

function isDraw(){
    return [...cellElements].every((cell)=>{
        return cell.classList.contains('x') || cell.classList.contains('circle')
    })
}

// win -> on every move i have to check it
function checkWin(currentClass){
    return winning_combinations.some((itemRow)=>{
        return itemRow.every((item)=>{
            return cellElements[item].classList.contains(currentClass)
        })
    })
}

// RESTART
function restart(){
    window.location.reload();
}

let restart_btn = document.querySelector('#restart_btn')
restart_btn.onclick = restart;



