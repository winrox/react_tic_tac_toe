var React = require('react');

// var newValue = 0;

module.exports = React.createClass({

  render: function() {

    return(
        <img
          id={this.props.tile.id}
          src={this.props.tile.src}
          onClick={this.props.clickHandler}/>
    )
  }
});
