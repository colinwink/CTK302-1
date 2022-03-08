let timer = 0;
let state = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {

  switch (state) {

    case 0:
      background(255, 0, 0);
      text("What do you call a boomerang that doesn't come back?", 100, 250);
      timer++;
      if (timer > 3*60) {
        timer = 0;
        state++;
      }
      break;

    case 1:
    background(200, 0, 0);
      text("A stick.", 250, 250);
      timer++;
      if (timer > 3*60) {
        timer = 0;
        state++;
      }
      break;

    case 2:
    background(150, 0, 0);
    text("Ba Dum PSHHHH!", 250, 250);
      timer++;
      if (timer > 3*60) {
        timer = 0;
        state = 0;
      }
      break;
 }
}
