import React from 'react';

var Tile = React.createClass({
  render: function() {
    var srcImg = '../img/blank.png';

    return (
      <td>
        <img id={this.props.tile.id} src={srcImg} className="img-rounded" />
      </td>
    );
  }
});

module.exports = Tile;
