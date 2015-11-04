import React from 'react';

const Scoreboard = (props) => (
  <table className="col-sm-2">
    <thead>
      <tr>
        <td colSpan="2">scoreboard</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>X</strong></td>
        <td><strong>O</strong></td>
      </tr>
      <tr>
        <td><p id="x-score">{props.score.scoreX}</p></td>
        <td><p id="o-score">{props.score.scoreO}</p></td>
      </tr>
    </tbody>
  </table>
);

export default Scoreboard;
