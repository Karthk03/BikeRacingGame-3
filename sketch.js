//decalring variables

var gameState = 0, playerCount = 0;
var form, game, player;
var database;
var bikeIMG1, bikeIMG2,TrackFinal,FormBg
var frameCount = 0;
var obstical = [], obsticalArrPos = -1;
var bike1,bike2,bike = [],rand;
var obsticalIMG;
var reset;
var allPlayers2 = [];

function preload()
{
  // loding images
  bikeIMG1 = loadImage("Images/BikeImg.png");
  bikeIMG2 = loadImage("Images/BikeImg2.png");
  bikeIMG3 = loadImage("Images/BikeImg3.png");
  bikeIMG4 = loadImage("Images/BikeImg4.png");
  TrackFinal = loadImage("Images/Track Final.png");
  formBg = loadImage("Images/Form Bg.jfif");
  obsticalIMG = loadImage("Images/Obstical.png")
}

function setup() 
{

  // creating cannvas
  createCanvas(800,400);

  // creating a reset button for creators
  reset = createButton("reset");
  reset.position(50,50);

  database = firebase.database();

  // refrencing the database
  database.ref("gameState").on("value",function(data){
    gameState = data.val()
  })

  database.ref("playerCount").on("value",function(data){
    playerCount = data.val()
  })
  
  player = new Player();
  form = new Form();
  game = new Game();
}

function draw() 
{
  background("brown");

  // reseting the database if 'reset' button is pressed
  reset.mousePressed(()=>{
    database.ref("/").update({
      'playerCount': 0,
      'gameState':0,
      'players':null
  })
  })
  if(gameState == 0)
  {
    // displaing the form
    form.display();
  }
  else
  {
    // game starts
    game.play();
  }

  if(gameState!=0)
  {
    background("brown");
  }

  // incrementing the framecount
  frameCount++;

  drawSprites();
}

function updateGameState(value)
{
  database.ref("/").update({
    'gameState': value
  })
}

function keyPressed()
{
  // if game is playing
  // if you press up arrow you go up
  // and if you press down you go down
  if(gameState == 1)
  {
    if(keyCode == 40)
    {
      player.lane++;
    }
    if(keyCode == 38)
    {
      player.lane--;
    }
  }

  if(gameState == 2 && playerCount>=4)
  {
    if(keyCode == 40)
    {
      player.lane++;
    }
    if(keyCode == 38)
    {
      player.lane--;
    }
  }
}