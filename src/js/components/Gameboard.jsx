import React from 'react';
import Tile from './Tile.jsx';

var Gameboard = React.createClass({

  render: function() {
    var tiles = this.props.tiles.map(function(tile, index) {
      if(tile.id[0] == 'a'){
        return (<Tile key={index} tile={tile} />);
      }
    });

    var tiles1 = this.props.tiles.map(function(tile, index) {
      if(tile.id[0] == 'b'){
        return (<Tile key={index} tile={tile} />);
      }
    });

    var tiles2 = this.props.tiles.map(function(tile, index) {
      if(tile.id[0] == 'c'){
        return (<Tile key={index} tile={tile} />);
      }
    });

    return (
      <table>
        <tr>{tiles}</tr>
        <tr>{tiles1}</tr>
        <tr>{tiles2}</tr>
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
