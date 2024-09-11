const boxes = document.querySelectorAll(".box");
const winningIndexes = [[0,1,2], [3,4,5], [6,7,8],
                        [0,3,6], [1,4,7], [2,5,8],
                        [2,4,6], [0,4,8]];
let plyOneclicked = [];
let plyTwoclicked = [];
let numberOfClicks = 0;
let turn = 3;
const oneSvg = document.querySelector('.ply1 .user .turn svg');
const twoSvg = document.querySelector('.ply2 .user .turn svg');
twoSvg.style.fill = 'white';
oneSvg.style.fill = 'blue';
function changTurns(){
    if(turn%2!==1){
        twoSvg.style.fill = 'white';
        oneSvg.style.fill = 'blue';
    }else{
        oneSvg.style.fill = 'white';
        twoSvg.style.fill = 'red';
    }
}
let player1 = [0,0];
let player2 = [0,0];
let boxClick = [];
function checkIfPush(arrs, num){
    return arrs.includes(num);
}
boxes.forEach((box,index) => {
    box.addEventListener('click', () => {
        if(!checkIfPush(boxClick,index)){
            boxClick.push(index);
            if(numberOfClicks<9){
                if(turn%2===1){
                    box.style.backgroundColor = 'blue';
                    plyOneclicked.push(index);
                    changTurns();
                    if(checkWinner(plyOneclicked, winningIndexes)){
                        alert("Player One Won");
                        player1[0] += 1;
                        player2[1] += 1;
                        const oneWin = document.querySelector('.ply1 .record .win');
                        const twoLose = document.querySelector('.ply2 .record .lose');
                        oneWin.textContent = player1[0];
                        twoLose.textContent = player2[1];
                        updating('1');
                    }
                }else{
                    box.style.backgroundColor = 'red';
                    plyTwoclicked.push(index);
                    changTurns();
                    if(checkWinner(plyTwoclicked, winningIndexes)){
                        alert("Player Two Won");
                        player2[0] += 1;
                        player1[1] += 1;
                        const twoWin = document.querySelector('.ply2 .record .win');
                        const oneLose = document.querySelector('.ply1 .record .lose');
                        twoWin.textContent = player2[0];
                        oneLose.textContent = player1[1];
                        updating('2');
                    }
                }
                turn++;
            }else{
                alert("DRAW");
                updating('DRAW');
            }
            numberOfClicks++;
        }
        
    });
});
function updating(winner){
    plyOneclicked = [];
    plyTwoclicked = [];
    boxClick = [];
    numberOfClicks = 0;
    if(winner==='1'){
        turn = 3;
        twoSvg.style.fill = 'red';
        oneSvg.style.fill = 'white';
    }else{
        turn = 2;
        twoSvg.style.fill = 'white';
        oneSvg.style.fill = 'blue';
    }
    boxes.forEach((box) => {
        box.style.backgroundColor = 'black';
    });
    
}
function checkWinner(array, winningIndexes) {
    return winningIndexes.some(winIndex => 
        winIndex.every(move => array.includes(move))
    );
}