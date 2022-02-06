function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {

  if (mouseIsPressed) {
    background('blue');

    fill(255, 0, 0);
    ellipse(width / 2, height / 2, 310, 200);

    fill(97);
    rect(width / 2, height / 2 - 50, 20, 250);

    fill(230, 0, 100);
    circle(width / 2, height / 2 - 175, 60, 20);

    fill(97);
    rect(width / 2, height / 2 + 50, 130, 200);

    fill(97);
    rect(width / 2, height / 2 + 250, 320, 200);

    fill(255, 0, 0);
    circle(width / 2 + 50, height / 2 + 175, 30, 20);
    circle(width / 2 + 90, height / 2 + 175, 30, 20);
    circle(width / 2 + 130, height / 2 + 175, 30, 20);


    fill(97);
    rect(width / 2, height / 2, 250, 200);


//mouth
    fill(0);
    rect(width / 2, height / 2 + 90, 100, 110);

    fill(240);
      circle(width / 2 - 50, height / 2 - 20, 60, 40);
      circle(width / 2 + 50, height / 2 - 20, 60, 40);
//eyes
    fill(255, 0, 0);
    circle(width / 2 + 50, height / 2 - 20, 50, 20);
    circle(width / 2 - 50, height / 2 - 20, 50, 20);

    fill(230, 0, 100);
    triangle(0, 150, 200, 20, 0, 350);

    fill(255);
    text("Until he shoots his death laser", width / 2 + 15, height / 2 - 130);

  } else {



    background("orange");

    fill(0, 0, 255);
    ellipse(width / 2, height / 2, 310, 200);

    fill(150);
    rect(width / 2, height / 2 - 50, 20, 250);

    fill(0, 0, 255);
    circle(width / 2, height / 2 - 175, 30, 20);

    fill(150);
    rect(width / 2, height / 2 + 50, 130, 200);

    fill(150);
    rect(width / 2, height / 2 + 250, 320, 200);

    fill(0, 0, 255);
    circle(width / 2 + 50, height / 2 + 175, 30, 20);
    circle(width / 2 + 90, height / 2 + 175, 30, 20);
    circle(width / 2 + 130, height / 2 + 175, 30, 20);


    fill(150);
    rect(width / 2, height / 2, 250, 200);



    fill(0);
    rect(width / 2, height / 2 + 58, 100, 15);

    fill(240);
      circle(width / 2 - 50, height / 2 - 20, 60, 40);
      circle(width / 2 + 50, height / 2 - 20, 60, 40);

    fill(0, 0, 255);
    circle(width / 2 + 50, height / 2 - 20, 30, 20);
    circle(width / 2 - 50, height / 2 - 20, 30, 20);

    fill(255);
    text("This is Roboto, he is a neutral robot.", width / 2 - 200, height / 2 - 150);
  }









}
