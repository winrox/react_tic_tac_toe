var React = require('react');

var Message = React.createClass({
  render: function() {
    return (
      <div className="center-text">
        <h4 className="alert-message">
          {this.props.message}
        </h4>
      </div>
    );
  }
});
module.exports = Message;
