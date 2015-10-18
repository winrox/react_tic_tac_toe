var React = require('react');
var Tile = require('./tile');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        {this.renderGrid(this.renderTiles())}
      </div>
    )
  },

  rendertTiles: function() {
    if(!this.props.tiles.game-play) {
      return
    } else {
      var tiles = [];

      for(var key in this.props.tiles) {
        var tilesCollection = this.props.tiles[key];
        tile.key = key;

        tilesCollection.push(
          <Tile
            tile = {this.props.tiles[key]}
            key = {key}
            >
          </Tile>
        )
      }
      return tilesCollection;
    }
  },
/* May need to use the proper keys from firebase to identify each tile */
  renderGrid: function() {
    return <table>
      <tr>
        {tilesCollection[0]}
        {tilesCollection[1]}
        {tilesCollection[2]}
      </tr>
      <tr>
        {tilesCollection[3]}
        {tilesCollection[4]}
        {tilesCollection[5]}
      </tr>
      <tr>
        {tilesCollection[6]}
        {tilesCollection[7]}
        {tilesCollection[8]}
      </tr>
    </table>
  }
});
