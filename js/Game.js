class Game {
  constructor() {
    this.player = new Player(50, 150);
    this.obstacle = new Obstacle();
    this.points = 0;
  }

  restartGame() {
    if (isLooping()) {
      return;
    }

    loop();
  }

  setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    this.obstacle.setRandomPosition();
  }

  draw() {
    background("magenta");
    this.player.draw();
    this.obstacle.draw();
    if (this.collisionCheck(this.player, this.obstacle)) {
      if (this.obstacle.isGameOver) {
        noLoop();
        return;
      }
      this.obstacle.setRandomPosition();
      this.points++;
    }
    // if (frameCount % 250 === 0) {
    //   this.obstacle = new GameOverObstacle(this.obstacle.x, this.obstacle.y);
    // }
    if (frameCount % 600 === 0) {
      // each 10 seconds
      console.log("GAME OVER, COUNT POINTS");
      noLoop(); // stops the loop
    }
  }

  collisionCheck(player, obstacle) {
    // UA > TB
    // RA > LB
    // LA < RB
    // TA < UB

    if (player.bottomSide < obstacle.topSide) {
      return false;
    }

    if (player.rightSide < obstacle.leftSide) {
      return false;
    }

    if (player.leftSide > obstacle.rightSide) {
      return false;
    }

    if (player.topSide > obstacle.bottomSide) {
      return false;
    }

    return true;
  }
}
