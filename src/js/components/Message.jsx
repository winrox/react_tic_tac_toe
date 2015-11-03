import React from 'react';

export default class Message extends React.Component{
  render() {
    return (
      <div className="center-text">
        <h2 className="alert-message">
          {this.props.message}
        </h2>
      </div>
    );
  }
};
