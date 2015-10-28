import React from 'react';
import Gameboard from './Gameboard.jsx';
import Store from '../stores/Store.js';
import Header from './Header.jsx';


export default React.createClass({
  getInitialState: function () {
    return {
      tiles: Store.getAllTiles(),
      clickCounter: Store.getClickValue(),
      foundWinner: Store.foundWinnerStatus(),
      message: Store.getMessage(),
      score: Store.getScore()
    }
  },

  componentDidMount: function() {
    Store.addChangeListener(this.onChange);
  },

  onChange: function() {
    this.setState({
      tiles: Store.getAllTiles(),
      clickCounter: Store.getClickValue(),
      foundWinner: Store.foundWinnerStatus(),
      message: Store.getMessage(),
      score: Store.getScore()
    });
  },

  render() {
    return (
      <div>
        <Header
          message={this.state.message}
          foundWinner={this.state.foundWinner}
          score={this.state.score}
          clickCounter={this.state.clickCounter}
        />
        <br /> <br /> 
        <Gameboard tiles={this.state.tiles} />
      </div>
    );
  }
});
