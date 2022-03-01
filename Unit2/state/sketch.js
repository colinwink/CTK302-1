let state = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {

  background(100);

  switch (state) {

    case 0:
      background('blue');
      text("0", 100, 100);

      fill('white');
      for (let j = 0; j < 100; j++) {
        for (let i = 0; i < 100; i++) {
          rect(i * 20, j * 20, 10, 10);
        }
      }
      break;

    case 1:
      background('red');
      text("1", 100, 100);

      fill('white');
      for (let j = 0; j < 100; j = j + 2) {
        for (let i = 0; i < 100; i++) {
          ellipse(i * 20, j * 20, 10, 10);
        }
      }

       break;

    case 2:
      background(100);
      text("2", 100, 100);

      fill(200, 148, 239);
      for (let j = 0; j < 100; j=j+3) {
        for (let i = 0; i < 100; i=i+4) {
          rect(j * 20, i * 20, 100, 100);
        }
     }
      break;

    case 3:
      text("3", 100, 100);

      fill('green');
      for (let j = 0; j < 370; j++) {
        ellipse(j, 100, 30, 100);
      }
      break;

    case 4:
      text("4", 100, 100);

      fill('orange')
      for (let j = 0; j < 175; j++) {
        rect(j, j, j, j);
      }

      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 4) state = 0;

}
