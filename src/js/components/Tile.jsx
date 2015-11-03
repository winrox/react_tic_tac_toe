import React from 'react';
import Actions from '../actions/Actions.js';
let {Component} = React;

export default class Tile extends Component{
  constructor() {
    super();
    this.handleTileClick = this.handleTileClick.bind(this);
   }

  render() {
    let srcImg = '../img/blank.png';

    if(this.props.tile == 'x') {
      srcImg = '../img/X.png'
    }
    else if(this.props.tile == 'o') {
      srcImg = '../img/O.png'
    }

    return (
      <td>
        <img index={this.props.index} src={srcImg} onClick={this.handleTileClick}/>
      </td>
    );
  }

  handleTileClick() {
    Actions.changeTile(this.props.index);
  }
};
