class Player extends GuaImage {
  constructor(game) {
    super(game, "player");
    this.setup();
  }

  setup() {
    this.speed = config.player_speed;
    this.coolDown = 0;
    this.x = 200 - this.w / 2;
    this.y = 400;
    this.alive = true;
  }

  update() {
    if (this.coolDown > 0) {
      this.coolDown--;
    }
  }

  fire() {
    //子弹冷却
    if (this.coolDown === 0) {
      this.coolDown = config.fire_cooldown;//config.fire_cooldown帧之后发射子弹
      let x = this.x + this.w / 2;
      let y = this.y;
      let b = Bullet.new(this.game);
      b.x = x;
      b.y = y;
      this.scene.addElement(b);//?想一想
    }
  }

  kill() {
    let p = this;
    p.alive = false;
  }

  collide(e) {
    let p = this;
    return p.alive && ( rectIntersects(p, e) || rectIntersects(e, p));
  }

  moveLeft() {
    this.move(this.x - this.speed, this.y);
  }

  moveRight() {
    this.move(this.x + this.speed, this.y);
  }

  moveUp() {
    this.move(this.x, this.y - this.speed);
  }

  moveDown() {
    this.move(this.x, this.y + this.speed);
  }

  move(x, y) {
    if (x < 0) {
      x = 0;
    }
    if (x > 400 - this.w) {
      x = 400 - this.w;
    }
    if (y < 0) {
      y = 0;
    }
    if (y > 600 - this.h) {
      y = 600 - this.h;
    }

    this.x = x;
    this.y = y;
  }

  draw() {
    if (this.alive) {
      this.game.drawImage(this);
    }
  }

}
