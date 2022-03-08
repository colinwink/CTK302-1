let x = 0;


function setup() {
  createCanvas(500, 500);
}

function draw() {

  background(255);

push();
translate(x, 0) ;
avatar();
x += 5;

if (x > width) x = -200;

pop();
}

function avatar() {


  fill('yellow')
  ellipse(250, 250, 200, 200);


  fill('white');
  ellipse(200, 240, 50, 50);
  ellipse(300, 240, 50, 50);



  fill('black');
  ellipse(200, 240, 10, 10);
  ellipse(300, 240, 10, 10);

  arc(250, 290, 80, 80, 0, PI + QUARTER_PI, CHORD);

}
