class Scene extends GuaScene {
  constructor(game) {
    super(game);
    this.setup();
    this.operateAirplane();

  }

  setup() {
    let game = this.game;
    this.my_bullets = [];
    this.numberOfEnemies = 8;
    this.numberOfClouds = 3;
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
    let e_bullets = [];
    for (let i = 0; i < this.numberOfEnemies; i++) {
      let e = Enemy.new(this.game);
      es.push(e);
      this.addElement(e);

      //每架敌机均能开火
      let eBullet = e.fire();
      e_bullets.push(eBullet);
    }
    this.enemies = es;
    this.enemies_bullets = e_bullets;
  }

  addClouds() {
    let cs = [];
    for (let i = 0; i < this.numberOfClouds; i++) {
      let c = Cloud.new(this.game);
      cs.push(c);
      this.addElement(c);
    }
  }

  operateAirplane() {
    let g = this.game;
    let p = this.player;
    let bullets = [];
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
      if (p.alive) {
        let bullet = p.fire();
        if (bullet) {
          bullets.push(bullet);
        }
        this.my_bullets = bullets;
      }
    }.bind(this));
    //拖拽 player 飞机
    drag(g, p);
  }

  //撞机后死亡
  killByEnemy() {
    let p = this.player;
    let es = this.enemies;
    let enemies_bullets = this.enemies_bullets;
    //飞机和飞机相撞
    for (let e of es) {
      if (p.collide(e)) {
        p.kill();
        e.kill();
      }
    }
    //被击中了
    for (let b of enemies_bullets) {
      if (p.collide(b)) {
        p.kill();
        b.kill();
      }
    }
  }

  //击毙敌机
  killEnemy() {
    if (this.my_bullets !== []) {
      let my_bullets = this.my_bullets;
      let es = this.enemies;
      //敌人被击落
      for (let my_bullet of my_bullets) {
        for(let e of es) {
          if(e.collide(my_bullet)) {
            log("中");
            e.kill();
            my_bullet.kill();
          }
        }
      }
    }
  }

  update() {
    super.update();
    this.killByEnemy();
    this.killEnemy();
  }

}
