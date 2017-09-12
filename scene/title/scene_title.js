class SceneTitle extends GuaScene {
  constructor(game) {
    super(game);
    game.registerAction('Enter', function () {
      let s = Scene.new(game);
      game.replaceScene(s);
    });

    this.setup();
  }

  setup() {
    let text = [];
    text.push("是男人就坚持打飞机 10 秒");
    text.push("按Enter进入游戏");
    text.push("按j开火");
    text.push("按p暂停");
    let label = GuaLabel.new(this.game, text);
    this.addElement(label);
  }
}
