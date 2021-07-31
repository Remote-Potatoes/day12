class Obstacle {
  constructor(xPosition, yPosition) {
    this.x = xPosition;
    this.y = yPosition;
    this.radius = 25;
    this.height = 25;
    this.width = 25;
  }

  draw() {
    // circle(this.x - 100, this.y - 150, this.radius);
    push();
    fill("blue");
    rect(this.x, this.y, this.width, this.height);
    pop();
  }

  setRandomPosition() {
    this.x = 25; // RANDOM (WIDTH - this.width)
    this.y = 25; // RANDOM (HEIGHT - this.height)
  }
}
