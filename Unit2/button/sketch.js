let myState = 0;


function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
}

function draw() {

  switch (myState) {
    case 0:
    background('grey');
    fill('black');
    textSize(25);
    text("what's under a stormcloud's raincoat?", width/2, height/2);
    break;

    case 1:
    background('yellow');
    fill('black');
    textSize(48);
    text("thunderwear.", width/2, height/2);
    break;

  }

  fill('purple');
  rect(100, 100, 100, 100);

}


function mouseReleased() {

  if ((mouseX > 100) && (mouseX < 200) && (mouseY > 100) && (mouseY < 200)) {
    myState = (myState + 1) % 2;
  }

}
