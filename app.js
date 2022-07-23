const container = document.querySelector(".container");

const elements = 500;
for (i = 0; i < elements; i++){
    const box = document.createElement("div");
    box.classList.add("box");
    container.appendChild(box);

    box.addEventListener("mouseover", () => addColor(box));
    box.addEventListener("mouseleave",() => removeColor(box));
}

const colors = ["#e74c3c", "#8e44ed", "#3498db", "green", "grey", "orange", "purple", "white", "indigo"]

function addColor(box) {
    const color = randomColor()
    box.style.backgroundColor = color;
    box.style.boxShadow = `0 0 10px ${color} 0 0 20px ${color}`;
}

function removeColor(box) {
    box.style.backgroundColor = "#1d1d1d";
    box.style.boxShadow = "0 0 2px #000"
}


function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}