let flowers = [];

let numFlowers = 15;
function setup() {
  createCanvas(1000, 1000);
  //   strokeWeight(5);
  noStroke();

  for (let c = 0; c < 10000; c++) {
    let f = new Flower(random(width), random(height), 25, flowers.length);
    // console.log(f.r);
    let overlap = false;
    for (var j = 0; j < flowers.length; j++) {
      var other = flowers[j];
      var d = dist(f.pos.x, f.pos.y, other.pos.x, other.pos.y);
      if (d < f.r * 1.4 + other.r * 1.4) {
        overlap = true;
      }
    }
    if (!overlap) {
      flowers.push(f);
    }
    // if (flowers.length > numFlowers - 1) break;
  }

  flower = new Flower(width / 2, height / 2, 100);
}

function draw() {
  //   flower.paint();
  fill("red");
  for (let i = 0; i < flowers.length; i++) {
    flowers[i].paint();
    // circle(flowers[i].pos.x, flowers[i].pos.y, flowers[i].r * 1.4 * 2);
  }
  //   circle(width / 2, height / 2, 250);
  noLoop();
}
