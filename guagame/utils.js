const log = console.log.bind(console);

const rectIntersects = function (o, b) {
  if (b.y > o.y && b.y < o.y + o.image.height) {
    if (b.x > o.x && b.x < o.x + o.image.width) {
      return true;
    }
  }
  return false;
};

const randomBetween = function (start, end) {
  let n = Math.random() * (end - start + 1) + start;
  return Math.floor(n);
};
