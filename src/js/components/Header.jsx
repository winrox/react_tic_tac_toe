import React from 'react';
import Message from './Message.jsx';
import Scoreboard from './Scoreboard.jsx';
import PlayAgain from './PlayAgain.jsx';

var Header = React.createClass({
  render: function() {
    return(
      <div>
        <Scoreboard score={this.props.score} />
        <Message message={this.props.message} />
        <PlayAgain />
      </div>
    )
  }
});
module.exports = Header;
