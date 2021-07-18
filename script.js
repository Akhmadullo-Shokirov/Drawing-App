const canvas = document.querySelector('canvas');
const bodyEl = document.querySelector("body");
const ctx = canvas.getContext('2d');
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");

const sizeEl = document.getElementById("size");

let size = sizeEl.innerText;
let isPressed = false;
let color = "black";
let x = undefined;
let y = undefined;

canvas.addEventListener("mousedown", (e) => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
});
bodyEl.addEventListener("mouseup", (e) => {
    isPressed = false;
    x = undefined;
    y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
    if(isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        
        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }
});


decreaseBtn.addEventListener("click", () => {
    size -= 5;

    if(size < 5) {
        size = 5;
    }
    sizeEl.innerText = size;
});

increaseBtn.addEventListener("click", () => {
    size += 5;

    if(size > 50) {
        size = 50;
    }

    sizeEl.innerText = size;
});

colorEl.addEventListener("change", (e) => {
    color = e.target.value;
});

clearEl.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineWidth = size * 2;
    ctx.strokeStyle = color;
    ctx.stroke();
}