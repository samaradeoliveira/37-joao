class Player {
  //aluno ler e explicar
  constructor() {
    this.name = null;
    this.index = null; //ID
    this.positionX = 0;
    this.positionY = 0;
  }

  // posições dos jogadores e criação de campo "Jogadores" no banco
  addPlayer() {
    var playerIndex = "players/player" + this.index;

    if (this.index === 1) {
      this.positionX = width / 2 - 100;
    } else {
      this.positionX = width / 2 + 100;
    }

    database.ref(playerIndex).set({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY
    });
  }

  //pega o valor do banco e guarda na variável playerCount
  getCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", data => {
      playerCount = data.val();
    });
  }

  //atualiza o valor do banco no campo "playerCount", chama em handleMousePressed
  updateCount(count) {
    database.ref("/").update({
      playerCount: count
    });
  }

  //Ativar a função estática para pegar as informações dos players do banco de dados
  static getPlayersInfo() {
    var playerInfoRef = database.ref("players");
    playerInfoRef.on("value", data => {
      allPlayers = data.val();
    });
  }
}
