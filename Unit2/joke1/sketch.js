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

}


function mouseReleased() {
  myState = (myState + 1) % 2;
}
