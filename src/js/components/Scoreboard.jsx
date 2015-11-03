import React from 'react';

var Scoreboard = React.createClass({
  render() {
  return(
    <table className="col-sm-2">
      <thead>
        <tr>
          <td colSpan="2">scoreboard</td>
        </tr>
      </thead>
      <tr>
        <td><strong>X</strong></td>
        <td><strong>O</strong></td>
      </tr>
      <tr>
        <td><p id="x-score">{this.props.score.scoreX}</p></td>
        <td><p id="o-score">{this.props.score.scoreO}</p></td>
      </tr>
    </table>
  )
}
});

module.exports = Scoreboard;
