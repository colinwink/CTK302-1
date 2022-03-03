let state = 0;
let timer = 0;
let x = 0;
let ball;
let x2 = 0;
let starSize = 0;


function setup() {
  createCanvas(730, 560);

  ball = 150;
  x = width / 2;

}

function draw() {

  background(100);

  switch (state) {

    case 0:


      //cloak
      fill('purple');
      rect(200, 420, 200, 300)


      //arm
      rect(370, 420, 300, 50);


      //wand
      fill('brown')
      triangle(620, 420, 649, 250, 674, 420);

      //face
      fill(217, 145, 100);
      ellipse(300, 290, 300, 300);


      //eyes
      fill('white');
      ellipse(250, 255, 75, 75);
      ellipse(350, 255, 75, 75);

      fill('black');
      ellipse(250, 255, 30, 30);
      ellipse(350, 255, 30, 30);


      //mouth
      ellipse(300, 350, 100, 60)


      //hat
      fill('purple');
      triangle(150, 200, 300, 10, 450, 200);

      //hatstars
      fill('white');
      push();
      star(320, 100, 15, 30, 5);
      pop();

      push();
      star(240, 150, 15, 30, 5);
      pop();

      push();
      star(350, 175, 10, 25, 5);
      pop();


      fill('white');
      textSize(20);
      text("I WILL TAKE YOU OUT, SCUM!", 420, 130);



      textSize(16);
      text("TIMER", 20, 20);

      timer++;
      if (timer > 4*60) {
        timer = 0;
        state++;
      }




      break;

    case 1:


      //warewolf
      fill('brown');
      ellipse(450, 490, 500, 600);

      //face
      fill('brown');
      ellipse(450, 300, 300, 400);

      //eyes
      fill('white');
      ellipse(500, 255, 75, 75);
      ellipse(400, 255, 75, 75);

      fill('black');
      ellipse(500, 255, 30, 30);
      ellipse(400, 255, 30, 30);

      //madbrows
      fill('black');
      triangle(450, 220, 550, 185, 560, 210);
      triangle(450, 220, 370, 185, 360, 210);

      //nose
      ellipse(450, 320, 20, 10);

      //mouth
      arc(450, 400, 80, 80, 0, PI + QUARTER_PI, CHORD);


      //horns
      fill('white')
      triangle(380, 160, 400, 50, 420, 160);
      triangle(480, 160, 500, 50, 520, 160);


      fill('white');
      textSize(40);
      text("COME AT ME!", 75, 130);


      textSize(16);
      text("TIMER", 20, 20);

      timer++;
      if (timer > 4*60) {
        timer = 0;
        state++;
      }


      break;

    case 2:

      //cloak
      fill('purple');
      rect(200, 420, 200, 300)


      //arm
      rect(370, 420, 300, 50);


      //wand
      fill('brown')
      triangle(620, 420, 649, 250, 674, 420);

      //face
      fill(217, 145, 100);
      ellipse(300, 290, 300, 300);


      //eyes
      fill('white');
      ellipse(250, 255, 75, 75);
      ellipse(350, 255, 75, 75);

      fill('black');
      ellipse(250, 255, 30, 30);
      ellipse(350, 255, 30, 30);


      //mouth
      ellipse(300, 350, 100, 60)


      //hat
      fill('purple');
      triangle(150, 200, 300, 10, 450, 200);

      //hatstars
      fill('white');
      push();
      star(320, 100, 15, 30, 5);
      pop();

      push();
      star(240, 150, 15, 30, 5);
      pop();

      push();
      star(350, 175, 10, 25, 5);
      pop();



      fill('white');
      textSize(20);
      text("click fast to charge up!", 420, 130);
      break;



    case 3:

      //cloak
      fill('purple');
      rect(200, 420, 200, 300)


      //arm
      rect(370, 420, 300, 50);


      //wand
      fill('brown')
      triangle(620, 420, 649, 250, 674, 420);

      //face
      fill(217, 145, 100);
      ellipse(300, 290, 300, 300);


      //eyes
      fill('white');
      ellipse(250, 255, 75, 75);
      ellipse(350, 255, 75, 75);

      fill('black');
      ellipse(250, 255, 30, 30);
      ellipse(350, 255, 30, 30);


      //mouth
      ellipse(300, 350, 100, 60)


      //hat
      fill('purple');
      triangle(150, 200, 300, 10, 450, 200);

      //hatstars
      fill('white');
      push();
      star(320, 100, 15, 30, 5);
      pop();

      push();
      star(240, 150, 15, 30, 5);
      pop();

      push();
      star(350, 175, 10, 25, 5);
      pop();


      //chargeball
      fill('blue');
      ellipse(649, 250, 30, 30);



      fill('white');
      textSize(20);
      text("click fast to charge up!", 420, 130);
      break;



    case 4:

      //cloak
      fill('purple');
      rect(200, 420, 200, 300)


      //arm
      rect(370, 420, 300, 50);


      //wand
      fill('brown')
      triangle(620, 420, 649, 250, 674, 420);

      //face
      fill(217, 145, 100);
      ellipse(300, 290, 300, 300);


      //eyes
      fill('white');
      ellipse(250, 255, 75, 75);
      ellipse(350, 255, 75, 75);

      fill('black');
      ellipse(250, 255, 30, 30);
      ellipse(350, 255, 30, 30);


      //mouth
      ellipse(300, 350, 100, 60)


      //hat
      fill('purple');
      triangle(150, 200, 300, 10, 450, 200);

      //hatstars
      fill('white');
      push();
      star(320, 100, 15, 30, 5);
      pop();

      push();
      star(240, 150, 15, 30, 5);
      pop();

      push();
      star(350, 175, 10, 25, 5);
      pop();


      //chargeball
      fill('blue');
      ellipse(649, 250, 60, 60);


      fill('white');
      textSize(20);
      text("click fast to charge up!", 420, 130);
      break;



    case 5:

      //cloak
      fill('purple');
      rect(200, 420, 200, 300)


      //arm
      rect(370, 420, 300, 50);


      //wand
      fill('brown')
      triangle(620, 420, 649, 250, 674, 420);

      //face
      fill(217, 145, 100);
      ellipse(300, 290, 300, 300);


      //eyes
      fill('white');
      ellipse(250, 255, 75, 75);
      ellipse(350, 255, 75, 75);

      fill('black');
      ellipse(250, 255, 30, 30);
      ellipse(350, 255, 30, 30);


      //mouth
      ellipse(300, 350, 100, 60)


      //hat
      fill('purple');
      triangle(150, 200, 300, 10, 450, 200);

      //hatstars
      fill('white');
      push();
      star(320, 100, 15, 30, 5);
      pop();

      push();
      star(240, 150, 15, 30, 5);
      pop();

      push();
      star(350, 175, 10, 25, 5);
      pop();


      //chargeball
      fill('blue');
      ellipse(649, 250, 100, 100);


      fill('white');
      textSize(20);
      text("click fast to charge up!", 420, 130);
      break;

    case 6:

      //cloak
      fill('purple');
      rect(200, 420, 200, 300)


      //arm
      rect(370, 420, 300, 50);


      //wand
      fill('brown')
      triangle(620, 420, 649, 250, 674, 420);

      //face
      fill(217, 145, 100);
      ellipse(300, 290, 300, 300);


      //eyes
      fill('white');
      ellipse(250, 255, 75, 75);
      ellipse(350, 255, 75, 75);

      fill('black');
      ellipse(250, 255, 30, 30);
      ellipse(350, 255, 30, 30);


      //mouth
      ellipse(300, 350, 100, 60)


      //hat
      fill('purple');
      triangle(150, 200, 300, 10, 450, 200);

      //hatstars
      fill('white');
      push();
      star(320, 100, 15, 30, 5);
      pop();

      push();
      star(240, 150, 15, 30, 5);
      pop();

      push();
      star(350, 175, 10, 25, 5);
      pop();


      //chargeball
      fill('blue');
      ellipse(649, 250, 130, 130);


      fill('white');
      textSize(20);
      text("click fast to charge up!", 420, 130);
      break;

    case 7:

      //cloak
      fill('purple');
      rect(200, 420, 200, 300)


      //arm
      rect(370, 420, 300, 50);


      //wand
      fill('brown')
      triangle(620, 420, 649, 250, 674, 420);

      //face
      fill(217, 145, 100);
      ellipse(300, 290, 300, 300);


      //eyes
      fill('white');
      ellipse(250, 255, 75, 75);
      ellipse(350, 255, 75, 75);

      fill('black');
      ellipse(250, 255, 30, 30);
      ellipse(350, 255, 30, 30);


      //mouth
      ellipse(300, 350, 100, 60)


      //hat
      fill('purple');
      triangle(150, 200, 300, 10, 450, 200);

      //hatstars
      fill('white');
      push();
      star(320, 100, 15, 30, 5);
      pop();

      push();
      star(240, 150, 15, 30, 5);
      pop();

      push();
      star(350, 175, 10, 25, 5);
      pop();


      //chargeball
      fill('blue');
      ellipse(649, 250, 150, 150);


      fill('white');
      textSize(20);
      text("CLICK TO THROW MAGIC!", 420, 130);
      break;


    case 8:

      //cloak
      fill('purple');
      rect(200, 420, 200, 300)


      //arm
      rect(370, 420, 300, 50);


      //wand
      fill('brown')
      triangle(620, 420, 649, 250, 674, 420);

      //face
      fill(217, 145, 100);
      ellipse(300, 290, 300, 300);


      //eyes
      fill('white');
      ellipse(250, 255, 75, 75);
      ellipse(350, 255, 75, 75);

      fill('black');
      ellipse(250, 255, 30, 30);
      ellipse(350, 255, 30, 30);


      //mouth
      ellipse(300, 350, 100, 60)


      //hat
      fill('purple');
      triangle(150, 200, 300, 10, 450, 200);

      //hatstars
      fill('white');
      push();
      star(320, 100, 15, 30, 5);
      pop();

      push();
      star(240, 150, 15, 30, 5);
      pop();

      push();
      star(350, 175, 10, 25, 5);
      pop();



            fill('white');
            textSize(20);
            text("CLICK TO THROW MAGIC!", 420, 130);


      //chargeball
      fill('blue');
      ellipse(649, 250, ball, ball);

      ball = ball + 30;

      fill('white');
      textSize(16);
      text("TIMER", 20, 20);

      timer++;
      if (timer > 1.6*60) {
        timer = 0;
        state++;
      }

      break;




    case 9:

      background(100);

      fill('blue');
      ellipse(x, 250, 150, 150);

      x = x + 3;

      fill('white');
      textSize(16);
      text("TIMER", 20, 20);


      timer++;
      if (timer > 2*60) {
        timer = 0;
        state++;
      }

      break;

    case 10:

      x = 0;
      //warewolf
      fill('brown');
      ellipse(450, 490, 500, 600);

      //face
      fill('brown');
      ellipse(450, 300, 300, 400);

      //eyes
      fill('white');
      ellipse(500, 255, 75, 75);
      ellipse(400, 255, 75, 75);

      fill('black');
      ellipse(490, 255, 30, 30);
      ellipse(390, 255, 30, 30);

      //madbrows
      fill('black');
      triangle(450, 190, 550, 185, 560, 210);
      triangle(450, 190, 370, 185, 360, 210);

      //nose
      ellipse(450, 320, 20, 10);

      //mouth
      arc(450, 400, 80, 80, 0, PI + QUARTER_PI, CHORD);


      //horns
      fill('white')
      triangle(380, 160, 400, 50, 420, 160);
      triangle(480, 160, 500, 50, 520, 160);

      fill('blue');
      ellipse(x2, 250, 120, 120);
      x2 = x2 + 10;


      fill('white');
      textSize(16);
      text("TIMER", 20, 20);


      timer++;
      if (timer > .80*60) {
        timer = 0;
        state++;
      }

      break;

    case 11:

      //warewolf
      fill('brown');
      ellipse(450, 490, 500, 600);

      //face
      fill('brown');
      ellipse(450, 300, 300, 400);

      //eyes
      fill('white');
      ellipse(500, 255, 75, 75);
      ellipse(400, 255, 75, 75);

      fill('black');
      ellipse(490, 255, 30, 30);
      ellipse(390, 255, 30, 30);

      //madbrows
      fill('black');
      triangle(450, 190, 550, 185, 560, 210);
      triangle(450, 190, 370, 185, 360, 210);

      //nose
      ellipse(450, 320, 20, 10);

      //mouth
      arc(450, 400, 80, 80, 0, PI + QUARTER_PI, CHORD);


      //horns
      fill('white')
      triangle(380, 160, 400, 50, 420, 160);
      triangle(480, 160, 500, 50, 520, 160);

      //explosion
      fill('orange');
      push();
      translate(width * 0.5, height * 0.5);
      rotate(frameCount / 50.0);
      star(0, 0, starSize, starSize, 40);
      pop();

      starSize = starSize + 10;

      fill('white');
      textSize(16);
      text("TIMER", 20, 20);


      timer++;
      if (timer > .80*60) {
        timer = 0;
        state++;
      }

      break;

      case 12:

        background('orange');


        fill('white');
        textSize(80);
        text("WIN!", 300, 250);

        break;

  }
}

function mouseReleased() {
  state = state + 1;
  if (state > 12) state = 0;

}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
