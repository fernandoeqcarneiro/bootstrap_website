let v = [];
let qtd = 100;
let canvas;

function setup() {
  const sprinkleContainer = document.getElementById("sprinkle-canvas");

  const w = 1500;
  const h = 500;

  canvas = createCanvas(w, h);
  canvas.parent("sprinkle-canvas"); // ANEXA ao lugar certo

  canvas.style("z-index", "1");
  canvas.style("position", "relative");
  canvas.style("top", "0");
  canvas.style("left", "0");

  noStroke();

  for (let i = 0; i < qtd; i++) {
    v[i] = {
      x: random(width),
      y: random(height),
      speed: random(1, 5),
      angle: random(-PI / 4, PI / 4),
      color: color(random(255), random(255), random(255))
    };
  }
}

function draw() {
  clear(); // leve transparência

  for (let i = 0; i < qtd; i++) {
    let s = v[i];

    stroke(s.color);
    strokeWeight(3);

    let len = map(s.speed, 1, 5, 12, 8);
    let dx = cos(s.angle) * len;
    let dy = sin(s.angle) * len;

    line(s.x, s.y, s.x + dx, s.y + dy);

    s.x += map(s.speed, 1, 5, 1, 3);

    if (s.x > width) {
      s.x = 0;
      s.y = random(height);
      s.speed = random(1, 5);
      s.angle = random(-PI / 4, PI / 4);
      s.color = color(random(255), random(255), random(255));
    }
  }
}