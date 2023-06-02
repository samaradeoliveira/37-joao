var canvas;

//banco de dados e estado de jogo
var database, gameState;

//formulário, jogador e contagem de jogador
var form, player, playerCount;

//matriz para carros 
var cars = [];

//para guardar informações de todos os jogadores, sprite de carro1, sprite de carro2
var allPlayers, car1, car2;

//imagens: fundo, carro1, carro2, pista
var backgroundImage, bgImg, car1_img, car2_img, track;


function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
  //criar o carregamento de imagens: car1_img, car2_img, track (variáveis na linha 16)
  car1_img = loadImage("./assets/car1.png");



}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  database = firebase.database();

  //criando um objeto de jogo
  game = new Game();
  //chamando para ler o valor inicial do gamestate
  game.getState();
  //chamando para criar os objetos: form e player
  game.start();
}

function draw() {
  background(backgroundImage);

  //verificação de valor de playerCount através de programação condicional e atualizando "game"
 if(playerCount === 2){
   game.update(1);
 }

  //verificação de gameState se é igual a 1, se for, iniciar jogo
if(gameState === 1){
  game.play();
}

}

//atualiza conforme o tamanho da tela (tela)
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
