/******************************************************

Game - Chaser
Percy Dragon

A simple game of cat and mouse.

Physics-based movement, keyboard controls, health/stamina,
sprinting, random movement, screen wrap.

******************************************************/

// Track whether the game is over
var gameOver = false;

//adding ana voiceline
var anaNano;

//loading in background image
var eichenwaldCastle;

//loading in sound
var healingMercy;
var mercyVoiceLine1;
var mercyVoiceLine2;
var mercyVoiceLine3;
var mercyVoiceLine4;
var mercyVoiceLine5;
var mercyGameOver;

var iNeedHealing;

// Player position, size, velocity
var playerX;
var playerY;
var playerRadius = 30;
var playerVX = 0;
var playerVY = 0;
var playerMaxSpeed = 2;
var playerImage;
// Player health
var playerHealth;
var playerMaxHealth = 255;
// Player fill color
var playerFill = 50;

// Prey position, size, velocity
var preyX;
var preyY;
var preyRadius = 30;
var preyVX;
var preyVY;
var preyMaxSpeed = 4;
// Prey health
var preyHealth;
var preyMaxHealth = 100;
// Prey fill color
var preyFill = 200;

// Amount of health obtained per frame of "eating" the prey
var eatHealth = 10;
// Number of prey eaten during the game
var preyEaten = 0;

//adding in prey image
var preyImage;

//creating perlin noise variables
var tX;
var tY;

//loading in ana who nanoboosts you
var anaSniper;

//adding font
var overwatchFont;

// setup()
//
// Sets up the basic elements of the game
//im making the prey and player images so im loading them in here
function preload() {
  playerImage = loadImage("assets/images/mercy_presskit.png");
  preyImage = loadImage("assets/images/Genji_Concept.png");
  eichenwaldCastle = loadImage("assets/images/Castle_05.png");

  //loading audio
  healingMercy = new Audio("assets/sounds/healing_SFX.mp3");
  mercyVoiceLine1 = new Audio("assets/sounds/Did_someone_call_a_doctor.mp3");
  mercyVoiceLine2 = new Audio("assets/sounds/takingcare.mp3");
  mercyVoiceLine3 = new Audio("assets/sounds/german_mercy.mp3");
  mercyVoiceLine4 = new Audio("assets/sounds/Right_beside_you.mp3");
  mercyVoiceLine5 = new Audio("assets/sounds/Patching_you_up.mp3");

  //ana image
  anaSniper = loadImage("assets/images/ana.png");

  //genji i need healing
  iNeedHealing = new Audio("assets/sounds/need_healing.mp3");

  mercyGameOver = new Audio("assets/sounds/why_bother.mp3");

  anaNano = new Audio("assets/sounds/nano.wav");

  //font
  overwatchFont = loadFont("assets/fonts/bignoodletoo.ttf");

}
function setup() {
  createCanvas(700,700);

  noStroke();

  setupPrey();
  setupPlayer();
}

// setupPrey()
//
// Initialises prey's position, velocity, and health
function setupPrey() {
  preyX = width/5;
  preyY = height/2;
  preyVX = -preyMaxSpeed;
  preyVY = preyMaxSpeed;
  preyHealth = preyMaxHealth;
  tX = random(2000);
  tY = random(2000);

}

// setupPlayer()
//
// Initialises player position and health
function setupPlayer() {
  playerX = 4*width/5;
  playerY = height/2;
  playerHealth = playerMaxHealth;
}

// draw()
//
// While the game is active, checks input
// updates positions of prey and player,
// checks health (dying), checks eating (overlaps)
// displays the two agents.
// When the game is over, shows the game over screen.
function draw() {
  background(eichenwaldCastle);

  if (!gameOver) {

    handleInput();

    movePlayer();
    movePrey();

    updateHealth();
    checkEating();

    drawPrey();
    drawPlayer();
  }
  else {
    showGameOver();
  }
}

// handleInput()
//
// Checks arrow keys and adjusts player velocity accordingly
function handleInput() {
  //adding in extra speed for nanoboost
  if (preyEaten > 10) {
    playerMaxSpeed = 4;
  }
  // Check for horizontal movement
  if (keyIsDown(LEFT_ARROW)) {
    playerVX = -playerMaxSpeed;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    playerVX = playerMaxSpeed;
  }
  else {
    playerVX = 0;
  }

  // Check for vertical movement
  if (keyIsDown(UP_ARROW)) {
    playerVY = -playerMaxSpeed;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    playerVY = playerMaxSpeed;
  }
  else {
    playerVY = 0;
  }

  //check for shift keys and adds sprint
  if (keyIsDown(SHIFT)) {
    if (keyIsDown(UP_ARROW)) {
      playerVY = -playerMaxSpeed - 10;
    }
    else if (keyIsDown(DOWN_ARROW)) {
      playerVY = playerMaxSpeed + 10;
    }
    else if (keyIsDown(RIGHT_ARROW)) {
      playerVX = playerMaxSpeed + 10;
    }
    else if (keyIsDown(LEFT_ARROW)) {
      playerVX = -playerMaxSpeed - 10;
    }
    else {
      playerVY = 0;
      playerVX = 0;
    }
  }
}

