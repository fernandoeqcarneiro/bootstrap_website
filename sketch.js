let v = [];
let qtd = 100;

function setup() {
  createCanvas(400, 200);
  canvas.parent('sprinkle-canvas');
  canvas.style('z-index', '1');
  canvas.style('position', 'absolute');
  noStroke();
  
  for (let i = 0; i < qtd; i++) {
    v[i] = {
      x: random(width),
      y: random(height),
      speed: random(1, 5),
      angle: random(-PI / 4, PI / 4), // slight rotation
      color: color(random(255), random(255), random(255))
    };
  }
}

function draw() {
  background(110, 38, 14);

  for (let i = 0; i < qtd; i++) {
    let s = v[i];
    
    // Set color and stroke
    stroke(s.color);
    strokeWeight(3);
    
    // Sprinkle line
    let len = map(s.speed, 1, 5, 12, 8); // inverse relation
    let dx = cos(s.angle) * len;
    let dy = sin(s.angle) * len;
    
    line(s.x, s.y, s.x + dx, s.y + dy);

    // Move sprinkle to the right
    s.x += map(s.speed, 1, 5, 1, 3);

    // Wrap around screen
    if (s.x > width) {
      s.x = 0;
      s.y = random(height);
      s.speed = random(1, 5);
      s.angle = random(-PI / 4, PI / 4);
      s.color = color(random(255), random(255), random(255));
    }
  }
}