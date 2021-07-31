class Game {
  constructor() {
    this.player = new Player(50, 150);
    this.obstacle = new Obstacle(300, 400);
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
    const aUnderSide = player.y + player.height;
    const bTopSide = obstacle.y;
    if (aUnderSide < bTopSide) {
      return false;
    }

    const aRightSide = player.x + player.width;
    const bLeftSide = obstacle.x;
    if (aRightSide < bLeftSide) {
      return false;
    }

    const aLeftSide = player.x;
    const bRightSide = obstacle.x + obstacle.width;
    if (aLeftSide > bRightSide) {
      return false;
    }

    const aTopSide = player.y;
    const bUnderSide = obstacle.y + obstacle.height;
    if (aTopSide > bUnderSide) {
      return false;
    }

    return true;
  }
}
