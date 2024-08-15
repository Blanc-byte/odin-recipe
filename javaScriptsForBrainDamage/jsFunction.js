// function say(){
//     console.log("Hi");
// }

// let said = say();

// said;

// let said = function() {
//     console.log("say Hi")
// };

// said();

// function ask(question, yes, no){
//     if(confirm(question)) yes()
//     else no();
// }

let said = (question, yes, no) => {
    if(confirm(question)) yes
        else no();
}

said(
    "Do you agree?",
    console.log("I agree"),
    console.log("I DisAgree")
);


// let age = prompt("What is your age?", 18);

// let welcome = age < 18 ? 
//             () => console.log("Youre a minor") :
//             () => console.log("Youre not a minor");
// welcome();