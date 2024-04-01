const canvas = document.querySelector("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const c = canvas.getContext("2d");

const gravity = 1;
const e = 0.9;

function Ball(x, y, dx, dy, r) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = r;
  this.color = "cyan";

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    c.fillStyle = this.color;
    c.fill();
    c.stroke();
  };

  this.update = function () {
    this.draw();
    if (this.y + this.radius + this.dy >= innerHeight) {
      this.dy = -this.dy * e;
    //   console.log(this.dy);
    } else {
      this.dy += gravity;
    }
    // if (this.x + this.radius >= innerWidth || this.x - this.radius <= 0) {
    //   this.dx = -this.dx;
    // //   console.log(this.dy)
    // }
    this.y += this.dy;
    this.x += this.dx;
  };
}

let circles;

function createCircles() {
  circles = [];
  for (let i = 0; i < 200; i++) {
    let radius = 5 + Math.random() * 20;
    let x = radius + ((Math.random() * (innerWidth)));
    let y = 150 + radius + Math.random() * innerHeight - 300 - (2*radius);
    let dx = 0;
    let dy = Math.random() * 2;
    circles[i] = new Ball(x, y, dx, dy, radius);
  }
}

createCircles();

// init()

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  //   ball.update();
  for (let i = 0; i < circles.length; i++) {
    circles[i].update();
  }
}

// c.beginPath()
// c.moveTo(0, (canvas.height - 100))
// c.lineTo(canvas.width, (canvas.height - 100))
// // c.strokeStyle = "black";
// c.stroke();

animate();
