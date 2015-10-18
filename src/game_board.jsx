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
    for(var key in this.props.tiles) {
      var tile = this.props.tiles[key];

      if(tile.id == id) {
        return tile;
      }
    }
  },

  renderGrid: function() {
    var tyle = this.props.tiles

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
