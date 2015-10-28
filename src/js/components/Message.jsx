import React from 'react';

var Message = React.createClass({
  render: function() {
    return (
      <div className="center-text">
        <h1 className="alert-message">
          {this.props.message}
        </h1>
      </div>
    );
  }
});
module.exports = Message;
