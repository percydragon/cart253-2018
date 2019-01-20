"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

let agents = [];
const maxSpeed = 30;

// preload()
//
// Description of preload

function preload() {

}


// setup()
//
// Description of setup

function setup() {
  createCanvas(windowWidth,windowHeight)
  agents.push(new Eater(mouseX,mouseY,124,0.5));
  for (let i = 1; i < 15; i++) {
    agents.push(new Food(random(width),random(height),random(5),random(5),40,15,184,15,'#dd77ff'));
  }

}


// draw()
//
// Description of draw()

function draw() {
  background(0);


  for (let i = 0; i < agents.length; i++) {
    agents[i].update();
    agents[i].display();

    if (agents[0].collide(agents[1,2,3,4,5,6,7,8,9,10])) {
      agents[0].eat(agents[1,2,3,4,5,6,7,8,9,10]);
    }
  }
}
