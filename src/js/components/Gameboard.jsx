import React from 'react';
import Tile from './Tile.jsx';

var Gameboard = React.createClass({
  eachTileInRow(sliceStart, sliceEnd) {
    const allTiles = this.props.tiles;
    let row = [];

    row = allTiles.slice(sliceStart, sliceEnd).map((tile, index) => {
      let realIndex = index;
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

    const row1 = this.eachTileInRow(0,3);
    const row2 = this.eachTileInRow(3,6);
    const row3 = this.eachTileInRow(6,9);

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
