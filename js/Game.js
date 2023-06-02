class Game {
  constructor() { }

  //função onde lemos o valor de gamestate do banco e guardamos em uma var global do código
  //prof explicar
  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    });
  }

  //update para atualizar o gamestate no banco de dados, criar na linha abaixo
  update(state){
   database.ref("/").update({
    gameState: state
   });
  }





  start() {
    //cria objeto de jogador
    player = new Player();
    //cria objeto de formulário
    form = new Form();
    form.display();

    //variável do código recebe a contagem de jogadores 
    playerCount = player.getCount();


    //sprites dos carros
    car1 = createSprite(width / 2 - 50, height - 100);
   //adc IMG e o scale
   car1.addImage("car1", car1_img);
   car1.scale = 0.07;

    car2 = createSprite(width / 2 + 100, height - 100);
    //adc a imagem e o scale 


    
    //adc carros na matriz carros 

   
  }

  //ocultar as informações do jogo quando o jogo está em andamento
  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  //método play para colocar a imagem da pista e carros
  //aluno analisar 
  /*play() {
    //ocultar elementos
    this.handleElements();
    //obtendo os dados dos jogadores, chamando a função estática getPlayerInfo (ATIVAR)
    //Player.getPlayersInfo();

    //se todos os jogadores forem diferentes de indefinidos, mostrar a pista e desenhar os sprites
    /*if (allPlayers !== undefined) {}*/




  //}
}
