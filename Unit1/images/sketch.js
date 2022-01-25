let drums;
let pasta;
let nature;

function setup() {
  createCanvas(500, 500);

  drums = loadImage("assets/drums.png");
  nature = loadImage("assets/nature.png");
  pasta = loadImage("assets/pasta.png");

}

function draw() {

  image(drums, width / 2, 100, 100, 100) ;
  image(nature, width / 2, 200, 100, 100) ;
  image(pasta, width / 2, 300, 100, 100) ;
}
