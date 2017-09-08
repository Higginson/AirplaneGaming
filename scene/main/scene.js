class Scene extends GuaScene {
  constructor(game) {
    super(game);
    this.setup();
    this.setupInputs();

  }

  setup() {
    let game = this.game;
    this.numberOfEnemies = 5;
    this.numberOfClouds = 2;
    this.bg = Sky.new(game);
    this.cloud = Cloud.new(game);
    this.player = Player.new(game);

    this.addElement(this.bg);
    this.addElement(this.cloud);
    this.addElement(this.player);
    //add clouds
    this.addClouds();
    //增加敌机
    this.addEnemies();
    // add particles
    // let ps = GuaParticleSystem.new(this.game);
    // this.addElement(ps);


  }

  addEnemies() {
    let es = [];
    for (let i = 0; i < this.numberOfEnemies; i++) {
      let e = Enemy.new(this.game);
      es.push(e);
      this.addElement(e);

      //每架敌机均能开火
      e.fire();

    }
    this.enemies = es;
  }

  addClouds() {
    let cs = [];
    for (let i = 0; i < this.numberOfClouds; i++) {
      let c = Cloud.new(this.game);
      cs.push(c);
      this.addElement(c);

    }
    this.clouds = cs;
  }

  setupInputs() {
    let g = this.game;
    let p = this.player;
    g.registerAction('a', function () {
      p.moveLeft();
    });
    g.registerAction('d', function () {
      p.moveRight();
    });
    g.registerAction('w', function () {
      p.moveUp();
    });
    g.registerAction('s', function () {
      p.moveDown();
    });
    g.registerAction('j', function () {
      p.fire();
    });

    drag(g, p);
  }

  setupKill() {
    let p = this.player;
    let es = this.enemies;
    for (let e of es) {
      if (p.collide(e)) {
        p.kill();
      }
    }
  }

  update() {
    super.update();
    this.setupKill();
  }

}
