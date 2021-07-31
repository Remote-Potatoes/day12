class Obstacle extends GameEntity {
  constructor() {
    super();
    this.leftBoundary = CANVAS_WIDTH - this.width;
    this.color = "blue";
    // this.radius = 25;
  }

  draw() {
    // circle(this.x - 100, this.y - 150, this.radius);
    push();
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }

  setRandomPosition() {
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
