import React from 'react';
import Tile from './Tile.jsx';

var Gameboard = React.createClass({
  render: function() {
    var allTiles = this.props.tiles;
    var tiles = [];

    for(var key in allTiles) {
      tiles.push(<Tile key={key} tile={allTiles[key]} />);
    }

    return (
      <table>{tiles}</table>
    );
  }
});

module.exports = Gameboard;
