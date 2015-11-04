import React from 'react';
import Message from './Message.jsx';
import Scoreboard from './Scoreboard.jsx';
import PlayAgain from './PlayAgain.jsx';
import Title from './Title.jsx';

const Header = (props) => (
  <div className="page-header">
    <Title />
    <Scoreboard score={props.score} />
    <PlayAgain clickCounter={props.clickCounter} foundWinner={props.foundWinner}/>
    <Message message={props.message} />
  </div>
);

export default Header;
