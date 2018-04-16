/*Constant values
startY (players starty)
startX (players start x)
borderLeft (out of bounds x)
borderRight (out of bounds x)
borderUp (out of bounds y)
borderDown (out of bounds y)
minSpeed (enemy's min speed)
maxSpeed (enemy's max speed)
playerStep (how much a player moves by one keypress)
*/

// Enemies our player must avoid
function Enemy(speed, posY){
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started
  this.speed = speed;
  this.x = 0;
  this.y = posY;
  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + (speed * dt);
    //check for going off canvas, "reset" enemy.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
function Player(){
  //Replace x and y with proper "location" values
    this.x = 0;
    this.y = 0;
    this.sprite = 'images/char-cat-girl.png'
    //For the "scoreBoard"
    this.lives = 3;
    this.points = 0;
}

Player.protype.update(){

}

Player.prototype.render(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.protype.handleInput(key){

}

Player.protype.checkCollisions(){
  //Compare players "location" to enemies' location on allEnemies array.
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

let player = new Player();


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
