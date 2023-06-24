const colours = ["#d95a8d", "#f6f398", "#AED6D5", "#7eca72", "#efa85e", "#efa85e", "#efa85e"];

class Flower {
  constructor(x, y, r, i) {
    this.pos = createVector(x, y);
    this.r = r;
    this.id = i;

    this.numVertices = random() < 0.5 ? 5 : 6;
    this.insideCol = random(colours);
    this.backCol = "black";
    if ((this.insideCol === "#51a09d" || this.insideCol === "#efa85e") && random() < 0.5) {
      this.backCol = "#d95a8d";
    }

    this.rndNmbs = this.getRndNmbs();
  }

  getRndNmbs() {
    let rndNmbs = [];
    for (let i = 0; i < this.numVertices + 1; i++) {
      rndNmbs.push(random());
    }
    return rndNmbs;
  }

  paint() {
    push();
    translate(this.pos.x, this.pos.y);

    const spacing = 360 / this.numVertices;

    fill(this.backCol);

    beginShape();

    // circle(0, 0, 50);

    for (let i = 0; i < this.numVertices + 1; i++) {
      // fill(colours[i]);
      let thisRns = this.rndNmbs[i];
      const angle = i * spacing;
      const y = sin(radians(angle)) * this.r;
      const x = cos(radians(angle)) * this.r;

      if (i == 0) {
        vertex(x, y);
      } else {
        const cAngle = (i - 1) * spacing + spacing / 4;
        const cX = cos(radians(cAngle)) * this.r * 1.5;
        const cY = sin(radians(cAngle)) * this.r * 1.5;
        const cAngle2 = i * spacing - spacing / 4;
        const cX2 = cos(radians(cAngle2)) * this.r * 1.5;
        const cY2 = sin(radians(cAngle2)) * this.r * 1.5;

        const angle2 = i * spacing;
        const aX = cos(radians(angle2)) * this.r;
        const aY = sin(radians(angle2)) * this.r;

        bezierVertex(cX, cY, cX2, cY2, aX, aY);
      }
    }
    endShape();

    // noFill();

    beginShape();

    fill(this.insideCol);

    // circle(0, 0, 50);

    const insideRadius = this.r - this.r / 5;

    for (let i = 0; i < this.numVertices + 1; i++) {
      // fill(colours[i]);
      let thisRns = this.rndNmbs[i];
      const angle = i * spacing;
      let angler = angle;
      const x = cos(radians(angler)) * insideRadius;
      const y = sin(radians(angler)) * insideRadius;

      if (i == 0) {
        vertex(x, y);
      } else {
        const cAngle = (i - 1) * spacing + spacing / 4;
        const cX = cos(radians(cAngle)) * insideRadius * 1.5;
        const cY = sin(radians(cAngle)) * insideRadius * 1.5;
        const cAngle2 = i * spacing - spacing / 4;
        const cX2 = cos(radians(cAngle2)) * insideRadius * 1.5;
        const cY2 = sin(radians(cAngle2)) * insideRadius * 1.5;

        const angle2 = i * spacing;
        const aX = cos(radians(angle2)) * insideRadius;
        const aY = sin(radians(angle2)) * insideRadius;
        // quadraticVertex(cX, cY, x, y);
        // if (i == 1) {
        // console.log(x, y, cX, cY, cX2, cY2);
        bezierVertex(cX, cY, cX2, cY2, aX, aY);
        // vertex(x, y);
        // push();
        // fill((i / this.numVertices) * 220);
        // circle(x, y, 20);
        // circle(cX, cY, 20);
        // circle(cX2, cY2, 20);
        // pop();
        // }
      }
    }
    endShape();
    pop();
  }
}
