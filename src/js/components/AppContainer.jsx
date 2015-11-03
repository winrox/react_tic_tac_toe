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
    const props = {
      message: this.state.message,
      foundWinner: this.state.foundWinner,
      score: this.state.score,
      clickCounter: this.state.clickCounter,
      tiles: this.state.tiles
    };

    return (
      <div>
        <Header {...props} />
        <br/> <br/> <br/>
        <Gameboard tiles={props.tiles} />
      </div>
    );
  }
};
