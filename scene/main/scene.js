//单例
const config = {
  player_speed: 10,
  cloud_speed: 1,
  enemy_speed: 5,
  bullet_speed: 5,
  fire_cooldown: 9,
};

class Bullet extends GuaImage {
  constructor(game) {
    super(game, 'bullet');
    this.setup();
  }

  setup() {
    this.speed = config.bullet_speed;
  }

  update() {
    this.y -= this.speed;
  }
}

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

class Enemy extends GuaImage {
  constructor(game) {
    let type = randomBetween(1, 4);
    let name = 'enemy' + type;
    super(game, name);
    this.setup();
  }

  setup() {
    this.speed = randomBetween(2, 5);
    this.x = randomBetween(0, 350);
    this.y = -randomBetween(0, 200);
  }

  update() {
    this.y += this.speed;
    if (this.y > 600) {
      this.setup();
    }
  }
}

class Cloud extends GuaImage {
  constructor(game) {
    super(game, 'cloud');
    this.setup();
  }

  setup() {
    this.speed = config.cloud_speed;
    this.x = randomBetween(0, 350);
    this.y = -randomBetween(0, 200);
  }

  update() {
    this.y += this.speed;
    if (this.y > 600) {
      this.setup();
    }
  }
}

class Scene extends GuaScene {
  constructor(game) {
    super(game);
    this.setup();
    this.setupInputs();
  }

  setup() {
    let game = this.game;
    this.numberOfEnemies = 10;
    this.bg = GuaImage.new(game, 'sky');
    this.cloud = Cloud.new(game);
    this.player = Player.new(game);


    this.addElement(this.bg);
    this.addElement(this.cloud);
    this.addElement(this.player);
    //
    this.addEnemies();
  }

  addEnemies() {
    let es = [];
    for (let i = 0; i < this.numberOfEnemies; i++) {
      let e = Enemy.new(this.game);
      es.push(e);
      this.addElement(e);

    }
    this.enemies = es;
  }

  setupInputs() {
    let g = this.game;
    let s = this.player;
    g.registerAction('a', function () {
      s.moveLeft();
    });
    g.registerAction('d', function () {
      s.moveRight();
    });
    g.registerAction('w', function () {
      s.moveUp();
    });
    g.registerAction('s', function () {
      s.moveDown();
    });
    g.registerAction('j', function () {
      s.fire();
    });
  }

  update() {
    super.update();
  }

}
