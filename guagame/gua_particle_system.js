class GuaParticleSystem {
  constructor(game) {
    this.game = game;
    this.setup();
  }

  static new(game) {
    return new this(game);
  }

  setup() {
    this.duration = 50;
    this.x = 150;
    this.y = 200;
    this.numberOfParticles = 20;
    this.particles = [];
  }

  update() {
    this.duration--;

    //添加火花
    if (this.particles.length < this.numberOfParticles) {
      let p = GuaParticle.new(this.game);
      //设置初始化坐标
      let s = 2;
      let vx = randomBetween(-s, s);
      let vy = randomBetween(-s, s);

      p.init(this.x, this.y, vx, vy);
      this.particles.push(p);
    }
    //更新所有的小火花
    for (let p of this.particles) {
      p.update();
    }

    //删除死掉的小火花
    this.particles = this.particles.filter(p => p.life > 0);

  }

  draw() {
    if (this.duration < 0) {
      return;
    }
    for (let p of this.particles) {
      p.draw();
    }
  }

}
