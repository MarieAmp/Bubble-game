const backgroundImage = {
  img: bkg,
  x: 0,
  y:0,
  speed: -1,

  move: function() {
    this.y += this.speed;
    this.y %= backgroundCanvas.height;
  },

  draw: function() {
    bctx.drawImage(this.img, 0, this.y);
    if (this.speed < 0) {
      bctx.drawImage(this.img, 0, this.y + this.img.height);
    } else {
      bctx.drawImage(this.img, 0, this.y - backgroundCanvas.height);
    }
  },
};



function updateBackgroundCanvas() {
  backgroundImage.move();
  bctx.clearRect(0, 0, backgroundCanvas.width, backgroundCanvas.height);
  backgroundImage.draw();
  
  requestAnimationFrame(updateBackgroundCanvas);
}