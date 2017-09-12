class EnemyBullet extends GuaImage {
  constructor(game) {
    super(game, 'bullet');
    this.setup();
    this.alive = true;
  }

  setup() {
    this.speed = config.bullet_speed;
  }

  update() {
    if (window.paused) {
      this.y += this.speed;
    }
  }

  kill() {
    let b = this;
    b.alive = false;
  }

  draw() {
    if (this.alive) {
      this.game.drawImage(this);
    }
  }
}
