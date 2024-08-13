const btn = document.getElementById("btn");
const txt = document.getElementById("txt");

btn.addEventListener("click", buttonClick);

function buttonClick(){
    if(btn.textContent === "CLICK"){
        btn.textContent = "UNCLICK";
        txt.textContent = "(4 + 6 + 9) / 77";
    }else{
        btn.textContent = "CLICK";
        txt.textContent = "The engine has stopped";
    }
}

const ess = document.getElementById("es");
(function() {
    ess.textContent = "owwww";
})();


const badS = "strs";
console.log(badS);