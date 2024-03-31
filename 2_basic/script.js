const canvas = document.querySelector("canvas");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const c = canvas.getContext("2d");

// let innerHeight = window.innerHeight;
// let innerWidth = window.innerWidth;

let x = 300;
let y = 200;
let dx = 5;
let dy =  2 + Math.random() * 3;
let radius = 20;
// let dy = Math.random() * 4;

let boxPosY = 300;
let cosntdis = 30;

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown") {
    c.clearRect(innerWidth - 70, boxPosY, 25, 90);
    if(boxPosY <= innerHeight - 90){
        boxPosY += cosntdis;
    }else{
        boxPosY += 0
    }
    createRec();
}
if (e.key === "ArrowUp") {
    c.clearRect(innerWidth - 70, boxPosY, 25, 90);
    if(boxPosY >= 0){
        boxPosY -= cosntdis;
    }else{
        boxPosY += 0;
    }
    
    createRec();
  }
});

function createRec() {
  c.fillRect(innerWidth - 70, boxPosY, 25, 90);
}

function animate() {
  requestAnimationFrame(animate);
  //   c.clearRect(0, 0, innerWidth, innerHeight)
  if (x + radius >= innerWidth || x - radius <= 0) {
    dx = -dx;
  }
  if (y + radius >= innerHeight || y - radius <= 0) {
    dy = -dy;
  }
  if (y >= boxPosY && y <= boxPosY + 90 && x + radius >= innerWidth -70){
    dx = -dx;
  }
  c.clearRect(x - 1.5 * radius, y - 1.5 * radius, radius * 3, radius * 3);
  c.beginPath();
  c.fillStyle = "blue";
  c.arc(x, y, radius, 0, 2 * Math.PI, false);
  c.fill();
  c.stroke();
  x = x + dx;
  y += dy;
}

animate();

