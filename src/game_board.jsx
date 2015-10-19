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

  getTileById: function(id) {
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
    var tile = this.props.tiles;

    return (
      <div>
        <table>
          <tr>
            <td>
              <Tile
              tile={this.getTileById(tile[0].id)}
              clickHandler={this.props.clickHandler.bind(null, tile[0])}/>
            </td>
            <td>
            <Tile
            tile={this.getTileById(tile[1].id)}
            clickHandler={this.props.clickHandler.bind(null, tile[1])}/>
            </td>
            <td>
            <Tile
            tile={this.getTileById(tile[2].id)}
            clickHandler={this.props.clickHandler.bind(null, tile[2])}/>
            </td>
          </tr>
          <tr>
            <td>
            <Tile
            tile={this.getTileById(tile[3].id)}
            clickHandler={this.props.clickHandler.bind(null, tile[3])}/>
            </td>
            <td>
            <Tile
            tile={this.getTileById(tile[4].id)}
            clickHandler={this.props.clickHandler.bind(null, tile[4])}/>
            </td>
            <td>
            <Tile
            tile={this.getTileById(tile[5].id)}
            clickHandler={this.props.clickHandler.bind(null, tile[5])}/>
            </td>
          </tr>
          <tr>
            <td>
            <Tile
            tile={this.getTileById(tile[6].id)}
            clickHandler={this.props.clickHandler.bind(null, tile[6])}/>
            </td>
            <td>
            <Tile
            tile={this.getTileById(tile[7].id)}
            clickHandler={this.props.clickHandler.bind(null, tile[7])}/>
            </td>
            <td>
            <Tile
            tile={this.getTileById(tile[8].id)}
            clickHandler={this.props.clickHandler.bind(null, tile[8])}/>
            </td>
          </tr>
        </table>
      </div>
    );
  }

});
