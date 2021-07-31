class Obstacle {
  constructor(xPosition, yPosition) {
    this.x = xPosition;
    this.y = yPosition;
    this.radius = 25;
    this.height = 25;
    this.width = 25;
    this.leftBoundary = CANVAS_WIDTH - this.width;
    this.color = "blue";
  }

  draw() {
    // circle(this.x - 100, this.y - 150, this.radius);
    push();
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }

  setRandomPosition() {
    // this.x = 25; // RANDOM (WIDTH - this.width)
    this.x = Math.floor(Math.random() * this.leftBoundary);
    this.y = Math.floor(random(this.leftBoundary));
    // this.y = 25; // RANDOM (HEIGHT - this.height)
  }
}

// class GameOverObstacle extends Obstacle {
//   constructor(xPosition, yPosition) {
//     super(xPosition, yPosition);
//     this.isGameOver = true;
//     this.color = "red";
//   }
// }
