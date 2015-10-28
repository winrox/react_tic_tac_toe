import React from 'react';
import Actions from '../actions/Actions';
import Header from './Header.jsx';

var PlayAgain = React.createClass({
  render: function() {
    var playAgainBtn = <p></p>

    if (this.props.foundWinner == true || this.props.clickCounter == 9) {
      playAgainBtn = <button onClick={this.handleClick}>
        Play Again
      </button>
    }
    else if(this.props.clickCounter > 0){
      playAgainBtn = <p></p>
    }


    return (<div>
        {playAgainBtn}
      </div>
    )
  },

  handleClick: function() {
    Actions.playAgainClick();
  }
});

module.exports = PlayAgain;
