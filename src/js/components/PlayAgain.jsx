import React from 'react';
import Actions from '../actions/Actions';
import Header from './Header.jsx';

export default class PlayAgain extends React.Component{
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
   }

  render() {
    let hide;

    if (this.props.foundWinner == true || this.props.clickCounter == 9) {
      hide = "";
    } else {
      hide = "hidden";
    }

    return (
      <button className={hide} onClick={this.handleClick}>
        Play Again
      </button>
    )
  }

  handleClick() {
    Actions.playAgainClick();
  }
};
