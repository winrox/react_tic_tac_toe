import React from 'react';
import Gameboard from './Gameboard.jsx';
import Store from '../stores/Store.js';
import Header from './Header.jsx';
let {Component} = React;

export default class AppContainer extends Component{
  constructor() {
    super();
    this.state = Store.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    Store.addChangeListener(this.onChange);
  }

  onChange() {
    this.setState(Store.getState());
  }

  render() {
    return (
      <div>
        <Header
          message={this.state.message}
          foundWinner={this.state.foundWinner}
          score={this.state.score}
          clickCounter={this.state.clickCounter}
        />
        <br/> <br/> <br/>
        <Gameboard tiles={this.state.tiles} />
      </div>
    );
  }
};
