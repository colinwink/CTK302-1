let numberOfTouches ;

function setup() {
  createCanvas(400, 400);
}

function draw() {

  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);

  switch(numberOfTouches) {
    case 0:
      background('yellow');
      text("ZERO TOUCHES! WHERE ARE YOU?", 5, 22) ;
      break ;

      case 1:
      background('blue');
       text("one touch, okay.", 5, 22) ;
      // put a picture here
      break ;

      case 2:
      background('red');
      text("two touches?? you're getting better!", 5, 22) ;
            // put a picture here
      break ;

      case 3:
      background('orange');
     text("WOW!! 3 TOUCHES!", 5, 22) ;
            // put a picture here
      break ;


  }

}
