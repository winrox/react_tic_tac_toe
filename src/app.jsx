var React = require('react');
var ReactFire = require('reactfire');
var FireBase = require('firebase');
var rootUrl = 'https://react-tic-tac-toe.firebaseio.com//';

var Tile = React.createClass({
  mixins: [ ReactFire ], // this allows you to use any methods from ReacFire (bindAsObject here)

  getInitialState: function() {

  },

  componentWillMount: function(){
    //TODO: hook up firebase here later
  },

  render: function() {
    return <div className="col-md-8">
      <h1 className="text-center">Tic Tac Toe</h1>
    </div>
  }

});

var element = React.createElement(Tile, {});
React.render(element, document.querySelector('.container'));
