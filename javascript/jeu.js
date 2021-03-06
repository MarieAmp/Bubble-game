var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Déclaration des variables

var bkg = new Image();
bkg.src = "./images/clouds.png";

var fish = new Image();
fish.src = "./images/fish.png";

var leftB = new Image();
leftB.src = "./images/newBgauche.png";

var rightB = new Image();
rightB.src = "./images/newtestbdroite.png";

var fishX = 300;
var fishY = 550;

let gap = 250;
let ajust = 650; //leftB.width + gap;
console.log("ajust at the begging", ajust);
var score = 0;

var obstacles = [
  {
    x: 0,
    y: 0,
  },
];

var fishHeight = 150;
var fishWidth = 150;

const backgroundImage = {
  img: bkg,
  x: 0,
  y: 0,
  speed: 1,

  move: function () {
    this.y += this.speed;
    this.y %= canvas.height;
  },

  draw: function () {
    ctx.drawImage(this.img, 0, this.y);
    if (this.speed < 0) {
      ctx.drawImage(this.img, 0, this.y + this.img.height);
    } else {
      ctx.drawImage(this.img, 0, this.y - canvas.height);
    }
  },
};

// Définition des fonctions du clavier

document.addEventListener("keydown", (e) => {
  switch (e.keyCode) {
    case 38: // up arrow
      fishY -= 25;
      break;
    case 40: // down arrow
      fishY += 25;
      break;
    case 37: // left arrow
      fishX -= 25;
      break;
    case 39: // right arrow
      fishX += 25;
      break;
  }
});

// Démarrage du jeu et affichage des différents éléments

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  updateBackgroundCanvas();
  ctx.drawImage(fish, fishX, fishY, fishWidth, fishHeight);

  scoreIncrease();
  drawScore();
  drawObstacles();
  checkObstacles();

  requestAnimationFrame(draw);
}

// Lancement du jeu
draw();

// Declaration des fonctions

function drawObstacles() {
  for (let i = 0; i < obstacles.length; i++) {
    console.log("width of branch left", leftB.width);
    ctx.drawImage(leftB, obstacles[i].x, obstacles[i].y);
    ctx.drawImage(rightB, obstacles[i].x + ajust, obstacles[i].y);
    obstacles[i].y++;
    if (score < 20) {
      if (obstacles[i].y == 400) {
        obstacles.push({
          x: Math.floor(Math.random() * leftB.width) - leftB.width,
          y: 0,
        });
      }
    } else {
      if (obstacles[i].y == 300) {
        obstacles.push({
          x: Math.floor(Math.random() * leftB.width) - leftB.width,
          y: 0,
        });
      }
    }
  }
}

function scoreIncrease() {
  for (let i = 0; i < obstacles.length; i++) {
    if (obstacles[i].y + leftB.height == 700) {
      score = score + 5;
      if (score === 100) {
        clearInterval();
        document.location.replace((url = "win.html"));
      }
    }
  }
}

function drawScore() {
  ctx.fillStyle = "black";
  ctx.font = "20px Verdana";
  ctx.fillText("Score : " + score + " points", 10, 700);
}

function checkObstacles() {
  for (let i = 0; i < obstacles.length; i++) {
    if (
      fishY <= obstacles[i].y + leftB.height &&
      fishY + fishHeight >= obstacles[i].y &&
      (fishX <= obstacles[i].x + leftB.width ||
        fishX + fishWidth >= obstacles[i].x + ajust)
    ) {
      // window.alert("Game Over");
      document.location.replace("gameover.html");
    }
  }
}

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function youWin() {
  if (score === 100) {
    clear();
  }
}

function updateBackgroundCanvas() {
  backgroundImage.move();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  backgroundImage.draw();
}
