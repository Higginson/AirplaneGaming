let __main = function () {

  let images = {
    bullet: 'img/bullet.png',
    cloud1: 'img/cloud1.png',
    cloud2: 'img/cloud2.png',
    player: 'img/player.png',
    sky: 'img/sky.jpg',
    enemy1: 'img/enemy1.png',
    enemy2: 'img/enemy2.png',
    enemy3: 'img/enemy3.png',
    enemy4: 'img/enemy4.png',
    fire: 'img/fire.png'
  };

  GuaGame.instance(30, images, function (g) {
    let s = Scene.new(g);
    // var s = SceneTitle.new(g);
    g.runWithScene(s);
  });

  enableDebugMode();

};

__main();