const colours = ["#d95a8d", "#f6f398", "#AED6D5", "#7eca72", "#efa85e"];

class Flower {
  constructor(x, y, r, i) {
    this.pos = createVector(x, y); // Position of the flower
    this.r = r; // Radius of the flower
    this.id = i;

    // Determine the number of vertices for the flower randomly (either 5 or 6)
    this.numVertices = random() < 0.5 ? 5 : 6;

    // Set the inside color of the flower randomly
    this.insideCol = random(colours);

    // Set the background color of the flower to black by default
    this.backCol = "black";

    // If the inside color is either lightBlue or Orange and a random number is less than 0.3,
    // then set the background color to Pink
    if ((this.insideCol === "#51a09d" || this.insideCol === "#efa85e") && random() < 0.3) {
      this.backCol = "#d95a8d";
    }

    // Generate an array of random numbers for the flower
    this.rndNmbs = this.getRndNmbs();
  }

  getRndNmbs() {
    let rndNmbs = [];
    for (let i = 0; i < this.numVertices; i++) {
      rndNmbs.push(random());
    }
    rndNmbs.push(rndNmbs[0]); // Make sure the flower closes at the same point that it starts
    return rndNmbs;
  }

  paint() {
    push();
    translate(this.pos.x, this.pos.y); // Move the origin of the coordinate system to the flower's position

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

    const insideRadius = this.r - this.r / 5;

    for (let i = 0; i < this.numVertices + 1; i++) {
      let thisRns = this.rndNmbs[i];
      const angle = i * spacing;
      let angler = angle + thisRns * 10;
      const x = cos(radians(angler)) * insideRadius;
      const y = sin(radians(angler)) * insideRadius;

      if (i == 0) {
        vertex(x, y);
      } else {
        const cAngle = angler - spacing / 2;
        const cX = cos(radians(cAngle)) * (insideRadius * (1.5 + thisRns));
        const cY = sin(radians(cAngle)) * (insideRadius * (1.5 + thisRns));
        quadraticVertex(cX, cY, x, y);
        // circle(cX, cY, 20);
      }
    }
    endShape();
    pop();
  }
}
