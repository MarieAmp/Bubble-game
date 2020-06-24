var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var bkg = new Image();
bkg.src = "../images/clouds-34027_1280.png";

var fish = new Image();
fish.src = "../images/fish-2638627_640.png";

var leftB = new Image();
leftB.src = "../images/brancheG.png";

var rightB = new Image();
rightB.src = "../images/brancheD.png";

var fishX = 300;
var fishY = 650;

document.addEventListener("keydown", (e) => {
    switch (e.keyCode) {
      case 38: // up arrow
        fishY -= 10;
        break;
      case 40: // down arrow
        fishY += 10;
        break;
      case 37: // left arrow
        fishX -= 10;
        break;
      case 39: // right arrow
        fishX += 10;
        break;
    }
  });
  
// let x = canvas.width;
// let minWidth = 100;
// let maxWidth = 300;
// let width = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth);
// let minGap = 200;
// let maxGap = 400;
// let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);

let gap = 250;
let constant = leftB.width + gap;

//gameover obstacles



var obstacles=[];

obstacles[0]={
    x:0,
    y:0
};

function draw() {
  ctx.drawImage(bkg, 0, 0);
  ctx.drawImage(fish, fishX,fishY,150,150);

  for(let i=0;i<obstacles.length;i++){
  ctx.drawImage(leftB, obstacles[i].x,obstacles[i].y,);
  ctx.drawImage(rightB, obstacles[i].x+constant, obstacles[i].y,);

  obstacles[i].y++; 

  if(obstacles[i].y===400){
      obstacles.push({
          x:Math.floor(Math.random() * (leftB.width - rightB.width+1)),
          y:0
      });
  }

  } 
  requestAnimationFrame(draw);
}

draw();

function crashWith(obstacles) {
    return !(
      fish.bottom() < obstacles[i].top() ||
      fish.top() > obstacle[i].bottom() ||
      fish.right() < obstacle[i].left() ||
      fish.left() > obstacle[i].right()
    );
  }