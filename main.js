import React from 'react';
import ReactDOM from 'react-dom';
import Board from './src/Board.js';
import BoardView from './src/BoardView.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      board:this.props.board
    }
  }
  render(){
    //console.log(this.state.board.size);

    let self = this;
    return (
      <div>
        <BoardView board={this.state.board} onPlay = { () => self.setState({"board": self.props.board}) }/>
      </div>
    )
  }
}

var board = new Board(20);

ReactDOM.render(<App board = {board} />, document.querySelector('.container'))
//board={this.state.board} onPlay = {this.setState({"board": this.props.board})}


