class Scene extends GuaScene {
  constructor(game) {
    super(game);
    this.setup();
    this.setupInputs();
  }

  setup() {
    let game = this.game;
    this.numberOfEnemies = 10;
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
    let ps = GuaParticleSystem.new(this.game);
    this.addElement(ps);
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
