const humanBtn = document.querySelectorAll('.human .btn');

humanBtn.forEach( function(btn) {
    btn.addEventListener('click',function() {
        humanBtn.forEach( function(button){
            button.classList.remove('highlight');
        });
        btn.classList.add('highlight');
    });
});

let rand = () => Math.floor(Math.random() * 4);

const selected = document.getElementById('select');

selected.addEventListener('click', function() {
    console.log(rand());
});