// movePlayer()
//
// Updates player position based on velocity,
// wraps around the edges.
function movePlayer() {
  // Update position
  playerX += playerVX;
  playerY += playerVY;

  // Wrap when player goes off the canvas
  if (playerX < 0) {
    playerX += width;
  }
  else if (playerX > width) {
    playerX -= width;
  }

  if (playerY < 0) {
    playerY += height;
  }
  else if (playerY > height) {
    playerY -= height;
  }
}

// updateHealth()
//
// Reduce the player's health (every frame)
// Check if the player is dead
function updateHealth() {
  // Reduce player health, constrain to reasonable range
  playerHealth = constrain(playerHealth - 0.5,0,playerMaxHealth);
  // Check if the player is dead
  if (playerHealth === 0) {
    // If so, the game is over
    gameOver = true;
  }
}

// checkEating()
//
// Check if the player overlaps the prey and updates health of both
function checkEating() {
  // Get distance of player to prey
  var d = dist(playerX,playerY,preyX,preyY);
  // Check if it's an overlap
  if (d < playerRadius + preyRadius) {
    // Increase the player health
    playerHealth = constrain(playerHealth + eatHealth,0,playerMaxHealth);
    // Reduce the prey health
    preyHealth = constrain(preyHealth - eatHealth,0,preyMaxHealth);

    healingMercy.play();
    iNeedHealing.pause();
    randomVoiceLines();
  }

    else {
      iNeedHealing.play();
      healingMercy.pause();

    }

    //check to see if player is sprinting
  if (keyIsDown(SHIFT)) {
      //make them loose health faster
    playerHealth = constrain(playerHealth - (eatHealth*1.5),0,playerMaxHealth);
  }

    // Check if the prey died
  if (preyHealth === 0) {
    // Move the "new" prey to a random position
    //the code was broken, so i'm attempting to fix it by changing the random to noise instead
    //ive noticed genji sort of decided to always stay withen the same locations
    //so un switching things up
    preyX = 800 * noise(tX);
    preyY = 800 * noise(tY);
    // Give it full health
    preyHealth = preyMaxHealth;
    // Track how many prey were eaten
    preyEaten++;
  }
}

// movePrey()
//
// so it looks like this needs to be altered with the noise function
// Moves the prey based on random velocity changes
function movePrey() {


  //creating the perlin noise function to move the prey
  preyX = 800 * noise(tX);
  preyY = 800 * noise(tY);

  tY += 0.05
  tX += 0.05
  if (preyEaten > 10) {
    tY += 0.001
    tX += 0.001
    playerRadius = 20;
    preyRadius = 25;
    image(anaSniper,25,25,100,100);
  }

//trying to add in ana nanoboost VL
//but when I try to get it to not loop, it doesn't work?????
  if (preyEaten > 10) {
    console.log("meme")
    anaNano.play();
  }

  // Update prey position based on velocity
  preyX += preyVX;
  preyY += preyVY;

  // Screen wrapping
  if (preyX < 0) {
    preyX += width;
  }
  else if (preyX > width) {
    preyX -= width;
  }

  if (preyY < 0) {
    preyY += height;
  }
  else if (preyY > height) {
    preyY -= height;
  }
}

// drawPrey()
//
// Draw the prey as an ellipse with alpha based on health
function drawPrey() {
  //attempting to have images fade, but not exactly succeeding.
  push();
  tint(255,preyHealth);
  image(preyImage,preyX,preyY,preyRadius*2,preyRadius*2);
  pop();
}

// drawPlayer()
//
// Draw the player as an ellipse with alpha based on health
function drawPlayer() {
  //attempting to have the images fade, but not exactly succeeding
  push();
  tint(255,playerHealth);
  image(playerImage,playerX,playerY,playerRadius*2,playerRadius*2);
  if (preyEaten > 10) {
    tint(25, 205, 255, playerHealth);
    image(playerImage,playerX,playerY,playerRadius*2,playerRadius*2);
  }
  pop();
}

// showGameOver()
//
// Display text about the game being over!
function showGameOver() {
  textFont(overwatchFont);
  textSize(52);
  textAlign(CENTER,CENTER);
  fill(244, 176, 66);
  stroke(0);
  var gameOverText = "GAME OVER\n";
  gameOverText += "You healed Genji " + preyEaten + " times\n";
  gameOverText += "before you died."
  text(gameOverText,width/2,height/2);
  mercyGameOver.play();
  noloop();

}

function randomVoiceLines() {
  var r = random();

  if (r < 0.09) {
    mercyVoiceLine1.play();
  }

  else if (0.1 < r < 0.29) {
    mercyVoiceLine2.play();
  }

  else if (0.3 < r < 0.49) {
    mercyVoiceLine3.play();
  }

  else if (0.5 < r < 0.69) {
    mercyVoiceLine4.play();
  }

  else if ( 0.7 < r < 0.99) {
    mercyVoiceLine5.play();
  }
}
