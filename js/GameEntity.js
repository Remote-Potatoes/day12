class GameEntity {
  constructor(xPosition, yPosition, height, width) {
    this.x = xPosition || 0;
    this.y = yPosition || 0;
    this.width = width || 25;
    this.height = height || 25;
  }

  get bottomSide() {
    return this.y + this.height;
  }

  get rightSide() {
    return this.x + this.width;
  }

  get leftSide() {
    return this.x;
  }

  get topSide() {
    return this.y;
  }
}
