const con = document.querySelector("#con");

const box = document.createElement("div");
box.setAttribute("id", "box");

con.setAttribute("style",
    "width:100%; height:500px; justify-content:center; display:flex; align-items:center;"
);
box.textContent = "Hi Im Leonardo";

con.appendChild(box);