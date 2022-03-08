
let x = 0;
let font1;

function setup() {
  createCanvas(500, 500);
}

function draw() {

  background(255);

textFont('Georgia');
textSize(30);
text("HI", 250, x);

x += 10;
if (x > width) x = 0;

}
