'use strict';

/* Game object literal that includes the "rules" (=constants) of the game */
let game = {
  minSpeed: 75,
  maxSpeed: 600,
  borderLeft: 0,
  borderRight: 600,
  borderUp: 0,
  borderDown: 500,
  enemyYMin: 100,
  enemyYMax: 350,
  winY: 199,
  winpoints: 199
}

/* allEnemies array, that will be filled with the enemies*/
var allEnemies = [];
allEnemies = createEnemies(5);
var player = new Player();

// Enemies our player must avoid

function Enemy(speed, posY){
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started
  this.speed = speed;
  this.x = -200;
  this.y = posY;
  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';
}

function createEnemies(num) {
  for(let i = 0; i < num; i++){
    let enemy = new Enemy(50, 100);
    allEnemies.push(enemy);
  }
  return allEnemies;
}

/*when enemy is over the border, randomize new values*/
function createRandomPosYX(){
  return [-100, 300];
}

function didIWin(x,y){

}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if(this.x < 500){
    this.x = this.x + (this.speed * dt);
  }
    //check for going off canvas, "reset" enemy with new x and y inside the borders.
    if(this.x > 500){
      [this.x, this.y] = createRandomPosYX();
    }
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
function Player(){
  //Replace x and y with proper "location" values
    this.x = 200;
    this.y = 400;
    /*startY (players starty)
    startX (players start x)*/
    this.sprite = 'images/char-cat-girl.png';
    //For the "scoreBoard"
    this.lives = 3;
    this.points = 0;
};

Player.prototype.update = function(){

    if (this.x > 450){
      this.x = 400;
    }

    else if(this.x < 0){
      this.x = 0;
    }

    else if(this.y > 440) {
      this.y = 440;
    }

    else if(this.y < -10) {
      this.y = -10;
    }
};

Player.prototype.render  = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput  = function(key){

switch(key){

case "left":
    this.x -= 100;
    break;

case "right":
    this.x += 100;
    break;

case "up":
    this.y -= 50;
    break;

case "down":
    this.y +=50;
    break;

default:
    console.log("Something strange happened.");
}
};

Player.prototype.checkCollisions = function(){
  //Compare players "location" to enemies' location on allEnemies array.
};

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
