const log = console.log.bind(console);

const rectIntersects = function (p, e) {
  if (p.y >= e.y && p.y <= e.y + e.h / 2) {
    if (p.x >= e.x && p.x <= e.x + e.w / 2) {
      return true;
    }
    if (p.x + p.w >= e.x + e.w / 2 && p.x + p.w <= e.x + e.w) {
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

//拖拽airplane功能
const drag = function (g, p) {

  let enableDrag = false;
  g.canvas.addEventListener('mousedown', function () {
    let x = event.offsetX;
    let y = event.offsetY;
    // 检查是否点中了ball
    if (p.hasPoint(x, y)) {
      //设置拖拽状态
      enableDrag = true;

    }
  });

  g.canvas.addEventListener('mousemove', function () {
    let x = event.offsetX;
    let y = event.offsetY;
    if (enableDrag) {
      p.x = x - p.w / 2;
      p.y = y - p.h / 2;
    }
  });

  g.canvas.addEventListener('mouseup', function () {
    enableDrag = false;
  });
};

