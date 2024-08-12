const btn = document.getElementById("btn");
const txt = document.getElementById("txt");

btn.addEventListener("click", buttonClick);

function buttonClick(){
    if(btn.textContent === "CLICK"){
        btn.textContent = "UNCLICK";
        txt.textContent = "The engine has started";
    }else{
        btn.textContent = "CLICK";
        txt.textContent = "The engine has stopped";
    }
}