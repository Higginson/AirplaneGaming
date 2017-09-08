const log = console.log.bind(console);

const rectIntersects = function (p, e) {
  if (p.y > e.y && p.y < e.y + e.h / 2) {
    if (p.x > e.x && p.x < e.x + e.w / 2) {
      return true;
    }
    if (p.x + p.w > e.x + e.w / 2 && p.x + p.w < e.x + e.w) {
      return true;
    }
  }
  return false;
};

const randomBetween = function (start, end) {
  let n = Math.random() * (end - start + 1) + start;
  return Math.floor(n);
};

const enableDebugMode = function () {
  window.paused = true;
  //放在window下暂停会很流畅
  window.addEventListener('keydown', function (event) {
    if (event.key === 'p') {
      //暂停
      window.paused = !window.paused;
    }
  });
};

