const humanBtn = document.querySelectorAll('.human .btn');

let human;

humanBtn.forEach( function(btn, index) {
    btn.addEventListener('click',function() {
        humanBtn.forEach( function(button){
            button.classList.remove('highlight');
        });
        btn.classList.add('highlight');
        human = index;
    });
});

const selected = document.getElementById('select');

selected.addEventListener('click', function() {
    let rand = Math.floor(Math.random() * 3);
    highlightBtn(rand);
    defineWinner(human, rand);
});

const robotBtn = document.querySelectorAll('.robot .btn');

function highlightBtn(rand){
    robotBtn.forEach( function(btn) {
        let a = 0;
        robotBtn.forEach( function(button){
            if(a===rand){
                button.classList.add('highlight');
            }else{
                button.classList.remove('highlight');
            }
            a++;
        });
        
    });
}

const wOrl = document.getElementById('winORlose');

function defineWinner(humanNum, robotNum){
    if(humanNum === 0 && robotNum === 0){
        wOrl.textContent = "DRAW";
    }else if(humanNum === 0 && robotNum === 1){
        wOrl.textContent = "ROBOT WINS";
    }else if(humanNum === 0 && robotNum === 2){
        wOrl.textContent = "HUMAN WINS";
    }else if(humanNum === 1 && robotNum === 0){
        wOrl.textContent = "HUMAN WINS";
    }else if(humanNum === 1 && robotNum === 1){
        wOrl.textContent = "DRAW";
    }else if(humanNum === 1 && robotNum === 2){
        wOrl.textContent = "ROBOT WINS";
    }else if(humanNum === 2 && robotNum === 0){
        wOrl.textContent = "ROBOT WINS";
    }else if(humanNum === 2 && robotNum === 1){
        wOrl.textContent = "HUMAN WINS";
    }else if(humanNum === 2 && robotNum === 2){
        wOrl.textContent = "DRAW";
    }
}