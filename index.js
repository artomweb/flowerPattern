const colours = ["#d95a8d", "#f6f398", "#AED6D5", "#7eca72", "#efa85e"];

function setup() {
  createCanvas(500, 500);
  //   strokeWeight(5);
  noStroke();
}

function draw() {
  translate(width / 2, height / 2);

  const numVertices = random() < 0.5 ? 5 : 6;

  let rndm = random();

  let insideCol = random(colours);

  let backCol = "black";

  if ((insideCol === "#51a09d" || insideCol === "#efa85e") && random() < 0.5) {
    backCol = "#d95a8d";
  }
  drawFlower(backCol, insideCol, numVertices, 100, rndm);

  noLoop();
}

function drawFlower(backCol, insideCol, numVertices, r, rndm) {
  const spacing = 360 / numVertices;

  fill(backCol);

  beginShape();

  for (let i = 0; i < numVertices + 1; i++) {
    const angle = i * spacing;
    let angler = angle + rndm * 100;
    const x = cos(radians(angler)) * r;
    const y = sin(radians(angler)) * r;

    if (i == 0) {
      vertex(x, y);
    } else {
      const cAngle = angler - spacing / 2;
      const cX = cos(radians(cAngle)) * (r * (1.5 + rndm));
      const cY = sin(radians(cAngle)) * (r * (1.5 + rndm));
      quadraticVertex(cX, cY, x, y);
    }
  }
  endShape();

  fill(insideCol);

  beginShape();

  for (let i = 0; i < numVertices + 1; i++) {
    const angle = i * spacing;
    let angler = angle + rndm * 100;
    const x = cos(radians(angler)) * (r - 20);
    const y = sin(radians(angler)) * (r - 20);

    if (i == 0) {
      vertex(x, y);
    } else {
      const cAngle = angler - spacing / 2;
      const cX = cos(radians(cAngle)) * ((r - 20) * (1.5 + rndm));
      const cY = sin(radians(cAngle)) * ((r - 20) * (1.5 + rndm));
      quadraticVertex(cX, cY, x, y);
    }
  }
  endShape();
}
