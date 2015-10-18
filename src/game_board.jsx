var React = require('react');
var Tile = require('./tile');

module.exports = React.createClass({
  render: function() {
    console.log(this.props.tiles);
    return (
      <div>
         <h1>GAMEBOARD</h1>
      </div>
    )
  },

  // rendertTiles: function() {
  //   if(!this.props.tiles) {
  //     return
  //   } else {
  //     var tiles = [];
  //
  //     for(var key in this.props.tiles) {
  //       var tiles = this.props.tiles[key];
  //       tile.key = key;
  //
  //       tiles.push(
  //         <Tile
  //           tile = {this.props.tiles[key]}
  //           key = {key}
  //           >
  //         </Tile>
  //       )
  //     }
  //     return tiles;
  //   }
  // },

// {this.renderGrid(this.renderTiles())}

/* May need to use the proper keys from firebase to identify each tile */
  // renderGrid: function() {
  //   return <table>
  //     <tr>
  //       {tiles[0]}
  //       {tiles[1]}
  //       {tiles[2]}
  //     </tr>
  //     <tr>
  //       {tiles[3]}
  //       {tiles[4]}
  //       {tiles[5]}
  //     </tr>
  //     <tr>
  //       {tiles[6]}
  //       {tiles[7]}
  //       {tiles[8]}
  //     </tr>
  //   </table>
  // }
});

//
//
// this.props.itemsStore.push({
//   testHere: true
// });
