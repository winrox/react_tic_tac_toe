import React from 'react';

var Message = React.createClass({
  render() {
    return (
      <div className="center-text">
        <h2 className="alert-message">
          {this.props.message}
        </h2>
      </div>
    );
  }
});
module.exports = Message;
