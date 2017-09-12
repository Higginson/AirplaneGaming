class SceneEnd extends GuaScene {
  constructor(game) {
    super(game);

    game.registerAction('Enter', function () {
      let s = Scene.new(game);
      game.replaceScene(s);
    });
  }

  draw() {
    // draw labels
    this.game.context.fillText("游戏结束！按 Enter 重新开始游戏", 100, 200);
  }

}

