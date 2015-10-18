var React = require('react');
var Tile = require('./tile');

module.exports = React.createClass({
  render: function() {
    console.log(this.props.tiles);
    return (
      <div>
         {this.rendertTiles()}
      </div>
    )
  },

  rendertTiles: function() {
    if(!this.props.tiles) {
      return
    } else {
      var children = [];

      for(var key in this.props.tiles) {
        var tile = this.props.tiles[key];
        tile.key = key;

        children.push(
          <Tile
            tile = {this.props.tiles[key]}
            key = {key}
            >
          </Tile>
        )
      }
      return children;
    }
  },

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
