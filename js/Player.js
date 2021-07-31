class Player {
  constructor(leftValue, topValue) {
    this.x = leftValue;
    this.y = topValue;
    this.width = 50;
    this.height = 50;
    this.rightBoundary = CANVAS_WIDTH - this.width;
    this.bottomBoundary = CANVAS_HEIGHT - this.height;
  }

  draw() {
    this.move();
    this.maintainBoundaries();
    rect(this.x, this.y, this.width, this.height);
  }

  move() {
    if (keyIsDown(DOWN_ARROW)) {
      this.y += 3;
    }

    if (keyIsDown(UP_ARROW)) {
      this.y -= 3;
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 3;
    }

    if (keyIsDown(RIGHT_ARROW)) {
      this.x += 3;
    }
  }

  cantGoOverRight() {
    if (this.x >= this.rightBoundary) {
      this.x = this.rightBoundary;
    }
  }

  maintainBoundaries() {
    // CAN'T GO OVER ON THE RIGHT SIDE
    this.cantGoOverRight();

    // CAN'T GO OVER ON THE BOTTOM SIDE
    if (this.y >= this.bottomBoundary) {
      this.y = this.bottomBoundary;
    }

    // CAN't GO OVER THE LEFT SIDE
    if (this.x <= 0) {
      this.x = 0;
    }

    // CAN'T GO OVER THE TOP SIDE
    if (this.y <= 0) {
      this.y = 0;
    }
  }
}
