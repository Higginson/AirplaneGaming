class Enemy extends GuaImage {
  constructor(game) {
    let type = randomBetween(1, 4);
    let name = 'enemy' + type;
    super(game, name);
    this.setup();
    this.alive = true;
  }

  setup() {
    this.speedX = randomBetween(-2, 2);
    this.speedY = randomBetween(2, 5);
    this.x = randomBetween(0, 350);
    this.y = -randomBetween(0, 200);
  }

  update() {
    this.move();
    if (this.y > 600) {
      this.setup();
      this.fire();
    }
  }

  move() {
    if (window.paused) {
      this.x += this.speedX;
      this.y += this.speedY;
    }
  }

  fire() {
    let x = this.x + this.w / 2;
    let y = this.y;
    let b = EnemyBullet.new(this.game);
    b.x = x;
    b.y = y;
    this.scene.addElement(b);//?想一想
    return b;
  }

  collide(e) {
    let p = this;
    return p.alive && (rectIntersects(p, e) || rectIntersects(e, p));
  }

  kill() {
    let e = this;
    e.alive = false;
  }

  draw() {
    if (this.alive) {
      this.game.drawImage(this);
    }
  }


}
