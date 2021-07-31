const game = new Game();

function setup() {
  game.setup();
  // frameRate(0.25); // changes the number of times a frame changes / second
}

function draw() {
  // console.log(frameCount); // counts the current number of times, the draw function has been called
  game.draw();
}

function keyPressed() {
  if (keyCode === SPACE) {
    game.restartGame();
  }
}
