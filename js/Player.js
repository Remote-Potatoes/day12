class Player {
  constructor(leftValue, topValue) {
    this.left = leftValue;
    this.top = topValue;
    this.width = 50;
    this.height = 50;
  }

  draw() {
    if (keyIsDown(DOWN_ARROW)) {
      this.top += 10;
    }
    rect(this.left, this.top, this.width, this.height);
  }
}
