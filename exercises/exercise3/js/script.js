/******************************************************************************
Where's Sausage Dog?
by Percy Dragon

An algorithmic version of a Where's Wally searching game where you
need to click on the sausage dog you're searching for in amongst all
the visual noise of other animals.

Animal images from:
https://creativenerds.co.uk/freebies/80-free-wildlife-icons-the-best-ever-animal-icon-set/
******************************************************************************/

// Position and image of the sausage dog we're searching for
var targetX;
var targetY;
var targetImage;
//adding in image to be displayed
var targetImageDisplay;
var targetImageDisplayX;
var targetImageDisplayY;


// The ten decoy images
var decoyImage1;
var decoyImage2;
var decoyImage3;
var decoyImage4;
var decoyImage5;
var decoyImage6;
var decoyImage7;
var decoyImage8;
var decoyImage9;
var decoyImage10;

//randomizing sizesW
var decoyImage1Size;
var decoyImage2Size;
var decoyImage3Size;
var decoyImage4Size;
var decoyImage5Size;
var decoyImage6Size;
var decoyImage7Size;
var decoyImage8Size;
var decoyImage9Size;
var decoyImage10Size;

//randomizing sizesH
var decoyImage1SizeH;
var decoyImage2SizeH;
var decoyImage3SizeH;
var decoyImage4SizeH;
var decoyImage5SizeH;
var decoyImage6SizeH;
var decoyImage7SizeH;
var decoyImage8SizeH;
var decoyImage9SizeH;
var decoyImage10SizeH;


// The number of decoys to show on the screen, randomly
// chosen from the decoy images
var numDecoys = 100;

// Keep track of whether they've won
var gameOver = false;
//adding in confetti
var confettiCanon;
var confettiCanonX;
var confettiCanonY;

//adding awesome win music
var winningSound;
// preload()
//
// Loads the target and decoy images before the program starts
function preload() {
  targetImage = loadImage("assets/images/animals-target.png");
  targetImageDisplay = loadImage("assets/images/animals-target-copy.png");
  confettiCanon = loadImage("assets/images/confetti.png")

  decoyImage1 = loadImage("assets/images/animals-01.png");
  decoyImage2 = loadImage("assets/images/animals-02.png");
  decoyImage3 = loadImage("assets/images/animals-03.png");
  decoyImage4 = loadImage("assets/images/animals-04.png");
  decoyImage5 = loadImage("assets/images/animals-05.png");
  decoyImage6 = loadImage("assets/images/animals-06.png");
  decoyImage7 = loadImage("assets/images/animals-07.png");
  decoyImage8 = loadImage("assets/images/animals-08.png");
  decoyImage9 = loadImage("assets/images/animals-09.png");
  decoyImage10 = loadImage("assets/images/animals-10.png");

  //loading in SoundFile
  winningSound = new Audio("assets/sounds/music.mp3");
}

// setup()
//
// Creates the canvas, sets basic modes, draws correct number
// of decoys in random positions, then the target
function setup() {
  createCanvas(windowWidth,windowHeight);
  background("#ffff00");
  imageMode(CENTER);
  decoyImage1Size = random(1,800);
  decoyImage2Size = random(1,800);
  decoyImage3Size = random(1,800);
  decoyImage4Size = random(1,800);
  decoyImage5Size = random(1,800);
  decoyImage6Size = random(1,800);
  decoyImage7Size = random(1,800);
  decoyImage8Size = random(1,800);
  decoyImage9Size = random(1,800);
  decoyImage10Size = random(1,800);

  decoyImage1SizeH = random(1,800);
  decoyImage2SizeH = random(1,800);
  decoyImage3SizeH = random(1,800);
  decoyImage4SizeH = random(1,800);
  decoyImage5SizeH = random(1,800);
  decoyImage6SizeH = random(1,800);
  decoyImage7SizeH = random(1,800);
  decoyImage8SizeH = random(1,800);
  decoyImage9SizeH = random(1,800);
  decoyImage10SizeH = random(1,800);

  // Use a for loop to draw as many decoys as we need
  for (var i = 0; i < numDecoys; i++) {
    // Choose a random location for this decoy
    var x = random(0,width);
    var y = random(0,height);
    // Generate a random number we can use for probability
    var r = random();
    // Use the random number to display one of the ten decoy
    // images, each with a 10% chance of being shown
    // We'll talk more about this nice quality of random soon enough
    if (r < 0.1) {
      image(decoyImage1,x,y,decoyImage1Size,decoyImage1SizeH);
    }
    else if (r < 0.2) {
      image(decoyImage2,x,y,decoyImage2Size,decoyImage2SizeH);
    }
    else if (r < 0.3) {
      image(decoyImage3,x,y,decoyImage3Size,decoyImage3SizeH);
    }
    else if (r < 0.4) {
      image(decoyImage4,x,y,decoyImage4Size,decoyImage4SizeH);
    }
    else if (r < 0.5) {
      image(decoyImage5,x,y,decoyImage5Size,decoyImage5SizeH);
    }
    else if (r < 0.6) {
      image(decoyImage6,x,y,decoyImage6Size,decoyImage6SizeH);
    }
    else if (r < 0.7) {
      image(decoyImage7,x,y,decoyImage7Size,decoyImage7SizeH);
    }
    else if (r < 0.8) {
      image(decoyImage8,x,y,decoyImage8Size,decoyImage8SizeH);
    }
    else if (r < 0.9) {
      image(decoyImage9,x,y,decoyImage9Size,decoyImage9SizeH);
    }
    else if (r < 1.0) {
      image(decoyImage10,x,y,decoyImage10Size,decoyImage10SizeH);
    }
  }

  // Once we've displayed all decoys, we choose a location for the target
  targetX = random(0,width);
  targetY = random(0,height);
  //randomizing size of target image
  var targetXSize = random(1,800);
  var targetYSize = random(1,800);
  image(targetImage,targetX,targetY,targetXSize,targetYSize);
  // And draw it (this means it will always be on top)
  //added square that allows u to show image of doggo to find
  rectanglePosition();

  //adding confettiCanon
  confettiCanonX = width/2;
  confettiCanonY = height/2;

}

