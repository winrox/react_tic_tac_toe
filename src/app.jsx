var React = require('react');
var ReactFire = require('reactfire');
var FireBase = require('firebase');
var Message = require('./message');
var ScoreBoard = require('./scoreboard');
var GameBoard = require('./game_board');
var rootUrl = 'https://react-tic-tac-toe.firebaseio.com//';





var App = React.createClass({
  mixins: [ ReactFire ], // this allows you to use any methods from ReacFire (bindAsObject here)

  getInitialState: function() {
    return {
      winnerFound: false,
      loaded: false,
      tiles: {},
      scoreX: 0,
      scoreY: 0
    }
  },


  render: function() {

    return(
      <div className="col-md-8">
        <h1 className="text-center">
          <img src="https://www.codementor.io/assets/tutorial_icon/reactjs.png" />
          Tic Tac Toe
        </h1>
        <div id="game-header">
          <div className="table" id="scoreboard">
            <ScoreBoard />
          </div>
          <div id="Message">
             <Message />
          </div>
        </div>
      </div>
    );
  },



});

// this.props.tiles = {[
//   {id: "a1", src: "img/blank.png"},
//   {id: "a2", src: "img/blank.png"},
//   {id: "a3", src: "img/blank.png"},
//   {id: "b1", src: "img/blank.png"},
//   {id: "b2", src: "img/blank.png"},
//   {id: "b3", src: "img/blank.png"},
//   {id: "c1", src: "img/blank.png"},
//   {id: "c2", src: "img/blank.png"},
//   {id: "c3", src: "img/blank.png"},
// ]};

var element = React.createElement(App, {});
React.render(element, document.querySelector('.container'));




        //
        // <div className="table" id="game-table">
        //   <GameBoard />
        // </div>


// componentWillMount: function(){
//   this.fireBase = new FireBase(rootUrl + 'game-play/'); //new instance of firebase
//   this.bindAsObject(this.fireBase, 'game-play'); //get/set info in db tiles
//   this.fireBase.on('value', this.handleDataLoaded); //lets us listen to firebase value event
// },



// handleDataLoaded: function() {
//   this.setState({loaded: true});
// }
