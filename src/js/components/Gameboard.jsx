import React from 'react';
import Tile from './Tile.jsx';

var Gameboard = React.createClass({
  eachTileInRow(sliceStart, sliceEnd) {
    var allTiles = this.props.tiles;
    var row = [];

    row = allTiles.slice(sliceStart, sliceEnd).map((tile, index) => {
      var realIndex = index;
      if(sliceStart == 3){
        realIndex+= 3;
      }
      if(sliceStart == 6){
        realIndex+= 6;
      }
      return (<Tile tile={tile} index={realIndex}/>);
    })

    return row;
  },

  render() {

    var row1 = this.eachTileInRow(0,3);
    var row2 = this.eachTileInRow(3,6);
    var row3 = this.eachTileInRow(6,9);

    return (
      <table>
        <tr>{row1}</tr>
        <tr>{row2}</tr>
        <tr>{row3}</tr>
      </table>
    )
  }
});

module.exports = Gameboard;
