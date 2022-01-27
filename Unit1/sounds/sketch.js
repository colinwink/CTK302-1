let sound;

function preload() {
  sound = loadSound("assets/newbeginning.mp3");
}

function setup() {
  createCanvas(500, 500);

  sound.loop();
}

function draw() {
}

function mouseReleased() {
  if (sound.isPlaying()) {
    sound.pause() ;
  } else {
    sound.loop() ;
  }
}



function touchStarted() {
  getAudioContext().resume();
}
