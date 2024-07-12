//weed var
let weed;
//cords
let height = window.innerHeight; //height of the window
let width = window.innerWidth; //width of the window

//canvas creation (set up to window)
function setup() {
  createCanvas(width, height);
  //weed spawn start
  initializeWeed();
}//end of set up func

//canvas draws (draws the weed)
function draw() {
  //green background
  background(67, 148, 75);
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
  weed = {x: random(0, width - 60), y: random(0, height - 60)};
}//end of initializeWeed func

//draws the 420
function drawWeed(x, y) {
  textSize(60);
  text("🌿", x, y);
}//end of drawWeed func

//checks if user is over the weed
function isMouseOverWeed() {
  return mouseX > weed.x && mouseX < weed.x + 60 && mouseY > weed.y && mouseY < weed.y + 60;
}//end of isMouseOverWeed func