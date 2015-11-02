import React from 'react';
import Tile from './Tile.jsx';

var Gameboard = React.createClass({
  eachTileInRow: function(sliceStart, sliceEnd) {
    var allTiles = this.props.tiles;
    var row1 = [];
    row1 = allTiles.slice(sliceStart,sliceEnd).map(function(tile, index) {
    return (<Tile key={index} tile={tile} />);
    })
    return row1;
  },

  render: function() {

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

// var row1 = allTiles.slice(0,2);
// var row2 = allTiles.slice(3,5);
// var row3 = allTiles.slice(6,8);


/* start with something like:

return(
  <table>
    {allTiles.map(function( tile, index ){}}
  </table>
)

*/
// then use something like:

// Object.keys(allTiles).map(function(item){
// item+=1;
// return (item % 3 == 0);
// });
// > [false, false, true, false, false, true, false, false, true]

// if true add in </tr><tr> after the tile (for the first 2 trues only)
//
// function getRow(rowLetter){
//     var tiles = allTiles.map(function(tile, index) {
//     if(tile == rowLetter){
//       return (<Tile key={index} tile={tile} />);
//     }
//   })
//   return tiles;
// };
//
// var tiles = allTiles.slice(0,3).map(function(tile, index) {
//
//
//   {allTiles,slie(2,3).map(function(tile, index) {
//     var row1 = []; var row2 = []; var row3 = [];
//
//     if(index == 0 || index == 1 || index == 2){
//       row1.push(<Tile key={index} tile={tile} />);
//     }
//     else if(index == 3 || index == 4 || index == 5){
//       row2.push(<Tile key={index} tile={tile} />);
//     }
//     else if(index == 6 || index == 7 || index == 8){
//       row3.push(<Tile key={index} tile={tile} />);
//     }
//
//     return (
//       <tr>{row1}</tr>
//       <tr>{row2}</tr>
//       <tr>{row3}</tr>
//     )
//   })}
