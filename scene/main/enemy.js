class Enemy extends GuaImage {
  constructor(game) {
    let type = randomBetween(1, 4);
    let name = 'enemy' + type;
    super(game, name);
    this.setup();
  }

  setup() {
    this.speedX = randomBetween(-2, 2);
    this.speedY = randomBetween(2, 5);
    this.x = randomBetween(0, 350);
    this.y = -randomBetween(0, 200);
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.y > 600) {
      this.setup();
      this.fire();
    }
  }


  fire() {
    let x = this.x + this.w / 2;
    let y = this.y;
    let b = EnemyBullet.new(this.game);
    b.x = x;
    b.y = y;
    this.scene.addElement(b);//?想一想
  }


}
