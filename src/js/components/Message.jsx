import React from 'react';
let {Component} = React;

export default class Message extends Component{
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
