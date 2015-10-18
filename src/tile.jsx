var React = require('react');

module.exports = React.createClass({

  getInitialState: function() {
    return {
      id: 'id-test',
      src: 'src-test'
    }
  },

  render: function() {
    return(
      <td>
        <img
          id={this.props.tiles.id}
          src={this.props.tiles.src}
          onClick={this.handleTileClick}/>
      </td>
    )
  },

  handleTileClick: function() {
    return {} //hook this up later
  }
});
