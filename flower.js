const colours = ["#d95a8d", "#f6f398", "#AED6D5", "#7eca72", "#efa85e"];

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

    for (let i = 0; i < this.numVertices + 1; i++) {
      let thisRns = this.rndNmbs[i];
      const angle = i * spacing;
      let angler = angle + thisRns * 10;
      const x = cos(radians(angler)) * this.r;
      const y = sin(radians(angler)) * this.r;

      if (i == 0) {
        vertex(x, y);
      } else {
        const cAngle = angler - spacing / 2;
        const cX = cos(radians(cAngle)) * (this.r * (1.5 + thisRns));
        const cY = sin(radians(cAngle)) * (this.r * (1.5 + thisRns));
        quadraticVertex(cX, cY, x, y);
      }
    }
    endShape();

    fill(this.insideCol);

    beginShape();

    for (let i = 0; i < this.numVertices + 1; i++) {
      let thisRns = this.rndNmbs[i];
      const angle = i * spacing;
      let angler = angle + thisRns * 10;
      const x = cos(radians(angler)) * (this.r * 0.6);
      const y = sin(radians(angler)) * (this.r * 0.6);

      if (i == 0) {
        vertex(x, y);
      } else {
        const cAngle = angler - spacing / 2;
        const cX = cos(radians(cAngle)) * (this.r * 0.8 * (1.5 + thisRns));
        const cY = sin(radians(cAngle)) * (this.r * 0.8 * (1.5 + thisRns));
        quadraticVertex(cX, cY, x, y);
      }
    }
    endShape();
    pop();
  }
}
