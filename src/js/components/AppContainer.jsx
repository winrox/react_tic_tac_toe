import React from 'react';
import Gameboard from './Gameboard.jsx';
import Store from '../stores/Store.js';

export default React.createClass({
  getInitialState: function () {
    return {
      tiles: Store.getAllTiles(),
      clickCounter: Store.getClickValue(),
      foundWinner: Store.foundWinnerStatus()
    }
  },

  componentDidMount: function() {
    Store.addChangeListener(this.onChange);
  },

  onChange: function() {
    this.setState({
      tiles: Store.getAllTiles(),
      clickCounter: Store.getClickValue(),
      foundWinner: Store.foundWinnerStatus()
    });
  },

  render() {
    return (
         <Gameboard tiles={this.state.tiles}/>
    );
  }
});
