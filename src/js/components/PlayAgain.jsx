import React from 'react';
import Actions from '../actions/Actions';
import Header from './Header.jsx';
let {Component} = React;

export default class PlayAgain extends Component{
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
   }

  render() {
    let playAgainBtn = <p></p>

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
  }

  handleClick() {
    Actions.playAgainClick();
  }
};
