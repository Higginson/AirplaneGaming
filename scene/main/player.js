
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
  }

  update() {
    if (this.coolDown > 0) {
      this.coolDown--;
    }
  }

  fire() {
    //子弹冷却
    if (this.coolDown === 0) {
      this.coolDown = config.fire_cooldown;//10帧之后发射子弹
      let x = this.x + this.w / 2;
      let y = this.y;
      let b = Bullet.new(this.game);
      b.x = x;
      b.y = y;
      this.scene.addElement(b);//?想一想
    }
  }

  moveLeft() {
    this.x -= this.speed;
  }

  moveRight() {
    this.x += this.speed;
  }

  moveUp() {
    this.y -= this.speed;
  }

  moveDown() {
    this.y += this.speed;
  }

}
