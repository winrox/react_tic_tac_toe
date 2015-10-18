var React = require('react');

var newValue = 0;

module.exports = React.createClass({

  render: function() {

    return(
        <img
          id={this.props.tile.id}
          src={this.props.tile.src}
          onClick={this.handleTileClick}/>
    )
  },

  handleTileClick: function() {
    console.log("a click was heard on tile " + this.props.tile.id)
    newValue+=1;
    console.log("newValue = " + newValue);

    return (newValue);
  }
});
