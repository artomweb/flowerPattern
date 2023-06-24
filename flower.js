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
    for (let i = 0; i < this.numVertices; i++) {
      rndNmbs.push(random());
    }
    rndNmbs.push(rndNmbs[0]); // Make sure end is the same as start so shape is complete
    return rndNmbs;
  }

  paint() {
    push();
    translate(this.pos.x, this.pos.y);

    const spacing = 360 / this.numVertices;

    fill(this.backCol);

    beginShape();

    // circle(0, 0, 50);
    let angleScale = this.r / 10;
    let distScale = this.r / 8;

    for (let i = 0; i < this.numVertices + 1; i++) {
      // fill(colours[i]);
      let thisRns = this.rndNmbs[i];
      const angle = i * spacing;
      let angler = angle + this.rndNmbs[i] * angleScale;
      const x = cos(radians(angler)) * this.r + this.rndNmbs[i] * distScale;
      const y = sin(radians(angler)) * this.r + this.rndNmbs[i] * distScale;

      if (i == 0) {
        vertex(x, y);
      } else {
        const cAngle = (i - 1) * spacing + spacing / 4 + this.rndNmbs[i - 1] * angleScale;
        const cX = cos(radians(cAngle)) * (this.r + this.rndNmbs[i - 1] * distScale) * 1.5;
        const cY = sin(radians(cAngle)) * (this.r + this.rndNmbs[i - 1] * distScale) * 1.5;

        const cAngle2 = i * spacing - spacing / 4 + this.rndNmbs[i] * angleScale;
        const cX2 = cos(radians(cAngle2)) * (this.r + this.rndNmbs[i] * distScale) * 1.5;
        const cY2 = sin(radians(cAngle2)) * (this.r + this.rndNmbs[i] * distScale) * 1.5;

        const angle2 = i * spacing + this.rndNmbs[i] * angleScale;
        const aX = cos(radians(angle2)) * this.r + this.rndNmbs[i] * distScale;
        const aY = sin(radians(angle2)) * this.r + this.rndNmbs[i] * distScale;
        // quadraticVertex(cX, cY, x, y);
        // if (i == 1) {
        // console.log(x, y, cX, cY, cX2, cY2);
        bezierVertex(cX, cY, cX2, cY2, aX, aY);
        // vertex(x, y);

        // }
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
      let angler = angle + this.rndNmbs[i] * angleScale;
      const x = cos(radians(angler)) * insideRadius + this.rndNmbs[i] * distScale;
      const y = sin(radians(angler)) * insideRadius + this.rndNmbs[i] * distScale;

      if (i == 0) {
        vertex(x, y);
      } else {
        const cAngle = (i - 1) * spacing + spacing / 4 + this.rndNmbs[i - 1] * angleScale;
        const cX = cos(radians(cAngle)) * (insideRadius + this.rndNmbs[i - 1] * distScale) * 1.5;
        const cY = sin(radians(cAngle)) * (insideRadius + this.rndNmbs[i - 1] * distScale) * 1.5;

        const cAngle2 = i * spacing - spacing / 4 + this.rndNmbs[i] * angleScale;
        const cX2 = cos(radians(cAngle2)) * (insideRadius + this.rndNmbs[i] * distScale) * 1.5;
        const cY2 = sin(radians(cAngle2)) * (insideRadius + this.rndNmbs[i] * distScale) * 1.5;

        const angle2 = i * spacing + this.rndNmbs[i] * angleScale;
        const aX = cos(radians(angle2)) * insideRadius + this.rndNmbs[i] * distScale;
        const aY = sin(radians(angle2)) * insideRadius + this.rndNmbs[i] * distScale;
        // quadraticVertex(cX, cY, x, y);
        // if (i == 1) {
        // console.log(x, y, cX, cY, cX2, cY2);
        bezierVertex(cX, cY, cX2, cY2, aX, aY);
        // push();
        // fill((i / this.numVertices) * 220);
        // circle(x, y, 20);
        // circle(cX, cY, 20);
        // circle(cX2, cY2, 20);
        // pop();
      }
    }
    endShape();
    pop();
  }
}
