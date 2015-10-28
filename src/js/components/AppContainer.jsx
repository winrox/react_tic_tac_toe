import React from 'react';
import Gameboard from './Gameboard.jsx';
import BaseStore from '../stores/BaseStore.js';

export default React.createClass({
  getInitialState: function () {
    return {
      tiles: BaseStore.getAllTiles()
    }
  },

  componentDidMount: function() {
    BaseStore.addChangeListener(this.onChange);
  },

  onChange: function() {
    this.setState({
      todos: BaseStore.getAllTiles()
    });
  },

  render() {
    return (
         <Gameboard tiles={this.state.tiles}/>
    );
  }
});
