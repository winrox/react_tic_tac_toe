import React from 'react';
import Actions from '../actions/Actions';
import Header from './Header.jsx';

var PlayAgain = React.createClass({
  render: function() {
    return (
      <button onClick={this.handleClick}>
        Play Again
      </button>
    )
  },

  handleClick: function() {
    Actions.playAgainClick();
  }
});

module.exports = PlayAgain;
