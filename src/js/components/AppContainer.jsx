import React from 'react';
import Gameboard from './Gameboard.jsx';
import Store from '../stores/Store.js';
import Header from './Header.jsx';


export default React.createClass({
  getInitialState: function () {
    return Store.getState();
  },

  componentDidMount: function() {
    Store.addChangeListener(this.onChange);
  },

  onChange: function() {
    this.setState( Store.getState());
  },

  render: function() {
    return (
      <div>
        <Header
          message={this.state.message}
          foundWinner={this.state.foundWinner}
          score={this.state.score}
          clickCounter={this.state.clickCounter}
        />
        <br /> <br /> <br />
        <Gameboard tiles={this.state.tiles} />
      </div>
    );
  }
});
