const canvas = document.querySelector("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const c = canvas.getContext("2d");

let mouseX;
let mouseY;


window.addEventListener('resize', () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    createCircles();
})

let circle = [];
let colors = ["#F29966", "#A66249", "#59271C", "#8C4C3E", "#0D0000"];

window.addEventListener('mousemove', (e) => {
    mouseX = e.x;
    mouseY = e.y;
})

function Circle(x, y, radius, dx, dy, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.dx = dx;
  this.dy = dy;
  this.color = color;
  this.tempRad = radius;
  
  this.draw = () => {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
      c.lineWidth = "5";
      // c.strokeStyle = none;
      c.fillStyle = this.color;
      // c.stroke();
      c.fill();
    };

    this.update = () => {
    this.draw();
    if (this.x - this.radius <= 0 || this.x + this.radius >= innerWidth) {
        this.dx = -this.dx;
    }
    if (this.y - this.radius <= 0 || this.y + this.radius >= innerHeight) {
        this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
    
    if(mouseX - this.x <= 90 && mouseX - this.x >= -90 && mouseY - this.y <= 90 && mouseY - this.y >= -90){
        if(this.radius < 50){
            this.radius += 3;
        }
        // else if(this.radius > 5){
        //     this.radius -= 1;
        // }
    }
    else{
        if(this.radius > this.tempRad){
            this.radius -= 1;
        }
    }
    
};
}

// let tempCicle = new Circle(300, 200, 50, 4, 2);


function createCircles() {
    circle = [];
    for (let i = 0; i < 1000; i++) {
        let ranRadius = 5 + Math.random() * 5;
        let ranColor = colors[Math.floor(Math.random() * 5)];
    let ranX = ranRadius + Math.random() * (innerWidth - 2 * ranRadius);
    let ranY = ranRadius + Math.random() * (innerHeight - 2 * ranRadius);
    let ranDx = Math.random() * 5 - Math.random() * 3;
    let ranDy = Math.random() * 5 - Math.random() * 3;
    circle.push(new Circle(ranX, ranY, ranRadius, ranDx, ranDy, ranColor));
}
}

createCircles();

function ani() {
    requestAnimationFrame(ani);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < circle.length; i++) {
        circle[i].update();
    }
}
ani();


// let x = Math.random() * innerWidth;
// let y = Math.random() * innerHeight;
// let dx = (Math.random() - 2) * 4;
// let dy = (Math.random() - 2) * 4;
// console.log(`dx = ${dx}, dy = ${dy}`);
// let radius = 30;

// function animateBall() {
//   requestAnimationFrame(animateBall);
//   c.clearRect(0, 0, innerWidth, innerHeight);
//   c.beginPath();
//   // c.fillStyle = "white"
//   c.strokeStyle = "white";
//   // c.fill()
//   c.arc(x, y, radius, 0, Math.PI * 2, false);
//   c.stroke();
//   if (x - radius <= 0 || x + radius >= innerWidth) {
//     dx = -dx;
//   }
//   if (y - radius <= 0 || y + radius >= innerHeight) {
//     dy = -dy;
//   }
//   x += dx;
//   y += dy;
// }

// animateBall()
