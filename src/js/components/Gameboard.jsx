import React from 'react';
import Tile from './Tile.jsx';

var Gameboard = React.createClass({

  render: function() {
    var allTiles = this.props.tiles;

    function getRow(rowLetter){
        var tiles = allTiles.map(function(tile, index) {
        if(tile.id[0] == rowLetter){
          return (<Tile key={index} tile={tile} />);
        }
      })
      return tiles;
    };

    return (
      <table>
        <tr>{getRow('a')}</tr>
        <tr>{getRow('b')}</tr>
        <tr>{getRow('c')}</tr>
      </table>
    )
  }
});

module.exports = Gameboard;
//-----------------------------------------------
//
//
// var tiles = this.props.tiles.map(function(tile, index) {
//   if (index == 2){
//     return (<Tile key={index} tile={tile} />)
//   }
//   else {
//     return (<Tile key={index} tile={tile} />)
//   }
// });
//
// allTiles.filter(function(tile) {
//   return tile.id[0] == 'a';
// });

//
// var row1 = row(a);
// var row2 = row(b);
// var row3 = row(c);
