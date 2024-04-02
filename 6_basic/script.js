const canvas = document.querySelector("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
const c = canvas.getContext("2d");

const mouse = {
  x: 0,
  y: 0,
};

window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
  animate();
});

let X = canvas.width / 2;
let Y = canvas.height / 2;

//animating it
function animate() {
  // requestAnimationFrame(animate)
  c.clearRect(0, 0, innerWidth, innerHeight);
  let x = mouse.x;
  let y = mouse.y;

  //black Ball in the middle
  c.beginPath();
  c.arc(X, Y, 200, 0, 2 * Math.PI, false);
  c.fillStyle = "black";
  c.fill();

  //circle attached to the cursor
  c.beginPath();
  c.arc(x, y, 30, 0, 2 * Math.PI, false);
  if (
    Math.sqrt(Math.pow(Math.abs(x - X), 2) + Math.pow(Math.abs(y - Y), 2)) <=
    230
  ) {
    c.fillStyle = "red";
  } else {
    c.fillStyle = "black";
  }
  c.fill();
}
