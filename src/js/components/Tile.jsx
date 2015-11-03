import React from 'react';
import Actions from '../actions/Actions.js';

export default class Tile extends React.Component{
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

    const tileProps = {
      index: this.props.index,
      src: srcImg,
      onClick: this.handleTileClick
    };

    return (
      <td>
        <img {...tileProps}/>
      </td>
    );
  }

  handleTileClick() {
    Actions.changeTile(this.props.index);
  }
};
