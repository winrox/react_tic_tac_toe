import React from 'react';
import Actions from '../actions/Actions.js';

var Tile = React.createClass({
  render: function() {
    var srcImg = '../img/blank.png';

    if(this.props.tile.value == 'x') {
      srcImg = '../img/X.png'
    }
    else if(this.props.tile.value == 'o') {
      srcImg = '../img/O.png'
    }

    return (
      <td>
        <img id={this.props.tile.id} src={srcImg} onClick={this.handleTileClick}/>
      </td>
    );
  },

  handleTileClick: function() {
    Actions.changeTile(this.props.tile);
  }
});

module.exports = Tile;
