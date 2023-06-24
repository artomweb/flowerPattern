let flowers = [];
let img;

let numFlowers = 15;

function preload() {
  img = loadImage("Pattern.png");
}

function setup() {
  createCanvas(1000, 1000, WEBGL);
  //   strokeWeight(5);
  noStroke();

  // for (let c = 0; c < 10000; c++) {
  //   let f = new Flower(random(width), random(height), 100, flowers.length);
  //   let overlap = false;
  //   for (var j = 0; j < flowers.length; j++) {
  //     var other = flowers[j];
  //     var d = dist(f.pos.x, f.pos.y, other.pos.x, other.pos.y);
  //     if (d < f.r * 1.7 + other.r * 1.7) {
  //       overlap = true;
  //     }
  //   }
  //   if (!overlap) {
  //     flowers.push(f);
  //   }
  //   // if (flowers.length > numFlowers - 1) break;
  // }
  // for (let c = 0; c < 10000; c++) {
  //   let f = new Flower(random(width), random(height), 35, flowers.length);
  //   let overlap = false;
  //   for (var j = 0; j < flowers.length; j++) {
  //     var other = flowers[j];
  //     var d = dist(f.pos.x, f.pos.y, other.pos.x, other.pos.y);
  //     if (d < f.r * 1.7 + other.r * 1.7) {
  //       overlap = true;
  //     }
  //   }
  //   if (!overlap) {
  //     flowers.push(f);
  //   }
  //   // if (flowers.length > numFlowers - 1) break;
  // }

  flower = new Flower(width / 2, height / 2, 200);
}

function draw() {
  background("white");
  translate(-width / 2, -height / 2);
  flower.paint();
  // fill("red");
  // for (let i = 0; i < flowers.length; i++) {
  //   flowers[i].paint();
  //   // circle(flowers[i].pos.x, flowers[i].pos.y, flowers[i].r * 1.7 * 2);
  // }

  translate(flower.pos.x, flower.pos.y);

  // noFill();
  // strokeWeight(10);
  // stroke("pink");
  // beginShape();
  // vertex(49.44271909999159, 152.16904260722455);
  // // circle(25, 30, 20);
  // bezierVertex(-141.06846055019352, 194.1640786499874, -228.25356391083682, 74.1640786499874, -129.44271909999162, -94.04564036679568);
  // // circle(25, 30, 20);
  // endShape();
  // texture(img);
  // fill(0, 0, 0, 0);
  // tint(255, 100);
  // image(img, 0, 0, width, height);
  //   circle(width / 2, height / 2, 250);
  noLoop();
}
