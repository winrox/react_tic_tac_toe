import React from 'react';
import Message from './Message.jsx';
import Scoreboard from './Scoreboard.jsx';
import PlayAgain from './PlayAgain.jsx';

var Header = React.createClass({
  render: function() {
    return(
      <div className="page-header">
        <Scoreboard score={this.props.score} />
        <PlayAgain />
        <Message message={this.props.message} />
      </div>
    )
  }
});
module.exports = Header;
