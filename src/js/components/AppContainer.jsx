import React from 'react';
import BaseComponent from './BaseComponent.jsx';
import Gameboard from './Gameboard.jsx';
import Store from '../stores/Store.js';
import Header from './Header.jsx';

export default class AppContainer extends BaseComponent {
  constructor() {
    super();
    const state = this.StateOrigin();
    this._bind('onChange');
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
