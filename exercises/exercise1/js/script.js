// Exercise 1 - Moving pictures
// Pippin Barr
//
// Starter code for exercise 1.
// It moves two pictures around on the canvas.
// One moves linearly down the screen.
// One moves toward the mouse cursor.


// The image of a clown face
var clownImage;
// The current position of the clown face
var clownImageX;
var clownImageY;

// The transparent image of "felt" that wipes down the canvas
var feltTextureImage;
// The current position of the transparent image of "felt"
var feltTextureImageX;
var feltTextureImageY;

//adding image of pixelated rainbow
var rainbowPixelImage;
//current position of rainbow images
var rainbowPixelImageX;
var rainbowPixelImageY;

//image of nyan cat
var nyanCatImage;

//position of nyancat
var nyanCatImageX;
var nyanCatImageY;

//image of pixel rainbow
var pixelArtRainbow;
//position of pixel rainbow
var pixelArtRainbowX;
var pixelArtRainbowY;

// preload()
//
// Load the two images we're using before the program starts

function preload() {
  clownImage = loadImage("assets/images/clown.png");
  feltTextureImage = loadImage("assets/images/black-felt-texture.png");
  rainbowPixelImage = loadImage("assets/images/rainbow.png");
  nyanCatImage = loadImage("assets/images/nyan-cat.png");
  pixelArtRainbow = loadImage("assets/images/pixelrainbow.png");
}


// setup()
//
// Set up the canvas, position the images, set the image mode.

function setup() {
  // Create our canvas
  createCanvas(700,700);

  // Start the clown image at the centre of the canvas
  clownImageX = width/2;
  clownImageY = height/2;

  // Start the felt image perfectly off screen above the canvas
  feltTextureImageX = width/2;
  feltTextureImageY = 0 - feltTextureImage.height/2;

  // Start rainbow image to the side of the canvas offscreen
  rainbowPixelImageY = height/2;
  rainbowPixelImageX = 0 - rainbowPixelImage.width/2;

  //start nyan cat image at center of canvas
  nyanCatImageX = width/2;
  nyanCatImageY = height/2;

  //start rainbow pixel on left of canvas
  pixelArtRainbowX = width/4;
  pixelArtRainbowY = height/4;

  // We'll use imageMode CENTER for this script
  imageMode(CENTER);
}


// draw()
//
// Moves the felt image linearly
// Moves the clown face toward the current mouse location

function draw() {

  // Move the felt image down by increasing its y position
  feltTextureImageY += 1;

  // move rainbow image by increasing x position
  rainbowPixelImageX += 1;

  // Display the felt image
  image(feltTextureImage,feltTextureImageX,feltTextureImageY);

  // Display rainbow image
  image(rainbowPixelImage,rainbowPixelImageX,rainbowPixelImageY);

  // Move the clown by moving it 1/10th of its current distance from the mouse

  // Calculate the distance in X and in Y
  var xDistance = mouseX - clownImageX;
  var yDistance = mouseY - clownImageY;
  // Add 1/10th of the x and y distance to the clown's current (x,y) location
  clownImageX = clownImageX + xDistance/10;
  clownImageY = clownImageY + yDistance/10;

  //Calculate distance in X and in Y
  var xDistance = mouseX - pixelArtRainbowX;
  var yDistance = mouseY - pixelArtRainbowY;

  //add 1/100th to x and y distance to rainbow current location
  pixelArtRainbowX = pixelArtRainbowX + xDistance/100;
  pixelArtRainbowY = pixelArtRainbowY + yDistance/100;


//Position of nyancat
  nyanCatImageX = mouseX
  nyanCatImageY = mouseY

  // Display the clown image
  image(clownImage,clownImageX,clownImageY);

  //Display nyan cat image
  image(nyanCatImage,nyanCatImageX,nyanCatImageY)

  //display image of rainbow
  image(pixelArtRainbow,pixelArtRainbowX,pixelArtRainbowY)
}
