let P;
let R;


function setup() {
  createCanvas(500, 500);

  P = loadFont("assets/pop.ttf");
  R = loadFont("assets/rubik.ttf");
}

function draw() {

background(100) ;
  textFont(P) ;
  textSize(48);
  text("This is POP font", 25, 100);

  textFont(R) ;
  textSize(48);
  text("This is RUBIK font", 25, 300);
}
