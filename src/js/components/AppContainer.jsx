import React from 'react';
import Gameboard from './Gameboard.jsx';
import Store from '../stores/Store.js';
import Message from './Message.jsx';

export default React.createClass({
  getInitialState: function () {
    return {
      tiles: Store.getAllTiles(),
      clickCounter: Store.getClickValue(),
      foundWinner: Store.foundWinnerStatus(),
      message: Store.getMessage()
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
      message: Store.getMessage()
    });
  },

  render() {
    return (
      <div>
        <Message message={this.state.message} />
        <Gameboard tiles={this.state.tiles} />
      </div>
    );
  }
});