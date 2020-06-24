var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var bkg = new Image();
bkg.src = "../images/clouds-34027_1280.png";

var fish = new Image();
fish.src = "../images/carretest.png";

var leftB = new Image();
leftB.src = "../images/block test.png";

var rightB = new Image();
rightB.src = "../images/block test2.png";

var fishX = 300;
var fishY = 650;

document.addEventListener("keydown", (e) => {
  switch (e.keyCode) {
    case 38: // up arrow
      fishY -= 20;
      break;
    case 40: // down arrow
      fishY += 20;
      break;
    case 37: // left arrow
      fishX -= 20;
      break;
    case 39: // right arrow
      fishX += 20;
      break;
  }
});

let gap = 200;
let ajust = leftB.width + gap;

var obstacles = [];

obstacles[0] = {
  x: 0,
  y: 0,
};

function draw() {
  var fishHeight = 150;
  var fishWidth = 150;
  ctx.clearRect(0,0,canvas.width,canvas.height)
  // ctx.drawImage(bkg, 0, 0);
  ctx.drawImage(fish, fishX, fishY, fishWidth, fishHeight);
  scoreIncrease();
  // drawScore();
  console.log(score);
  drawObstacles();

  requestAnimationFrame(draw);
}

draw();

function drawObstacles() {
  for (let i = 0; i < obstacles.length; i++) {
    ctx.drawImage(leftB, obstacles[i].x, obstacles[i].y);
    ctx.drawImage(rightB, obstacles[i].x + ajust, obstacles[i].y);
    obstacles[i].y++;
    if (obstacles[i].y == 500) {
      obstacles.push({
        x: Math.floor(Math.random() * leftB.width) - leftB.width,
        y: 0,
      });
    }
  }
}

var score = 0;
function scoreIncrease() {
  for (let i = 0; i < obstacles.length; i++) {
    if (obstacles[i].y + leftB.height == 900) {
      score = score + 5;
      return score;
    }
  }
}

function drawScore() {
  ctx.fillStyle = "#0095DD";
  ctx.font = "20px Verdana";
  ctx.fillText("Score : " + score + "points", 10, 10);
}

function checkObstacles(){
  for (let i = 0; i < obstacles.length; i++) {
    if((fishX <= obstacles[i].x + leftB.width

    )
//fishY <= obstacles[i].y &&
//       // fishY +fishHeight<= obstacles[i].y + leftB.height) &&
//         (fishX <= obstacles[i].x + leftB.width ||
//           fishX + fishWidth >= obstacles[i].x + ajust))

// function checkobstacles(){
//   for(let i=0;i<obstacles.length;i++){
// if ( haut poisson <bas objet droite
//   ou haut poisson <bas objet gauche
// bas poisson>haut de l'obstacle


//   fishY +fishHeight< obstacles[i].y||
//   fishY> obstacles[i].y + leftB.height &&
//   fishX + fishWidth< obstacles[i].x + ajus

//   // fishY +fishHeight<= obstacles[i].y + leftB.height) &&
//     (fishX <= obstacles[i].x + leftB.width ||
//       fishX + fishWidth >= obstacles[i].x + ajust))
//  {
//   console.log("Game Over");
//   //document.location.reload
// }

// this.bottom() < obstacle.top() ||
// this.top() > obstacle.bottom() ||
// this.right() < obstacle.left() ||-
// this.left() > obstacle.right()
// );
