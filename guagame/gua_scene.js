class GuaScene {
  constructor(game) {
    this.game = game;
    this.elements = [];
  }

  static new(game) {
    return new this(game);
  }

  addElement(img) {
    img.scene = this;
    this.elements.push(img);
  }

  draw() {
    for (let i = 0; i < this.elements.length; i++) {
      let e = this.elements[i];
      this.game.drawImage(e);
    }
  }

  update() {
    for (let i = 0; i < this.elements.length; i++) {
      let e = this.elements[i];
      e.update();
    }
  }
}
