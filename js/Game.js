class Game {
  constructor() {
    this.player = new Player(50, 150);
    this.obstable = new Obstacle(300, 400);
  }

  setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  }

  draw() {
    background("red");
    this.player.draw();
    this.obstable.draw();
  }
}
