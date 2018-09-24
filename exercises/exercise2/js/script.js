/*********************************************************

Exercise 2 - The Artful Dodger
Percy Dragon

Starter code for exercise 2.

*********************************************************/
//adding in awesome bg image
var screamingInternally;
// The position and size of our avatar circle
var avatarX;
var avatarY;
//inserting image for avatar + dimensions i think??? idk what im doing
var avatarImage;
var avatarSizeH = 100;
var avatarSizeW = 61;

// The speed and velocity of our avatar circle
var avatarSpeed = 10;
var avatarVX = 0;
var avatarVY = 0;

// The position and size of the enemy circle
var enemyX;
var enemyY;
//adding enenemy image + image dimensions I guess??
var enemyImage
var enemySizeH = 100;
var enemySizeW = 63;
// How much bigger the enemy circle gets with each successful dodge
var enemySizeIncrease = 5;

// The speed and velocity of our enemy circle
var enemySpeed = 5;
var enemyVX = 5;
// How much bigger the enemy circle gets with each successful dodge
var enemySpeedIncrease = 0.5;

// How many dodges the player has made
var dodges = 0;



//adding some fancy font
var coolFont;

// setup()
//
// Make the canvas, position the avatar and anemy

function preload() {
  //loading in coolFont
  coolFont = loadFont("assets/WalterTurncoat-Regular.ttf");
  avatarImage = loadImage("assets/images/nyan-cat.png");
  enemyImage = loadImage("assets/images/tac-nayn.png");
  screamingInternally = loadImage("assets/images/internally-screaming.jpg");

}
function setup() {
  // Create our playing area
  createCanvas(600,600);

  // Put the avatar in the centre
  avatarX = width/2;
  avatarY = height/2;

  // Put the enemy to the left at a random y coordinate within the canvas
  enemyX = 0;
  enemyY = random(0,height);

  // No stroke so it looks cleaner
  noStroke();

  //doing the special font stuff
  fill(244, 66, 89);
  stroke(0);
  textAlign(LEFT,CENTER);
  textFont(coolFont);
  textSize(25);
}

// draw()
//
// Handle moving the avatar and enemy and checking for dodges and
// game over situations.
function draw() {
  // A pink background
  background(screamingInternally);

  // Default the avatar's velocity to 0 in case no key is pressed this frame
  avatarVX = 0;
  avatarVY = 0;
  // adding in dodge numbers text
  text("You've dodged " + dodges + " time(s)!", width/1.95, height/16);

  // Check which keys are down and set the avatar's velocity based on its
  // speed appropriately

  // Left and right
  if (keyIsDown(LEFT_ARROW)) {
    avatarVX = -avatarSpeed;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    avatarVX = avatarSpeed;
  }

  // Up and down (separate if-statements so you can move vertically and
  // horizontally at the same time)
  if (keyIsDown(UP_ARROW)) {
    avatarVY = -avatarSpeed;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    avatarVY = avatarSpeed;
  }


  //adding mean if statement where commands are inversed once you get over 3 dodges
  if (dodges > 3) {
    if (keyIsDown(RIGHT_ARROW)) {
      avatarVX = -avatarSpeed;
    }
    else if (keyIsDown(LEFT_ARROW)) {
      avatarVX = avatarSpeed;
    }
  }
  if (dodges > 3) {
    text("CONTOLS ARE INVERSED!!!", width/1.95, height/9);
    if (keyIsDown(DOWN_ARROW)) {
      avatarVY = -avatarSpeed;
    }
    else if (keyIsDown(UP_ARROW)) {
      avatarVY = avatarSpeed;
    }
  }

  //DOING THE SAME THING FOR UP AND DOWN


  // Move the avatar according to its calculated velocity
  avatarX = avatarX + avatarVX;
  avatarY = avatarY + avatarVY;

  // The enemy always moves at enemySpeed (which increases)
  enemyVX = enemySpeed;
  // Update the enemy's position based on its velocity
  enemyX = enemyX + enemyVX;

  // Check if the enemy and avatar overlap - if they do the player loses
  // We do this by checking if the distance between the centre of the enemy
  // and the centre of the avatar is less that their combined radii
  if (dist(enemyX,enemyY,avatarX,avatarY) < ((enemySizeH/2 + enemySizeW/2) + (avatarSizeH/8 + avatarSizeW/8))) {
    // Tell the player they lost
    console.log("YOU LOSE!");
    // Reset the enemy's position
    enemyX = 0;
    enemyY = random(0,height);
    // Reset the enemy's size and speed
    enemySizeH = 100;
    enemySizeW = 63;
    enemySpeed = 5;
    // Reset the avatar's position
    avatarX = width/2;
    avatarY = height/2;
    // Reset the dodge counter
    //reseting image if lost
    avatarSizeH = 100;
    avatarSizeW = 61;
    dodges = 0;
    avatarSpeed = 10;
  }
  // Check if the avatar has gone off the screen (cheating!)
  if (avatarX < 0 || avatarX > width || avatarY < 0 || avatarY > height) {
    // If they went off the screen they lose in the same way as above.
    //game kept keeping enemy size the same after losing. H and W variables need to be reset
    console.log("YOU LOSE!");
    enemyX = 0;
    enemyY = random(0,height);
    enemySizeH = 100;
    enemySizeW = 63;
    enemySpeed = 5;
    avatarX = width/2;
    avatarY = height/2;
    avatarSizeH = 100;
    avatarSizeW = 61;
    dodges = 0;
    avatarSpeed = 10;
  }

  // Check if the enemy has moved all the way across the screen
  if (enemyX > width) {
    // This means the player dodged so update its dodge statistic
    dodges = dodges + 1;
    // Tell them how many dodges they have made
    console.log(dodges + " DODGES!");
    // Reset the enemy's position to the left at a random height
    enemyX = 0;
    enemyY = random(0,height);
    // Increase the enemy's speed and size to make the game harder
    //also adding in the size increase by width and height
    enemySpeed = enemySpeed + enemySpeedIncrease;
    enemySizeH = enemySizeH + enemySizeIncrease;
    enemySizeW = enemySizeW + enemySizeIncrease;

    //adding randomizer to player
    if (dodges > 1) {
      avatarSizeH = random(3,height/2);
      avatarSizeW = random(3,width/2);
      // TIME TO RANDOMIZE SPEED
      avatarSpeed = random(1,50);
    }
  }

  // Display the current number of successful in the console
  console.log(dodges);

  // The player is black
  //fill(0);
  // Draw the player as a circle
  image(avatarImage,avatarX,avatarY,avatarSizeH,avatarSizeW);

  // The enemy is red
  //fill(255,0,0);
  // Draw the enemy as a circle
  //ellipse(enemyX,enemyY,enemySize,enemySize);

  //adding in enemy image
  image(enemyImage,enemyX,enemyY,enemySizeH,enemySizeW);

}
