var database;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form, game;
var player1,player2;
var players;
var fishFood;
var foodGroup;
var back_img;
var player1_img, player2_img;
var fishFood_img;
var player1score =0;
var player2score =0;

function preload(){
  back_img = loadImage(background.jpg);
  player1_img = loadImage(fish1.png);
  player2_img = loadImage(fish2.png);
  fishFood_img = loadImage(fishfood.png);
  foodGroup = new Group();
}

function setup() {
  createCanvas(800,600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(255,255,255);  
  //drawSprites();
  background(back_img);
  if (gameState === 1) {
    clear(); 
    game.play();
  }
  if (gameState === 2) {
    game.end();
  }
  if (playerCount === 2) {
    game.update(1);
  }
}