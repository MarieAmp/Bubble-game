var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var bkg = new Image();
bkg.src = "../images/clouds-34027_1280.png";

var fish = new Image();
fish.src = "../images/fish-2638627_640.png";

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
  ctx.drawImage(bkg, 0, 0);
  ctx.drawImage(fish, fishX, fishY, 150, 150);

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

    if (
      fishY <= obstacles[i].y + leftB.height &&
      //fishY + fishHeight <= obstacles[i].y + leftB.height &&
      (fishX <= obstacles[i].x + leftB.width || fishX + fishWidth >= obstacles[i].x + ajust)
    ) {
    console.log("collision");
    
    }
  }
  requestAnimationFrame(draw);
}

draw();

// function checkCollisions(allObstacles){
//   for (let i=0; i<allObstacles.length; i++){
//       if (player.x < allObstacles[i].x + allObstacles[i].w &&
//           player.x + 120 > allObstacles[i].x &&
//           player.y < allObstacles[i].y + allObstacles[i].h &&
//           80 + player.y > allObstacles[i].y) {
//            console.log('collision')
//            player.score += 10
//            console.log(player.score)
//            var theScore = document.getElementById('thescore')
//            theScore.innerHTML = `${player.score}`
//        } else if (player.y < allObstacles[i].y) {
//            player.lives -= 1
//            console.log(player.lives)
//        }
//   }
// // }
// function checkCollisions(allObstacles){
//     for (let i=0; i<allObstacles.length; i++){
// if (
//   (fishX < obstacles[i].x + obstacles[i].width &&
//     (fishY < obstacles[i].y + obstacles[i].height ||
//     fishY> obstacles[i].y))
//   //   ||
//   // (fishX + 150 > obstacles[i].x+ obstacles[i].width+ ajust &&
//   //   fishY < obstacles[i].y + obstacles[i].height &&
//   //   fishY>obstacles[i].y)

// ) {
//   window.alert("collision");
// }
//     }
//   }

const backgroundImage = {
  img: img,
  x: 0,
  y: 0,
  speed: -1,

  move: function () {
    this.y += this.speed;
    this.y %= backgroundCanvas.height;
  },
};

// fishY<= obstacles[i].y +leftB.height &&
//  fishY + fish.height <= obstacles[i].y + leftB.height&&
//  (fishX<=obstacles[i]+leftB.width ||
//   fishX+150>=leftB+ajust)
