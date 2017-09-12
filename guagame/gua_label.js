class GuaLabel {
  constructor(game, text) {
    this.game = game;
    this.text = text;
  }

  static new(game, text) {
    return new this(game, text);
  }

  draw() {
    let labelY = 400 / 2;
    this.text.forEach((element,index) => {
      labelY += 50;
      if (index !== 0){
        this.game.context.fillText(element, 120, labelY);
      } else {
        this.game.context.fillText(element, 100, labelY);
      }
    });
  }

  update() {

  }
}