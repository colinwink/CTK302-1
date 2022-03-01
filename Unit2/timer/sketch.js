let state = 0;
let timer = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {

  background(100);

  switch (state) {

    case 0:
      background(255, 0, 0);
      ellipse(100, 100, 100, 100);
      timer++;
      if (timer > 70) {
        timer = 0;
        state++;
      }
      break;

    case 1:
    background(0, 255, 0);
    ellipse(200, 200, 100, 100);
      timer++;
      if (timer > 30) {
        timer = 0;
        state++;
      }
      break;

    case 2:
    background(0, 0, 255);
    ellipse(300, 300, 100, 100);
      timer++;
      if (timer > 60) {
        timer = 0;
        state = 0;
      }
      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 2) state = 0;

}
