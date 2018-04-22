'use strict';

let points = document.getElementById("points");

/* allEnemies array, that will be filled with the enemies objects*/
var allEnemies = [];
/*populate allEnemies*/
allEnemies = createEnemies(5);
/*create a player object*/
var player = new Player();

/* enemy constructor*/
function Enemy(speed, x, y){
  /*every enemy has speed, x- and y- coordinate* and "image"*/
  this.speed = speed;
  this.x = x;
  this.y = y;
  /* Image for all enemies*/
  this.sprite = 'images/enemy-bug.png';
}

/*function that calls the enemy constructor*/
function createEnemies(num) {
  let speed, x, y;
  /* for loop runs as many times there should be enemies (num)*/
  for(let i = 0; i < num; i++){
    /*create randoms returns speed, x and y and they are set in one go*/
    [speed, x, y] = createRandoms();
    /* lets use the random values to create an enemy*/
    let enemy = new Enemy(speed, x, y);
    allEnemies.push(enemy);
  }
  return allEnemies;
}

/*randomize new values for new enemy and when the enemy is over the "border"*/
function createRandoms(){
  /* x will be negative, so the enemy does not show up immediately*/
  let randomX = -50 - Math.floor(Math.random()*300);
  /* we do not want enemies on the grass or on the "river"*/
  let randomY = 50 + Math.floor(Math.random() * 150);
  /* speed should be over 50, but not over 450*/
  let randomSpeed = 50 + Math.floor(Math.random()*400);
  /*when returned in array, values can be set directly to multiple variables, when they are in array*/
  return [randomSpeed, randomX, randomY];
}

/*Update the enemy's position
Parameter: dt, a time delta between ticks*/
Enemy.prototype.update = function(dt) {

    if(this.x < 500){
    this.x = this.x + (this.speed * dt);
  }
    //check for going off canvas, "reset" enemy with new x and y inside the borders.
    if(this.x > 500){
      [this.speed, this.x, this.y] = createRandoms();
    }
    /* check collision*/
}

/* Draw the enemy on the screen */
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}


function Player(){

    this.x = 200;
    this.y = 400;
    this.sprite = 'images/char-cat-girl.png';
    //For the "scoreBoard"
    this.lives = 3;
    this.points = 0;
}

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

    else if(this.y < 0) {
      this.y = 0;
    }

    if(this.y <= 0){
      this.x = 200;
      this.y = 400;
      this.points+=200;
      this.updateScores();
    }
}

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
}

Player.prototype.updateScores = function(){
    points.textContent = this.points;
}

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
