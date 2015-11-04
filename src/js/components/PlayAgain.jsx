import React from 'react';
import Actions from '../actions/Actions';
import Header from './Header.jsx';

const PlayAgain = (props) => {
  let hide;

  if (props.foundWinner == true || props.clickCounter == 9) {
    hide = "";
  } else {
    hide = "hidden";
  }

  return (
    <button className={hide} onClick={handleClick}>
      Play Again
    </button>
  )
};

const handleClick = () => (
  Actions.playAgainClick()
);


export default PlayAgain;
