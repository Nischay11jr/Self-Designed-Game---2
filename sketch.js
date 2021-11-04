var canvas;
var backgroundImg;
var gameState = 0;
var form;
var runner, runnerImg1;
var invisibleGround;

function preload() {
//bgImg = loadImage("./images/jungle.png");
//runnerImg1 = loadImage("images/Idle(1).png");

getBackgroundImg();

}

function setup() {
  canvas = createCanvas(windowWidth + 300, windowHeight);

  runner = createSprite(width/2 - 630, height/2 + 100, 40, 40);
  invisibleGround = createSprite(width/2 - 630, height/2 + 200 );
  //invisibleGround.visibility = false;

  game = new Game();

}

function draw() {
  if(backgroundImg)
  background(backgroundImg);
  

  if(gameState === 0){
    game.start();
    
  }

  if(gameState === 1){
    form.greeting.hide();
    form.playButton.hide();
    form.input.hide();

   runner.collide(invisibleGround);
   

  }

  // player controls
  if(keyDown("UP_ARROW")){
    runner.y = -3;
  }

  //gravity
  runner.y = runner.y + 0.8;


  drawSprites()

}

async function getBackgroundImg(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/kolkata");
  var responseJSON = await response.json();
   
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);

  if(hour >= 06 && hour <=18){
      bg = "images/jungle.png";
  }
  else{
      bg = "images/nightjungle-1.png";
  }

  backgroundImg = loadImage(bg);
  
}