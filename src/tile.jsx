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
        <img
          id={this.props.tile.id}
          src={this.props.tile.src}
          onClick={this.handleTileClick}/>
    )
  },

  handleTileClick: function() {
    return {} //hook this up later
  }
});
