const div = document.createElement("div");

const red = document.createElement("h1");
red.classList.add("red");
red.textContent = "Hey, Im red";
div.appendChild(red);

const blue = document.createElement("h3");
blue.classList.add("blue");
blue.textContent = "Im a blue";
div.appendChild(blue);

const secdiv = document.createElement("div");
secdiv.classList.add("secdiv");

const h1 = document.createElement("h1");
h1.textContent = "Im in a div";

const p = document.createElement("p");
p.textContent = "ME TOO!!!";
secdiv.appendChild(h1);
secdiv.appendChild(p);
div.appendChild(secdiv);

document.body.appendChild(div);