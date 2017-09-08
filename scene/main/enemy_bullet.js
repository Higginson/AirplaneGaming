class EnemyBullet extends GuaImage {
  constructor(game) {
    super(game, 'bullet');
    this.setup();
  }

  setup() {
    this.speed = config.bullet_speed;
  }

  update() {
    if (window.paused) {
      this.y += this.speed;
    }
  }
}
