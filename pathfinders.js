

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

setInterval(() => {
document.getElementById("pathfinders").onmouseover = Event => {
    Event.target.innerText = Event.target.innerText.split("")
    .map(letter => letters[Math.floor(Math.random() * 26)])
    .join("");
},30);
}
