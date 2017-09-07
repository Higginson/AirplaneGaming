class GuaParticle extends GuaImage {
  constructor(game) {
    super(game, 'fire');
    this.setup();
  }

  setup() {
    this.life = 20;//帧数
  }

  init(x, y, vx, vy) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
  }

  update() {
    this.life--;
    this.x += this.vx;
    this.y += this.vy;

    let factor = 0.01;

    this.vx += factor * this.vx;
    this.vy += factor * this.vy;
  }
}
