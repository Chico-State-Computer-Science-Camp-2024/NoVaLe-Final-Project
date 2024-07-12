//weed var
let weed;
//cords
let height = window.innerHeight; //height of the window
let width = window.innerWidth; //width of the window
let gardenBase;
let halfWeed;

function preload(){
  gardenBase = loadImage('./images/gardenBaseBG.png');
  halfWeed= loadImage('./images/halfWeed.png');
}

//canvas creation (set up to window)
function setup() {
  createCanvas(width, height);
  //weed spawn start
  initializeWeed();
}//end of set up func

//canvas draws (draws the weed)
function draw() {
  //green background
  background(gardenBase);
  //draws weed
  drawWeed(weed.x, weed.y);
  //cursor
  textSize(100);
  text("⛏️", mouseX, mouseY);

  //registers user input
  if (mouseIsPressed && isMouseOverWeed()) {
    // Move weed to a new location
    initializeWeed();
  }//end of if
}//end of draw func

//new weed spawn
function initializeWeed() {
  weed = {x: random(420, width - 420), y: random(100, height - 100)};
}//end of initializeWeed func

//draws the 420
function drawWeed(x, y) {
  textSize(60);
  text('🌿', x, y);
}//end of drawWeed func

//checks if user is over the weed
function isMouseOverWeed() {
  return mouseX > weed.x && mouseX < weed.x + 60 && mouseY > weed.y && mouseY < weed.y + 60;
}//end of isMouseOverWeed func