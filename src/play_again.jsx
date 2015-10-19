var React = require('react');

module.exports = React.createClass({
  render: function() {
    return(
      <button onClick={this.props.playAgainClickHandler}>
        Play Again
      </button>
    )
  }
});
