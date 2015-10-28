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
      <table>
        <tr>{tiles[0]}{tiles[1]}{tiles[2]}</tr>
        <tr>{tiles[3]}{tiles[4]}{tiles[5]}</tr>
        <tr>{tiles[6]}{tiles[7]}{tiles[8]}</tr>
      </table>
    );
  }
});

module.exports = Gameboard;
