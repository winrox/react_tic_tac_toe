var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="center-text">
        <h4>
          <alertMessage />
        </h4>
      </div>
    );
  }
});
