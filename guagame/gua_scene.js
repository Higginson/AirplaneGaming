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
    for (let e of this.elements) {
      e.draw();
    }
  }

  update() {
    for (let i = 0; i < this.elements.length; i++) {
      let e = this.elements[i];
      e.update();
    }
  }
}
