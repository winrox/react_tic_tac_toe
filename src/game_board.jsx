var React = require('react');
var Tile = require('./tile');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
         {this.renderGrid()}
      </div>
    )
  },

  getTileId: function(id) {
    /* iterate through each tile in tiles */
    for(var index in this.props.tiles) {
      var tile = this.props.tiles[index];

      if(tile.id == id) {
        /* if this is the tile we are looking for then return it */
        return tile;
      }
    }
  },

  renderGrid: function() {

    return (
      <div>
        <table>
          <tr>
            <td>
              <Tile tile={this.getTileId('a1')} />
            </td>
            <td>
              <Tile tile={this.getTileId('a2')} />
            </td>
            <td>
              <Tile tile={this.getTileId('a3')} />
            </td>
          </tr>
          <tr>
            <td>
              <Tile tile={this.getTileId('b1')} />
            </td>
            <td>
              <Tile tile={this.getTileId('b2')} />
            </td>
            <td>
              <Tile tile={this.getTileId('b3')} />
            </td>
          </tr>
          <tr>
            <td>
              <Tile tile={this.getTileId('c1')} />
            </td>
            <td>
              <Tile tile={this.getTileId('c2')} />
            </td>
            <td>
              <Tile tile={this.getTileId('c3')} />
            </td>
          </tr>
        </table>
      </div>
    );
  }
});

//
//
// this.props.itemsStore.push({
//   testHere: true
// });
