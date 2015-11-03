import React from 'react';
import Message from './Message.jsx';
import Scoreboard from './Scoreboard.jsx';
import PlayAgain from './PlayAgain.jsx';

export default class Header extends React.Component{
  render() {
    return(
      <div className="page-header">
        <Scoreboard score={this.props.score} />
        <PlayAgain clickCounter={this.props.clickCounter} foundWinner={this.props.foundWinner}/>
        <Message message={this.props.message} />
      </div>
    )
  }
};
