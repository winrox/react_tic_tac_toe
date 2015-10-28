import React from 'react';
import Gameboard from './Gameboard.jsx';
import Store from '../stores/Store.js';

export default React.createClass({
  getInitialState: function () {
    return {
      tiles: Store.getAllTiles(),
      clickCounter: Store.getClickValue()
    }
  },

  componentDidMount: function() {
    Store.addChangeListener(this.onChange);
  },

  onChange: function() {
    this.setState({
      todos: Store.getAllTiles()
    });
  },

  render() {
    return (
         <Gameboard tiles={this.state.tiles}/>
    );
  }
});
