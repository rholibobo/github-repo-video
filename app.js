const screen = document.querySelector("div");
const text = document.querySelector("h1");
const btn = document.querySelector("button");

btn.addEventListener('click', ()=>{
    text.innerHTML = "Thanks for watching this video";
    text.style.color = "white";
    screen.style.backgroundColor = "black";
});