function draw() {
  if (gameOver) {
    var xDistance = mouseX - confettiCanonX;
    var yDistance = mouseY - confettiCanonY;
    var dogXDistance = mouseX - targetImageDisplayX;
    var dogYDistance = mouseY - targetImageDisplayY;
    //i wanted the doggo to follow the mouse, but what happened was an unforseen accident. and it is amazing.
    targetImageDisplayX = targetX;
    targetImageDisplayY = targetY;
    // Prepare our typography
    textFont("Helvetica");
    textSize(128);
    textAlign(CENTER,CENTER);
    noStroke();
    fill(random(255),random(255),random(255));
    // Tell them they won!
    text("YOU WINNED!",width/2,height/2);
    noFill();
    stroke(random(255),random(255),random(255));
    strokeWeight(10);
    ellipse(targetX,targetY,targetImage.width,targetImage.height);
    //sausage doggo was supposed to follow mouse. But something BETTER happened.
    targetImageDisplayX = targetImageDisplayX + dogXDistance/30;
    targetImageDisplayY = targetImageDisplayY + dogYDistance/30;
    image(targetImageDisplay,targetImageDisplayX,targetImageDisplayY);
    //CONFETTI CANNON WOOOOOOOOOO
    confettiCanonX = confettiCanonX + xDistance/100;
    confettiCanonY = confettiCanonY + yDistance/100;
    image(confettiCanon,confettiCanonX,confettiCanonY);
  }
  //have function = variable
  var interfaceElement = rectanglePosition();
  //have sausage doggo successfully never appear behind interface element
  while(targetX < interfaceElement && targetY < interfaceElement){
    targetX = random(0,width);
    targetY = random(0,height);
    image(targetImage,targetX,targetY,targetXSize,targetYSize);
  }

  }

// mousePressed()
//
// Checks if the player clicked on the target and if so tells them they won
function mousePressed() {
  // Check if the mouse is in the x range of the target
  if (mouseX > targetX - targetImage.width/2 && mouseX < targetX + targetImage.width/2) {
    // Check if the mouse is also in the y range of the target
    if (mouseY > targetY - targetImage.height/2 && mouseY < targetY + targetImage.height/2) {
      //add in victory music
      winningSound.play();
      gameOver = true;
    }
  }
}

function rectanglePosition() {
  // And draw it (this means it will always be on top)
  //added square that allows u to show image of doggo to find
  targetImageDisplayX = width/8.2;
  targetImageDisplayY = height/8.2;
  strokeJoin(ROUND);
  strokeWeight(4);
  stroke("#000");
  fill("#979f50");
  rect(1,1,400,200);
  imageMode(CENTER);
  image(targetImageDisplay,targetImageDisplayX,targetImageDisplayY);
  //added text that says what you need to find
  textAlign(CENTER);
  fill("#ff9000");
  textSize(25);
  text('HAVE YOU SEEN THIS DOG?',width/7.9,height/19);

}
