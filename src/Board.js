var Board = function(size) {
    this.current_turn = Board.X;
    this.size = size;
    this.board = this.create_board(size);
    this.max = [0,0];
};

Board.empty = 0;
Board.X = 1;
Board.O = 2;

Board.prototype.create_board = function(size) {
    var cells = [];
    for (var i = 0; i < size; i++) {
        cells[i] = [];
        for (var j = 0; j < size; j++)
            cells[i][j] = Board.empty;
    }
    return cells;
};

Board.prototype.switch_player = function() {
  if(this.current_turn === Board.X){
    this.current_turn = Board.O;
  } else {
    this.current_turn = Board.X;
  }
};

Board.prototype.end_game = function(player) {
    alert("Player " + player + " win!");
};

Board.prototype.play = function(i, j) {
  if (this.board[i][j] != Board.empty){
    return false;
  } else {
    this.board[i][j] = this.current_turn;
    this.check_winner(this.current_turn, i, j);
    if(this.max[this.current_turn-1]>=4){
      this.end_game(this.current_turn);
    }
    this.switch_player()
    return true;
  }
}
Board.prototype.check_winner = function(player, x, y) {
  console.log(player)
  //check main diagonal
  var i = x;
  var j = y;
  var k = x;
  var l = y;
  var counter = 0;
  while(this.board[i+1][j-1] === player || this.board[k-1][l+1] === player){
    if(this.board[i+1][j-1] === player){
      i++;
      j--;
      counter++;
    }
    if(this.board[k-1][l+1] === player){
      k--;
      l++;
      counter++;
    }
    if(counter > this.max[player-1]){
      this.max[player-1] = counter;
    }
  }
  //check other diagonal
  var i = x;
  var j = y;
  var k = x;
  var l = y;
  counter = 0;
  while(this.board[i+1][j+1] === player || this.board[k-1][l-1] === player){
    if(this.board[i+1][j+1] === player){
      i++;
      j++;
      counter++;
    }
    if(this.board[k-1][l-1] === player){
      k--;
      l--;
      counter++;
    }
    if(counter > this.max[player-1]){
      this.max[player-1] = counter;
    }
  }

  //check row
  var i = x;
  var j = y;
  var l = y;
  counter = 0;
  while(this.board[i][j-1] === player || this.board[i][l+1] === player){
    if(this.board[i][j-1] === player){
      j--;
      counter++;
    }
    if(this.board[i][l+1] === player){
      l++;
      counter++;
    }
    if(counter > this.max[player-1]){
      this.max[player-1] = counter;
    }
  }

  //check column
  var i = x;
  var j = y;
  var k = x;
  counter = 0;
  while(this.board[i+1][j] === player || this.board[k-1][j] === player){
    if(this.board[i+1][j] === player){
      i++;
      counter++;
    }
    if(this.board[k-1][l] === player){
      k--;
      counter++;
    }
    if(counter > this.max[player-1]){
      this.max[player-1] = counter;
    }
  }
}

export default Board


