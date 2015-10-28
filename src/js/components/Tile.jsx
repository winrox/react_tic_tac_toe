import React from 'react';

var Tile = React.createClass({
  render: function() {
    var srcImg = '../img/blank.png';

    if(this.props.tile.value == 'x') {
      srcImg = '../img/X.png'
    }
    else if(this.props.tile.value == 'o') {
      srcImg = '../img/O.png'
    }

    return (
      <td>
        <img id={this.props.tile.id} src={srcImg} className="img-rounded" />
      </td>
    );
  }
});

module.exports = Tile;
