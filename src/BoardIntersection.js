import React from 'react';

//const BoardIntersection = (props) =>{
class BoardIntersection extends React.Component {
  constructor(props){
    super(props)

    var style = {
        top: props.row * 40,
        left: props.col * 40
    };
    //console.log(props.row, props.col)

    this.state ={
      classes: 'intersection',
      style: style
    }
  }
  handleClick() {
    var self = this
    if (self.props.board.play(self.props.row, self.props.col))
    self.props.onPlay();
    var classes = "intersection";
    if (self.props.board.current_turn != 0) classes += self.props.board.current_turn == 1 ? " black" : " white";
    self.setState({classes:classes})
  }
  render(){
    return (
      <div className={this.state.classes} style={this.state.style} onClick={this.handleClick.bind(this)}></div>
    );    
  }

}

export default BoardIntersection;
