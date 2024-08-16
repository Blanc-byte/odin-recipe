let answer = parseInt(prompt("Enter the range of number"));

const txt = document.getElementById("txt");

let container = [];

for(let i = 1; i <= answer ; i++){
    container.push(fb(i));
}


txt.textContent = container;

function fb(num){
    if(num%3===0 & num%5===0){
        return "fizzbuzz";
    }
    if(num%3===0){
        return "fizz";
    }
    if(num%5===0){
        return "buzz";
    }
    return num;
}