const canvas = document.querySelector("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
let count = 0;

const c = canvas.getContext("2d");
let circles = [];

const mouse = {
  x: 0,
  y: 0,
};

window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
  //   circles = []
//   if (count % 5 === 0) {
    //   }
    //   count++;
});

setInterval(() => {
    createCircles();
}, 100)

let colors = ['#BB0000', '#666666', '#DDDEC6', '#453831', '#000000']

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.color = colors[Math.floor(Math.random() * 5)]

  this.draw = () => {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
  };

  this.update = () => {
    this.draw();
    this.x += this.dx;
    this.y += this.dy;
    // if (
    //   this.x - mouse.x <= 50 &&
    //   this.x - mouse.x >= -50 &&
    //   this.y - mouse.y <= 50 &&
    //   this.y - mouse.y >= -50
    // ) {
    //     // return;
    //     this.radius -= 1;
    // } 
  };
}

let index = 0;

function createCircles() {
    let x = mouse.x + Math.random() * 60 - 30;
    let y = mouse.y + Math.random() * 60 - 30;
    let radius = 10 + Math.random() * 35;
    let dx = 3 + Math.random()*3;
    let dy = -(Math.random() * 3 + 3);

    circles[index] = new Circle(x, y, dx, dy, radius);
    circles[index+1] = new Circle(x, y, dx, dy, radius);
    circles[index+2] = new Circle(x, y, dx, dy, radius);
    index += 3;
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = 0; i < circles.length; i++) {
    //   circles[i].draw()
    circles[i].update();
  }
}
animate();
