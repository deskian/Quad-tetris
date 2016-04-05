import React from 'react';
import BoardIntersection from './BoardIntersection.js';

// const BoardView = (props) =>{
class BoardView extends React.Component {
  constructor(props){
    super(props)
    var intersections = [];
    for (var i = 0; i < props.board.size; i++)
        for (var j = 0; j < props.board.size; j++)
            intersections.push(<BoardIntersection 
                                  board= {props.board}
                                  color= {props.board.board[i][j]}
                                  onPlay= {props.onPlay}
                                  row= {i}
                                  col= {j}/>);
    this.state = {
      style:{
        width: 40*props.board.size,
        height: 40*props.board.size
      },
      intersections: intersections
    };
  }
  render(){
    return (
      <div style={this.state.style} id="board">
        {this.state.intersections}
      </div>
    )  
  }
}

export default BoardView;

