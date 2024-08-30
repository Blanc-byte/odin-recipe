document.querySelector("#ffform").addEventListener("submit", confirmPass);

function confirmPass(event) {
    
    const pass = document.querySelector(".password").value;
    const cpass = document.querySelector(".c-password").value;

    if (pass !== cpass) {
        alert("Passwords do not match!");
    }
}
