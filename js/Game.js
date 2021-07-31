class Game {
  constructor() {
    this.player = new Player(50, 150);
  }

  setup() {
    createCanvas(WIDTH, HEIGHT);
  }

  draw() {
    background("red");
    this.player.draw();
  }
}
